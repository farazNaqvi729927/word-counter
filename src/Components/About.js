//import { useState } from "react"
import React from 'react'

export default function About(props) {

  // const [myStyle,newsytle] = useState( {
  //       backgroundColor:'black',
  //       color:'white'
  //   }
  // )

  let myStyle = {
      color: props.Mode === 'dark'?'white':'black',
      backgroundColor: props.Mode === 'dark'? 'rgb(36 74 104)':'white'
  }
  //const [btnText,SetbtnText] = useState("Enable Dark Mode")

  
  // const Togglestyle = ()=>{
  //   if(myStyle.color === 'black'){
  //     newsytle( {
  //       backgroundColor:'black',
  //       color:'white',
  //       border:'1px solid white'
  //     } 
  //    )
  //    SetbtnText("Enable Light Mode");
  //   }

    
  //   else{
  //     newsytle( {
  //       backgroundColor:'white',
  //       color:'black'
  //     } 
  //    )
  //    SetbtnText("Enable Dark Mode");
  //   }
  // }
    
  return (
    <div className='container' style={{color: props.Mode === 'dark'?'white':'black'}}>
        <h2 className='my-3'>About Us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <div className='container my-3'>
        <button className='btn btn-primary' onClick={Togglestyle}>{btnText}</button>
    </div> */}
    </div>
  )
}
