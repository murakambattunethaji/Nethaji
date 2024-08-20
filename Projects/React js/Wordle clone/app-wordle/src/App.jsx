import React, { useState } from 'react';
import './App.css';

const WORD_LENGTH = 5;
const MAX_ATTEMPTS = 6;
const WORD_TO_GUESS = 'REACT';

const generateEmptyGrid = () => {
  return Array(MAX_ATTEMPTS).fill('').map(() => Array(WORD_LENGTH).fill(''));
};

const App = () => {
  const [grid, setGrid] = useState(generateEmptyGrid());
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    const value = e.target.value.toUpperCase();
    if (value.length <= WORD_LENGTH) {
      setInput(value);
    }
  };

  const handleSubmit = () => {
    if (input.length === WORD_LENGTH) {
      const newGrid = [...grid];
      newGrid[currentAttempt] = input.split('');
      setGrid(newGrid);

      if (input === WORD_TO_GUESS) {
        alert('Congratulations! You guessed the word!');
      } else if (currentAttempt === MAX_ATTEMPTS - 1) {
        alert(`Game over! The word was ${WORD_TO_GUESS}.`);
      }

      setInput('');
      setCurrentAttempt(currentAttempt + 1);
    }
  };

  const getCellColor = (letter, pos) => {
    if (!WORD_TO_GUESS.includes(letter)) return 'grey';
    if (WORD_TO_GUESS[pos] === letter) return 'green';
    return 'yellow';
  };

  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      <div className="grid">
        {grid.map((row, i) => (
          <div key={i} className="row">
            {row.map((letter, j) => (
              <div
                key={j}
                className="cell"
                style={{
                  backgroundColor: i < currentAttempt ? getCellColor(letter, j) : 'white',
                }}
              >
                {letter}
              </div>
            ))}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        maxLength={WORD_LENGTH}
        disabled={currentAttempt >= MAX_ATTEMPTS}
      />
      <button onClick={handleSubmit} disabled={input.length !== WORD_LENGTH}>
        Submit
      </button>
    </div>
  );
};

export default App;
