import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import circle from '../asexual.png'
import cross from '../cross.png'

let data=['','','','','','','','','']

function TicTacToe() {
    let[count,setCout]=useState(0)
    let [lock, setLock]=useState(false)

    let titleRef=useRef(null);

    let box1=useRef(null);
    let box2=useRef(null);

    let box3=useRef(null);

    let box4=useRef(null);

    let box5=useRef(null);
    let box6=useRef(null);
    let box7=useRef(null);
    let box8=useRef(null);
    let box9=useRef(null);

    let box_array=[box1,box2,box3, box4,box5,box6,box7,box8,box9]



    const toggle=(e,num)=>{
        if(lock){
            return 0;
        }
        if(count%2===0){
            e.target.innerHTML=`<img src='${cross}'/>`
            data[num]='X';
            setCout(++count)
        }
        else{
            e.target.innerHTML=`<img src='${circle}'/>`
            data[num]='O';
            setCout(++count)
        }
        CheckWin()

    }
 const CheckWin=()=>{
    if(data[0]===data[1]&& data[1]===data[2] && data[2]!==''){
       
        Won(data[2])
    }
    else if(data[3]===data[4]&& data[4]===data[5] && data[5]!==''){
       
        Won(data[5])
    }
    else if(data[6]===data[7]&& data[7]===data[8] && data[8]!==''){
       
        Won(data[8])
    }
    else if(data[0]===data[3]&& data[3]===data[6] && data[6]!==''){
       
        Won(data[6])
    }
    else if(data[1]===data[4]&& data[4]===data[7] && data[7]!==''){
       
        Won(data[7])
    }
    else if(data[2]===data[5]&& data[5]===data[8] && data[8]!==''){
       
        Won(data[8])
    }
    else if(data[0]===data[4]&& data[4]===data[8] && data[8]!==''){
       
        Won(data[8])
    }
    else if(data[0]===data[1]&& data[1]===data[2] && data[2]!==''){
       
        Won(data[2])
    }
    else if(data[0]===data[4]&& data[4]===data[8] && data[8]!==''){
       
        Won(data[8])
    }
    else if(data[2]===data[4]&& data[4]===data[6] && data[6]!==''){
       
        Won(data[6])
    }


 }
 const Won=(winner)=>{
setLock(true)
if(winner==="X"){
    titleRef.current.innerHTML=`Congratulations:<img src='${cross}'/> you are winner`
}else{
    titleRef.current.innerHTML=`Congratulations:<img src='${circle}'/> you are winner`
}
 }

 const reset=()=>{
    setLock(false);
    let data=['','','','','','','','','']
    titleRef.current.innerHTML=`<h1>TIC TAC TOE in<span>React</span></h1>`
    box_array.map((e)=>{
        e.current.innerHTML=''
    })
 }

  return (
    <div className='container'>
        <h1 className='title' ref={titleRef}>TIC TAC TOE in<span>React</span></h1>
        <div className='board'>
            <div className='row1'>
                <div className='boxes' ref={box1} onClick={(e)=>toggle(e,0)}></div>
                <div className='boxes'ref={box2} onClick={(e)=>toggle(e,1)}></div>
                <div className='boxes' ref={box3} onClick={(e)=>toggle(e,2)}></div>
            </div>
            <div className='row2'>
                <div className='boxes'ref={box4} onClick={(e)=>toggle(e,3)}></div>
                <div className='boxes'ref={box5} onClick={(e)=>toggle(e,4)}></div>
                <div className='boxes' ref={box6} onClick={(e)=>toggle(e,5)}></div>
            </div>
            <div className='row3'>
                <div className='boxes' ref={box7} onClick={(e)=>toggle(e,6)}></div>
                <div className='boxes'ref={box8} onClick={(e)=>toggle(e,7)}></div>
                <div className='boxes'ref={box9} onClick={(e)=>toggle(e,8)}></div>
            </div>
           
        </div>
        <button className='reset' onClick={reset}>Reset</button>
      
    </div>
  )
}

export default TicTacToe
