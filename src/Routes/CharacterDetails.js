import React from "react";
import { Link,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncCharacterDetail } from "../redux/bbSlice";
function CharacterDetails() {

  const {char_id} =useParams();
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(getAsyncCharacterDetail(char_id))
  },[])

  const chars =useSelector(state=> state.bb.items)
  

  return (
    <>
      <nav className="bg-zinc-400" text-center>
        <Link to="/" className="font-sans text-slate-700 ">Characters</Link>  
        <Link to="/quotes" className="font-sans text-slate-700 ml-2">Quotes</Link>
      </nav>
     
      
      <div className="bg-zinc-300 p-3 max-h-full text-slate-700">
      <h1><em>Details of Characters</em></h1>
        <h2>{chars[0].name}</h2>
        <img
            className="w-48 focus:pointer-events-auto rounded-md hover:shadow-2xl"
            src={chars[0].img}
            alt="pics"/>
        <h5>Birthday: {chars[0].birthday}</h5>    
        <h5>Nickname: {chars[0].nickname}</h5>    
        <h5>Real Name :{chars[0].portrayed}</h5> 
        <div>
          <em>Occupations in the Breaking Bad:</em>
        {chars[0].occupation.map(occ=>
          <ul>
            <li>{occ}</li>
          </ul>)}
          </div>      
           
      </div>
    </>
  );
}

export default CharacterDetails;
