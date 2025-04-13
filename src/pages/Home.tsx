import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Home.css';

export default function Home() {
    return (
        <Box className="home-container">
            <div className="home-stack">
                <div className="music-item">
                    <Typography className="music-title">
                        Kanye West
                    </Typography>
                    <img
                        src="/images/iwonder.png"
                        alt="Capa da música"
                        className="music-cover"
                    />
                    <Typography className="music-title">
                        I Wonder
                    </Typography>
                </div>
                <div className="music-item">
                    <Typography className="music-title">
                        Rihanna
                    </Typography>
                    <img
                        src="/images/Rihanna.jpg"
                        alt="Capa da música"
                        className="music-cover"
                    />
                    <Typography className="music-title">
                        Bitch Better Have My Money
                    </Typography>
                </div>
                <div className="music-item">
                <Typography className="music-title">
                        Red Velvet
                    </Typography>
                    <img
                        src="/images/redvelvet.jpg"
                        alt="Capa da música"
                        className="music-cover"
                    />
                    <Typography className="music-title">
                        Chill Kill
                    </Typography>
                </div>
                <div className="music-item">
                <Typography className="music-title">
                        New Jeans
                    </Typography>
                    <img
                        src="/images/newjeans.jpg"
                        alt="Capa da música"
                        className="music-cover"
                    />
                    <Typography className="music-title">
                        ETA
                    </Typography>
                </div>
                <div className="music-item">
                <Typography className="music-title">
                        Billie Eilish
                    </Typography>
                    <img
                        src="/images/chihiro.jpg"
                        alt="Capa da música"
                        className="music-cover"
                    />
                    <Typography className="music-title">
                        Chihiro
                    </Typography>
                </div>
            </div>
        </Box>
    );
} 