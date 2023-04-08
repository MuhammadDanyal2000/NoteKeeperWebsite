import React from "react";

function ImportantItem(props){
    return(
        <div className="importantItem">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default ImportantItem;