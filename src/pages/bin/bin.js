import React, { useContext } from "react";
import "./bin.css"
import BinItem from "./binitem";
import { NoteContext } from "../../context/contex-provider";


function Bin() {
    const { trash } = useContext(NoteContext)
    return (
        <div className="bin">
            {trash.map((item, index) =>
                <BinItem
                    id={index}
                    title={item.title}
                    content={item.content}
                />
            )}

        </div>
    )
}

export default Bin;