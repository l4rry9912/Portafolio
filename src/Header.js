import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Zenitho } from 'uvcanvas';
import './Header.css'; // Asegúrate de tener estilos adecuados en Header.css

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setVisible(scrollTop <= lastScrollTop);
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`header ${visible ? 'visible' : 'hidden'}`}>
            <div className="background-header">
                <Zenitho className="zenitho-background"/>
            </div>
            <div className="header-content">
                <div className="row align-items-center">
                    <div className="col">
                        <h1 className="name">Larry Rodriguez</h1>
                    </div>
                    <div className="col text-right">
                        <div className="menu">
                            {isMobile && (
                                <FaBars className="btn-menu" onClick={toggleMenu} />
                            )}
                            <ul className={`menu-items ${isMobile && menuOpen ? 'open' : ''}`}>
                                <li><a href="#sobremi">Sobre mí</a></li>
                                <li><a href="#habilidades">Habilidades</a></li>
                                <li><a href="#contacto">Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
