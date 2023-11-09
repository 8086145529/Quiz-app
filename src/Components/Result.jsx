import React, { useEffect } from 'react'
import Victorysound from '../Assests/Victorysoundeffect.mp3'
function Result({counterCorrectAnswers}) {

 useEffect(()=>{
  End()
 },[])

 const End = () =>{
  new Audio(Victorysound).play()
 }
  
  return (
   <>
        <p>
           You got <strong>{counterCorrectAnswers}</strong> correct!
        </p>
        <p style={{color:'#EB7252'}}>Thank you for playing!</p>
   </>
  )
}

export default Result