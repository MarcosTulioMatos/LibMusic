import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Home.css';

export default function Home() {
    return (
        <Box className="home-container">
            <div className="home-stack">
                <div className="music-item">
                    <img 
                        src="/placeholder-music.jpg" 
                        alt="Capa da música" 
                        className="music-cover"
                    />
                    <Typography className="music-title">
                        Nome da Música
                    </Typography>
                </div>
                <div className="music-item">
                    <img 
                        src="/placeholder-music.jpg" 
                        alt="Capa da música" 
                        className="music-cover"
                    />
                    <Typography className="music-title">
                        Nome da Música
                    </Typography>
                </div>
                <div className="music-item">
                    <img 
                        src="/placeholder-music.jpg" 
                        alt="Capa da música" 
                        className="music-cover"
                    />
                    <Typography className="music-title">
                        Nome da Música
                    </Typography>
                </div>
                <div className="music-item">
                    <img 
                        src="/placeholder-music.jpg" 
                        alt="Capa da música" 
                        className="music-cover"
                    />
                    <Typography className="music-title">
                        Nome da Música
                    </Typography>
                </div>
                <div className="music-item">
                    <img 
                        src="/placeholder-music.jpg" 
                        alt="Capa da música" 
                        className="music-cover"
                    />
                    <Typography className="music-title">
                        Nome da Música
                    </Typography>
                </div>
            </div>
        </Box>
    );
} 