
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import CATEGORIES from './Constants/categories';
import Category from './Components/Category';
import { useState } from 'react';
import questionsArt from './data/art.json'
import questionsEntertainment from './data/entertainment.json'
import questionsHistory from './data/history.json'
import QuestionBox from './Components/QuestionBox';
function App() {
  const [category, setCategory] = useState(null)
  const [questions, setQuestions] = useState([])

  const setCurrentCategory = (category) => {
    setCategory(category); //

    switch (category.name) {
      case CATEGORIES.art.name:
        setQuestions(questionsArt)
        break;
      case CATEGORIES.entertainment.name:
        setQuestions(questionsEntertainment)
        break;
        case CATEGORIES.history.name:
          setQuestions(questionsHistory)
          break;



    }
  }

  return (
    <Container>
      <Row className='my-5' >
        <Col className='text-center'>
          {/* onClick={()=>setCategory(null)} this causes the user to return/redirect into the home/category section on clicking the React Quiz text */}
          <h1 onClick={()=>setCategory(null)}>React Quiz</h1>
        </Col>
      </Row>
      {/* The Object.values() method in JavaScript is used to extract the values of an object and return them as an array */}
      {/* Here we get the array of 3 objects with one object become this {
            name : 'Art',
            icon : faPalette,
            color: "green",
        } .because this 3 objects are the values of keys present in CATEGORIES object.one item will be one object*/}
      
      
      {/* This below set of codes indicate the new section that opens when the user selects one of the categories*/}
      { category? (
        <>
         {/* <>{category.name}</> */}
        <Row className='d-flex justify-content-center mb-4'>
          <Col md={4} className='text-center'>
          <Category category={category} size='sm'/>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Col md={4} className='text-center'>
            {/* Selector of QuestionBox component  */}
              <QuestionBox questions={questions} />
          </Col>
        </Row>
        </>
      ):(
        <>
        {Object.values(CATEGORIES).map((item, index) => (
          <Row key={index} className='d-flex justify-content-center mb-4'>
            <Col md={4}>
              {/* {item.name} */}
              {/* category is the property (we access category in Category component as props.category) through which the item is passed to the Category component selector.Here we pass the item that we get to the Category component to use this item in that component */}
              <Category category={item} onSelect={setCurrentCategory} />
            </Col>
          </Row>
        ))
  
        }
        </>
      )
     }
    </Container>
  );
}

export default App;
