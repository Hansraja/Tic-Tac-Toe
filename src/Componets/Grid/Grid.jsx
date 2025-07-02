import{ useState } from 'react';
import Card from '../Card/Card';
import './Grid.css';
import isWinner from '../../helpers/ckeckWinner';
function Grid({numberOfCards}){
 const [board, setBoard] = useState(Array(numberOfCards).fill(""));
 const [turn, setTurn] = useState(true);
 const [winner, setWinner] = useState(null);
 function play(index){
  if (turn==true){
    board[index] = "o"; 
  }else{
    board[index] = 'x';
  }
  const win = isWinner(board, board[index]);
  if (win) {
    setWinner(win);
  }
  setBoard([...board]);
  setTurn(!turn);
 }
 function reset(){
  setBoard(Array(numberOfCards).fill(""));
  setTurn(true);
  setWinner(null);
 }

 return (
  <div className='grid-wrapper'>
    <h3 className='turn-highlight'>Current Turn: {(turn)?'o':'x'}</h3>
    <div className='grid'>
      {board.map((el, index) => <Card gameEnd={(winner)? true : false} key={index} onPlay={play} player={el} index={index} />)}
     
    </div>
    {
    winner &&(
        <div className='winner-wrapper'>
        <h3 className='winner-highlight'>Winner is: {winner}</h3>
        <button className='reset' onClick={reset}>Reset</button>
        </div>
      )
    }
  </div>
 )

}
export default Grid;