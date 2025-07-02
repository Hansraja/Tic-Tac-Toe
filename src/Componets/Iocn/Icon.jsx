import { FaPenToSquare, FaRegCircle, FaTimes } from 'react-icons/fa';
function Icon({name}){
  if(name == "circle"){
    return <FaRegCircle />;
  }
  else if(name == "cross"){
    return <FaTimes />;
  }
  else{
    return <FaPenToSquare />;
  }
}
export default Icon;