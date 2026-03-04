import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Zenitho } from 'uvcanvas';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setVisible(scrollTop <= lastScrollTop);
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header
            className="fixed-top d-flex justify-content-center mt-3"
            style={{
                transition: 'top 0.5s ease',
                top: visible ? '0' : '-200px',
                zIndex: 1000
            }}
        >
            <div
                className="position-relative rounded-pill shadow overflow-visible"
                style={{ width: '70%', height: '70px' }}
            >
                <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden rounded-pill">
                    <Zenitho />
                </div>
                <div className="container-fluid h-100 position-relative p-1">
                    <div className="d-flex justify-content-between align-items-center h-100">

                        <div className="p-5">
                            <h5 className="mb-0 text-center text-dark">
                                Larry Rodriguez
                            </h5>
                        </div>

                        <div className="p-5">
                            <ul className="d-none d-md-flex list-unstyled gap-4 mb-0 ">
                                <li><a className="text-dark text-decoration-none" href="#sobremi">Sobre mí</a></li>
                                <li><a className="text-dark text-decoration-none" href="#habilidades">Habilidades</a></li>
                                <li><a className="text-dark text-decoration-none" href="#contacto">Contacto</a></li>
                            </ul>
                            <FaBars
                                className="d-md-none fs-4 text-dark"
                                onClick={toggleMenu}
                                style={{ cursor: 'pointer' }}
                            />
                        </div>

                    </div>
                </div>

                {menuOpen && (
                    <div
                        className="mt-1 d-md-none position-absolute start-0 w-100 bg-primary text-center py-3 shadow"
                        style={{ top: '70px', borderRadius: '20px' }}
                    >
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2">
                                <a className="text-white text-decoration-none" href="#sobremi">Sobre mí</a>
                            </li>
                            <li className="mb-2">
                                <a className="text-white text-decoration-none" href="#habilidades">Habilidades</a>
                            </li>
                            <li>
                                <a className="text-white text-decoration-none" href="#contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                )}

            </div>
        </header>
    );
}

export default Header;