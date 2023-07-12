import React from "react"

function Jumbotron (){
 return <div className="p-5 mb-4  rounded-3 container"id="jumbotron">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold text-start">A Warm Welcome!</h1>
        <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
        <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
      </div>
    </div>
}
export default Jumbotron