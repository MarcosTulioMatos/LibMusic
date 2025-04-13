import Logo from '../assets/sound.svg';
import './Header.css';
import { ModeToggle } from './mode-toggle';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="menuHeader">
                    <Link to="/">
                        <img className='logo' src={Logo} alt="Logo" />
                    </Link>
                    <h1>LibMusic</h1>
                </div>
                <Navigation />
                <div className="search">
                    <input type="text" placeholder="Pesquisar" />
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
};


