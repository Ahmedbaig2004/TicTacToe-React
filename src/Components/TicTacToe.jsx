import React, { useRef, useState } from 'react'
import './TicTacToe.css';
import cross_icon from './Assets/circle_icon.png';
import circle_icon from './Assets/cross_icon.png';


const TicTacToe=()=>{
let [data,setdata]=useState(Array(9).fill(null));
let[count,setcount]=useState(0);
const [winner, setWinner] = useState(null);
let title=useRef(null);
let box1=useRef(null);
let box2=useRef(null);
let box3=useRef(null);
let box4=useRef(null);
let box5=useRef(null);
let box6=useRef(null);
let box7=useRef(null);
let box8=useRef(null);
let box9=useRef(null);
let boxes=[box1,box2,box3,box4,box5,box6,box7,box8,box9]


const handleClick=(e,index)=>
{
    if (data[index]||winner) return;
   

    const newdata = [...data];

     if(count%2===0)
    {   newdata[index]='x';
        e.target.innerHTML=`<img  src="${cross_icon}"alt="" />`;
        
        setcount(++count);
        setdata(newdata);

    }
    else
        {newdata[index]='o';
            e.target.innerHTML=`<img src="${circle_icon}" alt="" />`;
            
            setcount(++count);
            setdata(newdata);

    
        }
    const wincheck=checkwinner(newdata);
    if (wincheck) {
        setWinner(wincheck);
        if(wincheck==='x')
        {
            title.current.innerHTML=`Congratulations <img src=${cross_icon} alt="" /> wins`
        }
        else if(wincheck==='o')
        {
            title.current.innerHTML=`Congratulations <img src=${circle_icon}  alt="" /> wins`
        }
        
    } else if (newdata.every(box => box !== null)) {
        setWinner('Draw');
        title.current.innerHTML="It is a draw";
    }

};
const resetBoard = () => {
    setdata(Array(9).fill(null));
    setcount(0);
    setWinner(null);
    title.current.innerHTML=`Tic-Tac-Toe`;
    boxes.forEach((e)=>{
        e.current.innerHTML="";
    })
   
  };
const checkwinner=(data)=>{
    const winningPattern= [[0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]]
    for(let pattern of winningPattern)
    {
        const[a,b,c]=pattern;
        if(data[a]&&data[a]===data[b] && data[a]===data[c])
        {
            return data[a];
        }

    }
    return null;
};


  return (
    <div className='container'>
        <div className="head">
        <h1 className="header" ref={title}>Tic-Tac-Toe</h1>
        </div>
        
        <div className="board">
            <div className="row1">
                <div className="box" ref={box1} onClick={(e)=>handleClick(e,0)}></div>
                <div className="box" ref={box2} onClick={(e)=>handleClick(e,1)}></div>
                <div className="box" ref={box3}onClick={(e)=>handleClick(e,2)}></div>
            </div>
            <div className="row2">
                <div className="box"  ref={box4} onClick={(e)=>handleClick(e,3)}></div>
                <div className="box" ref={box5} onClick={(e)=>handleClick(e,4)}></div>
                <div className="box" ref={box6}onClick={(e)=>handleClick(e,5)}></div>
            </div>
            <div className="row3">
                <div className="box " ref={box7} onClick={(e)=>handleClick(e,6)}></div>
                <div className="box" ref={box8} onClick={(e)=>handleClick(e,7)}></div>
                <div className="box" ref={box9}onClick={(e)=>handleClick(e,8)}></div>
            </div>     
        </div>  
        <div className="resetbutton">
            <button className='reset'  onClick={()=>{resetBoard()}}>Reset Board</button>
        </div>
        
      
    </div>
  );
}


export default TicTacToe
