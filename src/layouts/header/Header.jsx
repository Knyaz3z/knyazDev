import './header.scss'
import {use, useState} from "react";
import { Link } from 'react-router-dom';

function Header() {
    const navItem =
        [
            {
                title: 'main',
                link: '/'
            },
            {
                title: 'my works',
                link: '/MyWorks'
            },
            {
                title: 'mini projects',
                link: '/MiniProjects'
            },
            {
                title: 'contacts',
                link: '/Contacts'
            },
        ]
    const [isNavButtonActive, setActive] = useState(false)
    return (
        <nav className="nav">
            <ul className="nav_list container">
                {
                    navItem.map(item => (
                        <NavItems
                            title={item.title}
                            link={item.link}
                            className='nav_item'
                        />
                    ))
                }

            </ul>
            <li className="mobile__nav">
                <button onClick={() => setActive(!isNavButtonActive)}
                        className={`nav__button ${isNavButtonActive ? 'active' : ''}`}><img className='mobile__nav-img'
                                                                                            src="/mobile_nav_menu.png"
                                                                                            alt=""/></button>
            </li>
            {
                isNavButtonActive ?
                    <ul className='nav__mini-menu'>
                        {
                            navItem.map(item => (
                            <NavItems
                                title={item.title}
                                link={item.link}
                                className='nav__mini-item'
                            />
                        ))
                        }
                    </ul>
                    :
                    null
            }
        </nav>
    )
}

export function NavItems({title, link, className}) {
    return (
        <Link to={link}><li className={className}>{title}</li></Link>
    )
}

export default Header;