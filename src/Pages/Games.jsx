
import React from 'react';
import 'D:/pet-well/src/Pages/CSS/Games.css';

const Games = () => {
    // Define an array of game objects with image URLs
    const games = [
        { id: 1, imageUrl: 'game1.jpg', gameUrl: 'https://poki.com/en/g/catpad' },
        { id: 2, imageUrl: 'game2.jpg', gameUrl: 'https://www.santagames.net/games/cat-and-mouse.htm' },
        { id: 3, imageUrl: 'game3.jpg', gameUrl: 'https://poki.com/en/g/elixpur-idle' },
        { id: 4, imageUrl: 'game4.jpg', gameUrl: 'https://poki.com/en/g/kitty-cats' },
        { id: 5, imageUrl: 'game5.jpg', gameUrl: 'https://poki.com/en/g/catpad' },
        { id: 6, imageUrl: 'game6.jpg', gameUrl: 'https://www.santagames.net/games/cat-and-mouse.htm' },
        { id: 7, imageUrl: 'game7.jpg', gameUrl: 'https://www.crazygames.com/game/funny-food-duel' },
        { id: 8, imageUrl: 'game8.jpg', gameUrl: 'https://www.crazygames.com/game/funny-food-duel' },
        { id: 9, imageUrl: 'game9.jpg', gameUrl: 'https://www.santagames.net/games/cat-and-mouse.htm' },
        { id: 10, imageUrl: 'game10.jpg', gameUrl: 'https://poki.com/en/g/catpad' },
        { id: 11, imageUrl: 'game11.jpg', gameUrl: 'https://poki.com/en/g/kitty-cats' },
        { id: 12, imageUrl: 'game12.jpg', gameUrl: 'https://poki.com/en/g/elixpur-idle'},
    ];

    const handleClick = (gameUrl) => {
        // Redirect to the provided game URL
        window.location.href = gameUrl;
    };

    return (
        <div className="games-container">
            {games.map(game => (
                <div key={game.id} className="game-box" onClick={() => handleClick(game.gameUrl)}>
                    <img src={game.imageUrl} alt={`Game ${game.id}`} />
                </div>
            ))}
        </div>
    );
};



export default Games;
