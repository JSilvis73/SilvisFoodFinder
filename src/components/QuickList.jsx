import React from "react";
import '../App.css';


export default function QuickList(props) {
    return ( 
        
         <div className='QuickListButtons'>
            <button className="QLButton" onClick={props.onClickAdd} value={'Arbys'} >Arbys</button>
            <button className="QLButton" onClick={props.onClickAdd} value={'Burger King'} >Burger King</button>
            <button className="QLButton" onClick={props.onClickAdd} value={'Chickfila'} >Chickfila</button>
            <button className="QLButton" onClick={props.onClickAdd} value={'Dairy Queen'} >Dairy Queen</button>
            <button className="QLButton" onClick={props.onClickAdd} value={'KFC'} >KFC</button>
            <button className="QLButton" onClick={props.onClickAdd} value={'Mcdonalds'}>McDonalds</button>
            <button className="QLButton" onClick={props.onClickAdd} value={'Taco Bell'} >Taco Bell</button>
            <button className="QLButton" onClick={props.onClickAdd} value={'Wendys'}>Wendys</button>
         </div>
     
    )
}