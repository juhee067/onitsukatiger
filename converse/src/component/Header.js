import { useEffect, useRef, useState } from 'react';

const NAVLINK = [
    { id: 1, menu: "NEW", link: '/' },
    { id: 2, menu: "MEXICO 66", link: '/' },
    { id: 3, menu: "MEN", link: '/' },
    { id: 4, menu: "WOMEN", link: '/' },
    { id: 5, menu: "KIDS", link: '/' },
    { id: 6, menu: "TIGER GALLERY", link: '/' },
]


const Header = () => {
    
    return (
        <header className="Header" >
            <div className="hd_wrap">
                <div className='left'><h1>
                    <a href="/" >
                        onitsuka
                    </a>
                </h1>
                <nav className="Gnb inner">
                    <ul>
                        {
                            NAVLINK.map((it, idx) => {
                                return (
                                    <li key={it.id}>
                                        <a href={it.link}>{it.menu}
                                        <ul className="submenu">

                                        </ul>
                                        </a>
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