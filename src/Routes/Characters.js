import React from "react";
import { Link,useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncCharacters} from "../redux/bbSlice";
import ".././style.css";

function Characters() {
  const chars = useSelector((state) => state.bb.items);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAsyncCharacters());
  },[]);

  let navigate = useNavigate(); 
  const routeChange = (id) =>{ 
    let path = `/details/${id}`; 
    navigate(path);
  }

  
  return (
    <div className="bg-gray-100">
      <nav>
        <Link to="/quotes" className="font-sans text-slate-700 ">Quotes</Link>
      </nav> 
     {chars.map((char) => (
       
       <div key={char.char_id} className="inline-grid p-6 ">
          <img
            className="w-48 cursor-pointer focus:pointer-events-auto rounded-md hover:shadow-2xl"
            src={char.img}
            alt="pics"
            onClick={()=> routeChange(char.char_id)}
          />
          <h4 onClick={()=> routeChange(char.char_id)} className="names cursor-pointer"><em className="font-sans text-slate-700 ">{char.name}</em></h4>
        </div>
        
      ))}
    </div>
  );
}

export default Characters;
