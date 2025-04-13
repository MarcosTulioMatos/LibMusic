export default function Library() {
    return (
        <div className="library">
            <h1>Minha Biblioteca</h1>
            <div className="library-content">
                <div className="playlists">
                    <h2>Playlists</h2>
                    <div className="playlist-grid">
                        {/* Aqui serão exibidas as playlists do usuário */}
                    </div>
                </div>
                <div className="favorites">
                    <h2>Favoritos</h2>
                    <div className="favorites-grid">
                        {/* Aqui serão exibidas as músicas favoritas */}
                    </div>
                </div>
            </div>
        </div>
    );
} 