
import React from 'react';
import 'D:/pet-well/src/Pages/CSS/Games.css';

const Games = () => {
    // Define an array of game objects with image URLs
    const games = [
        { id: 1, imageUrl: 'game1.jpg' },
        { id: 2, imageUrl: 'game2.jpg' },
        { id: 3, imageUrl: 'game3.jpg' },
        { id: 4, imageUrl: 'game4.jpg' },
        { id: 5, imageUrl: 'game5.jpg' },
        { id: 6, imageUrl: 'game6.jpg' },
        { id: 7, imageUrl: 'game7.jpg' },
        { id: 8, imageUrl: 'game8.jpg' },
        { id: 9, imageUrl: 'game9.jpg' },
        { id: 10, imageUrl: 'game10.jpg' },
        { id: 11, imageUrl: 'game11.jpg' },
        { id: 12, imageUrl: 'game12.jpg' },
    ];

    return (
        <div className="games-container">
            {games.map(game => (
                <div key={game.id} className="game-box" onClick={() => handleClick(game.id)}>
                    <img src={game.imageUrl} alt={`Game ${game.id}`} />
                </div>
            ))}
        </div>
    );
};

// Function to handle click event
const handleClick = (gameId) => {
    // Perform action when a game box is clicked
    console.log(`Game with id ${gameId} clicked`);
};

export default Games;
