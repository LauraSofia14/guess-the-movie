    import React, { useState } from 'react';
    import styled from 'styled-components';

    const movies = [
        { name: "Forrest Gump", emoji: "🏃🍫🍤" },
        { name: "The Matrix", emoji: "🕶️💊👽" },
        { name: "Titanic", emoji: "🚢❄️💔" },
        { name: "Jurassic Park", emoji: "🦖🌴🚙" },
        { name: "The Lion King", emoji: "🦁👑🌅" },
        { name: "Star Wars", emoji: "⚔️🚀🌌" },
        { name: "The Avengers", emoji: "🦸‍♂️🦸‍♀️💥" },
        { name: "Harry Potter", emoji: "⚡🧙‍♂️🔮" },
        { name: "The Terminator", emoji: "🤖🔫🕶️" },
        { name: "Indiana Jones", emoji: "🤠🔍💎" },
        { name: "Back to the Future", emoji: "⏰🚗💥" },
        { name: "The Shawshank Redemption", emoji: "🔒🔑💰" },
        { name: "The Godfather", emoji: "🍕🤵🔫" },
        { name: "The Dark Knight", emoji: "🦇♞👨‍🦯" },
        { name: "Pulp Fiction", emoji: "🍔🔫🕶️" },
        { name: "Schindler's List", emoji: "📜🚂🔴" },
        { name: "The Lord of the Rings: The Return of the King", emoji: "🧝‍♂️🧙‍♂️🗡️" },
        { name: "The Silence of the Lambs", emoji: "🔇🐑🍖" },
        { name: "Fight Club", emoji: "👊💼🚽" },
        { name: "Inception", emoji: "🌀👩‍🚀🎩" },
        { name: "The Shawshank Redemption", emoji: "🔒🔑💰" },
    ];

    const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    margin-top: 50px;
    `;

    const GreenButton = styled.button`
    padding: 10px 20px;
    background-color: green; 
    color: white;
    padding-top: 5%;
    border-radius: 4px;
    cursor: pointer;
    `;

    const Emoji = styled.span`
    font-size: 30px;
    margin-bottom: 20px;
    background.color: black;
    `;

    const Input = styled.input`
    padding: 15px;
    margin-bottom: 20px;
    font-size: 15px;
    border-radius:20px;
    `;

    function Game() {
    const [lives, setLives] = useState(3);
    const [points, setPoints] = useState(0);
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const [guess, setGuess] = useState('');
    const currentMovie = movies[currentMovieIndex];

    const handleGuess = () => {
        if (guess.toLowerCase() === currentMovie.name.toLowerCase()) {
            alert('¡Great, you guessed the movie!');
            setGuess('');
            setCurrentMovieIndex(currentMovieIndex + 1);
    
            const newPoints = points + 1; 
            setPoints(newPoints);
        }
        else {
            setLives(lives - 1);
            setGuess('');
        if (lives === 1)
            { 
                alert('¡Game Over!');
                setLives(3);
                setCurrentMovieIndex(0);
            } 
        else {
                alert('¡Oops! You lose a life.');
            }
        }
    };
    

    return (
        <GameContainer>
        <p>Points: {points}</p>   
        <p>Lives: {lives}</p>   
        <Emoji role="img" aria-label="movie-emoji">{currentMovie.emoji}</Emoji>
        <Input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="guess the movie"
        />
        <div>
        <GreenButton onClick={handleGuess}>Send</GreenButton>
        </div>
        
        </GameContainer>
    );
    }

    export default Game;
