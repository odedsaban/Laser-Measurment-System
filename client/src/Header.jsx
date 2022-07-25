import React from 'react';
import './style/header.scss'




function Header  ({isSideBarVisible,onToggleSideBar}){

   return( 
        <header>
            <button className={"menu__btn transition"} onClick={()=>onToggleSideBar(!isSideBarVisible)}>
                <span></span>
            </button>
        </header>)

}

export default Header;