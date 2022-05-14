import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncQuotes } from "../redux/bbSlice";
import ".././style.css";

function Quotes() {
  const chars = useSelector((state) => state.bb.items);
  const dispatch=useDispatch()

  React.useEffect(()=>{
    dispatch(getAsyncQuotes())
  },[])
    
  return (
    <div className="">
      <nav>
        <Link to="/" className="font-sans text-slate-200 ">Characters</Link>
      </nav>
       {chars.map((char) => (
        <li key={char.quote_id} className="p-3npm" >
          <div className="quotes">
          <h3 className="quo-title">{char.quote}</h3> 
          <em>Author:{char.author}</em>
          </div>
        </li>
      ))}
    </div>
  );
}

export default Quotes;
