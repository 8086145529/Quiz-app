import React, { useEffect } from 'react'
import Victorysound from '../Assests/Victorysoundeffect.mp3'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandsClapping} from "@fortawesome/free-solid-svg-icons";
function Result({counterCorrectAnswers}) {

 useEffect(()=>{
  End()
 },[])

 const End = () =>{
  new Audio(Victorysound).play()
 }
  
  return (
   <div>
       <div><FontAwesomeIcon icon={faHandsClapping} size='2xl' /></div>
        <p>
           You got <strong>{counterCorrectAnswers}</strong> correct!
        </p>
        <p style={{color:'#EB7252'}}>Thank you for playing!</p>
   </div>
  )
}

export default Result