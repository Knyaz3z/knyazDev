import './footer.scss'
import {NavItems} from "../header/Header";

function Footer() {
    const navItem =
        [
            {
                title: 'main',
                link: 'main'
            },
            {
                title: 'my works',
                link: 'my works'
            },
            {
                title: 'mini projects',
                link: 'mini projects'
            },
            {
                title: 'contacts',
                link: 'contacts'
            },
        ]
    return (
        <footer className='footer'>
            <div className="footer__content container">
                <ul className="footer__nav-list ">
                    {
                        navItem.map(item => (
                            <NavItems
                                title={item.title}
                                link={item.link}
                                className="footer__nav-item"
                            />
                        ))
                    }
                </ul>
                <p>Let’s build something great together!</p>
                <div className="footer__content-contacts">
                    <a href="mailto:knyaz010official@gmail.com">knyaz010official@gmail.com</a>
                    <div className='footer__content-sn'>
                        <a href=""><img src="/whatsapp__logo-white.png" alt=""/></a>
                        <a href=""><img src="/telegram__logo-white.png" alt=""/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;