import { useEffect, useRef, useState } from 'react';
import React from 'react';
import Dropdown from './Dropdown';

const NAVLINK = [
    { id: 1, menu: "NEW" },
    { id: 2, menu: "MEXICO" },
    { id: 3, menu: "MEN" },
    { id: 4, menu: "WOMEN" },
    { id: 5, menu: "KIDS" },
    { id: 6, menu: "GALLERY" },
]


const Header = props => {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
    return (
        <header className="Header" >
            <div className="hd_wrap">
                <div className='left'>
                    <h1>
                        <a href="/" >
                            onitsuka
                            <img src={process.env.PUBLIC_URL + "/assets/images/logo.svg"} alt="" />
                        </a>
                    </h1>
                    <nav className="Gnb inner">
                        <ul id='app'>
                            {
                                NAVLINK.map((it, idx) => {
                                    return (
                                        <li key={it.id} onFocus={e => setDropdownVisibility(!dropdownVisibility)}>
                                            <a href='/' >
                                                {it.menu}

                                            </a>
                                            <Dropdown className="submenu" visibility={dropdownVisibility}>
                                                <ul>
                                                    <li>item 1</li>
                                                    <li>item 2</li>
                                                    <li>item 3</li>
                                                    <li>item 4</li>
                                                </ul>
                                            </Dropdown>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav></div>

                <div className='top_search'>
                    <form action="#!">
                        <input type="text" placeholder="검색" required />
                        <button>
                            <i className="xi-search"></i>
                        </button>
                    </form>

                </div>

            </div>
        </header>
    )

}
export default Header;