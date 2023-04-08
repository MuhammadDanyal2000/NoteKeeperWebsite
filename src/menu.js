import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaTrash } from 'react-icons/fa';
import {TbTrash} from 'react-icons/tb';
import {HiOutlineHome} from 'react-icons/hi';
 import {BsBookmarkStar} from 'react-icons/bs';

import "./menu.css"

const MenuBar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleToggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark');
    };

    return (
        <nav className={darkMode ? 'dark' : ''} >
           
                <li>
                    <Link to="/"><HiOutlineHome size={24}/>  <span>Home</span></Link>
                </li>
                <li>
                    <Link to="/important"><BsBookmarkStar size={24}/> <span>Important</span></Link>
                </li>
                <li>
                    <Link to="/bin"> <TbTrash size={24}/><span>Bin</span></Link>
                </li>
                
                 
                        <label class="switch">
                            <input type="checkbox" onClick={handleToggleDarkMode}/>
                                <span class="slider"></span>
                        </label>

               
           
        </nav>
    );
};

export default MenuBar;


