import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSpring, animated } from 'react-spring'
import classNames from 'classnames' 
function Category({ category,size,onSelect}) {// OR function Category(props)
    const [hovering, setHovering] = useState(false)
    const styles = useSpring({
        transform: hovering ? 'rotate(5deg)' : 'rotate(0deg)'
    })
    return (
        <animated.div
         style={styles} 
         onMouseEnter={() => setHovering(true)}
         onMouseLeave={() => setHovering(false)}>
            <Card onClick={()=>onSelect(category)} className={`card bg-${category.color}`}>
                {/* This means that if size is 'sm', the class 'd-flex align-items-center justify-content-center p-2' will be applied to the Card.Body component. Otherwise, only 'text-center' will be applied. */}
                <Card.Body className={classNames('text-center', {'d-flex flex-column align-items-center justify-content-center p-2': size==='sm'})}>
                    {/* First install react-fontawesome using  npm install --save @fortawesome/react-fontawesome and install free-solid-svg-icons using npm install --save @fortawesome/free-solid-svg-icons in this project.
                    //Then we import the FontAwesomeIcon component and import that icon(like faPalette) we needed from "@fortawesome/free-solid-svg-icons" and when used, you supply the icon prop with the name of that icon.eg:const element = <FontAwesomeIcon icon={faCoffee} />*/}
                    <FontAwesomeIcon icon={category.icon} size="3x" /> 
                    {/*OR {props.category.name} */}
                
                    <Card.Title className='mt-2 mb-0'>{category.name}</Card.Title>
                </Card.Body>
            </Card>

        </animated.div>
    )
}

export default Category