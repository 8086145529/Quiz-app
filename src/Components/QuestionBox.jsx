import React, { useState } from 'react'
import { useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import classNames from 'classnames'
import Result from './Result'
import correctsound from '../Assests/Correctsoundeffect.mp3'
import wrongsound from '../Assests/Wrongsoundeffect.mp3'
// classnames (or classNames) is a utility library that helps conditionally apply class names to elements in React. It's commonly used when you want to apply different classes based on specific conditions.eg: <Card.Body className={classNames('text-center', {'d-flex flex-column align-items-center justify-content-center p-2': size==='sm'})}>, here the first one is the classname : second one is the condition.The classname applies only if the condition becomes true

const reorderAnswers = question => {
    const answers = [question.correct,...question.incorrect]
    for (let index = 0; index < answers.length;index++){
        const j = Math.floor(Math.random() * index)
        const tmp = answers[index]
        answers[index] = answers[j]
        answers[j] = tmp
    }
    return answers
}

function QuestionBox({questions}) {
    const [currentQuestionIndex,setCurrentQuestionIndex] =useState(0)
    const [currentQuestion,setCurrentQuestion] = useState(questions[0])
    const [answers,setAnswers] = useState([])
    const [selectedAnswer,setSelectedAnswer] = useState(null)
    const [countCorrectAnswers,setCountCorrectAnswers] = useState(0)
    const [isSubmitting,setIsSubmitting] = useState(false)
    const [isDone,setIsDone] = useState(false)

  

    useEffect(()=>{
        const question = questions[currentQuestionIndex]
        setCurrentQuestion(question)
        setAnswers(reorderAnswers(question))
    },[currentQuestionIndex])
    

  

    const Play1 = () =>{ 
        new Audio(correctsound).play() //new Audio(sound): This line creates a new instance of the Audio element. The Audio element is used to embed sound content in a web page. The sound variable should be defined elsewhere in your code, and it likely contains the path or URL to an audio file.
    }

    const Play2 = () =>{
        new Audio(wrongsound).play()
    }
    

  
    const selectAnswer = answer => {
        setIsSubmitting(true)
        setSelectedAnswer(answer)

        if (answer === currentQuestion.correct){
             setCountCorrectAnswers(countCorrectAnswers + 1)
        
              Play1() /// if answer === currentQuestion.correct, play the sound of correct answer by calling Play function
        }else{
            Play2()
        }

        setTimeout(() => {
            const newQuestionIndex = currentQuestionIndex + 1

            if (newQuestionIndex === questions.length) {
                setIsDone(true)
            }else{
                setCurrentQuestionIndex(newQuestionIndex)
                setIsSubmitting(false)
                setSelectedAnswer(null)
            }
        }, 750);

       
    }

    if (isDone) {
        return <Result counterCorrectAnswers={countCorrectAnswers}/>
    }

  return (
    <>
    <div>{currentQuestionIndex + 1}/{questions.length}</div>
    <div className='mb-4'>
        <strong dangerouslySetInnerHTML={{__html: currentQuestion.question}}/>
    </div>
    <div>
        <ListGroup className={classNames({disabled:isSubmitting})}>
           {answers.map((a,i)=>{
            const isSelectedAndSubmitting = isSubmitting && a === selectedAnswer
            return(
                <ListGroup.Item className={classNames({ 
                   correct: isSelectedAndSubmitting && a === currentQuestion.correct, 
                   incorrect: isSelectedAndSubmitting && a !== currentQuestion.correct
                 })
                } key={i} onClick={()=> selectAnswer(a)}>
                    <span dangerouslySetInnerHTML={{__html: a }}/>
                </ListGroup.Item>
            )
           })} 
        </ListGroup>
    </div>

    </>
  )
}

export default QuestionBox

