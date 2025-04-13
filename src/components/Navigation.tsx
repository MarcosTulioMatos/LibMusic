import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
    const location = useLocation();

    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className={location.pathname === '/' ? 'active' : ''}
                    >
                        Início
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/explore" 
                        className={location.pathname === '/explore' ? 'active' : ''}
                    >
                        Explorar
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/library" 
                        className={location.pathname === '/library' ? 'active' : ''}
                    >
                        Biblioteca
                    </Link>
                </li>
            </ul>
        </nav>
    );
} 