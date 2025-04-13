import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home">
            <h1>Bem-vindo ao LibMusic</h1>
            <p>Descubra e ouça suas músicas favoritas</p>
            <div className="home-buttons">
                <Link to="/explore" className="button">Explorar</Link>
                <Link to="/library" className="button">Minha Biblioteca</Link>
            </div>
        </div>
    );
} 