import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="not-found">
            <h1>404 - Página não encontrada</h1>
            <p>A página que você está procurando não existe.</p>
            <Link to="/" className="button">Voltar para a página inicial</Link>
        </div>
    );
} 