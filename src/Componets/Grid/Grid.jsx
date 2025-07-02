
import { useState } from 'react';
import Card from '../Card/Card';
import './Grid.css';
import isWinner from '../../helpers/ckeckWinner';

function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true); // true for 'o', false for 'x'
  const [winner, setWinner] = useState(null);

  function play(index) {
    if (board[index] !== "" || winner) return; // Don't allow moves after game ends

    const newBoard = [...board];
    newBoard[index] = turn ? "o" : "x"; // 'o' for true, 'x' for false
    setBoard(newBoard);

    const win = isWinner(newBoard, newBoard[index]);
    if (win) {
      setWinner(win);
    }

    setTurn(!turn);
  }

  function reset() {
    setBoard(Array(numberOfCards).fill(""));
    setTurn(true);
    setWinner(null);
  }

  // Draw condition: if the board is full and there's no winner
  const isDraw = board.every(cell => cell !== "") && !winner;

  return (
    <div className='grid-wrapper'>
      <h3 className='turn-highlight'>Current Turn: {turn ? 'o' : 'x'}</h3>
      <div className='grid'>
        {board.map((el, index) => (
          <Card gameEnd={!!winner || isDraw} key={index} onPlay={play} player={el} index={index} />
        ))}
      </div>

      {(winner || isDraw) && (
        <div className='winner-wrapper'>
          {winner ? (
            <h3 className='winner-highlight'>Winner is: {winner}</h3>
          ) : (
            <h3 className='winner-highlight'>It's a draw!</h3>
          )}
          <button className='reset' onClick={reset}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default Grid;
