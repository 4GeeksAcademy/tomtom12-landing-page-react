import React from "react"

function Card (props){
 return     <div className="card p-2" style={{ width: '19rem' }} id="card">
   <img src="https://placekitten.com/667" className="card-img-top" alt="..." />
   <div className="card-body">
     <h5 className="card-title">Card title</h5>
     <p className="card-text">{props.text}</p>
     <a href="#" className="btn btn-primary">Go somewhere</a>
   </div>
 </div>

  
  
  
  
 


}

export default Card