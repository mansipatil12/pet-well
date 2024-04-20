
import React from 'react';
import 'D:/pet-well/src/Pages/CSS/Games.css';

const Games = () => {
    // Define an array of game objects with image URLs
    const games = [
        { id: 1, imageUrl: 'src/Components/Assets/Gamification.png', gameUrl: 'https://poki.com/en/g/catpad' },
        { id: 2, imageUrl: 'src/Components/Assets/Gamification.png', gameUrl: 'https://www.santagames.net/games/cat-and-mouse.htm' },
        { id: 3, imageUrl: 'src/Components/Assets/Gamification.png', gameUrl: 'https://poki.com/en/g/elixpur-idle' },
        { id: 4, imageUrl: 'src/Components/Assets/Gamification.png', gameUrl: 'https://poki.com/en/g/kitty-cats' },
        { id: 5, imageUrl: 'src/Components/Assets/Gamification.png', gameUrl: 'https://poki.com/en/g/catpad' },
        { id: 6, imageUrl: 'src/Components/Assets/Gamification.png', gameUrl: 'https://www.santagames.net/games/cat-and-mouse.htm' },
        { id: 7, imageUrl: 'src/Components/Assets/Gamification.png', gameUrl: 'https://www.crazygames.com/game/funny-food-duel' },
        { id: 8, imageUrl: 'src/Components/Assets/Gamification.png', gameUrl: 'https://www.crazygames.com/game/funny-food-duel' },
        { id: 9, imageUrl: 'src/Components/Assets/Gamification.png', gameUrl: 'https://www.santagames.net/games/cat-and-mouse.htm' },
        { id: 10, imageUrl: 'src/Components/Assets/Gamification.png', gameUrl: 'https://poki.com/en/g/catpad' },
        { id: 11, imageUrl: 'src/Components/Assets/Gamification.png', gameUrl: 'https://poki.com/en/g/kitty-cats' },
        { id: 12, imageUrl: 'src/Components/Assets/Gamification.png', gameUrl: 'https://poki.com/en/g/elixpur-idle'},
    ];

    const handleClick = (gameUrl) => {
        // Redirect to the provided game URL
        window.location.href = gameUrl;
    };

    return (
        <div className="games-container">
            {games.map(game => (
                <div key={game.id} className="game-box" onClick={() => handleClick(game.gameUrl)}>
                    <div className="game-layout">
                        <img src={game.imageUrl} alt={`Game ${game.id}`} />
                        {/* You can add additional layout elements here */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Games;
