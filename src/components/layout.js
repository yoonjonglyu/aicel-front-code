import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div className="wrap">
            <header id="header">
                <nav className="header-nav">
                    <ul>
                        <li><Link to="/">Todo</Link></li>
                        <li><Link to="/grid">Grid</Link></li>
                        <li><Link to="/modals">Modals</Link></li>
                        <li><Link to="/counter">Counter</Link></li>
                        <li><Link to="/async">Async</Link></li>
                    </ul>
                </nav>
            </header>
            <main role="main" id="main">
                <article className="container">
                    {children}
                </article>
            </main>
            <footer id="footer">
                <p>Copyright &#169;ISA all right reserved.</p>
            </footer>
        </div>
    );
}

export default Layout;
