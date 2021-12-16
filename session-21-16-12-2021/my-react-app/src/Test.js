import React, { Component } from 'react';



export default class Test extends Component {
    render() {
      return (
        <div>
            <div class="container-fluid  bg-primary text-white text-center" >

                <h1>My First image Bootstrap Page</h1>
                    <p>Resize this responsive page to see the effect!</p> 
          

                <nav class="navbar navbar-expand bg-secondary">
                    <div class="col-lg-9">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Visit</a>
                            </li>
                        </ul>
                        </div>
                        
                            <div class="col-sm-auto">
                                <input type="search" placeholder="search images" />
                            </div>

                            <div class="col">
                                <button type="button" class="btn btn-primary">Basic</button>
                            </div>

                </nav>
            </div>

                <div class="container-fluid p-5 ">

                    <div class="row justify-content-around"> 

                        <div class="col-6">
                            <img src="https://images.herzindagi.info/image/2021/Jul/how-to-click-good-photos-social.jpg" class="float-img" alt="Cinque Terre" />
                        </div>

                        <div class="col-sm-auto p-5">
                            <button type="button" class="btn btn-primary">You can view all types of images</button>
                                <br></br> <br></br>
                            <button type="button" class="btn btn-primary">You can view all types of images</button>
                        
                    </div>
                        
                </div>

                <div class="container-fluid p-5">
                    <div class="row justify-content-around  " > 
                        <div class="col-3">
                            <div class="card" style={{width:"1200"}}>
                                <img class="card-img-top" src="https://www.teahub.io/photos/full/40-402760_light-color-background-for-website.jpg" alt="Card image" style={{width:"100"}}/>
                                    <div class="card-img-overlay">
                                        <h4 class="card-title">First card</h4>
                                        <p class="card-text">Some example text.</p><br></br><br></br><br></br>
                                        <a href="#" class="btn btn-primary">See First card</a>
                                    </div>
                            </div>
                        </div>

                        <div class="col-3">
                                <div class="card" style={{width:"1200"}}>
                                    <img class="card-img-top" src="https://www.teahub.io/photos/full/40-402760_light-color-background-for-website.jpg" alt="Card image" />
                                        <div class="card-img-overlay">
                                            <h4 class="card-title">Second Card</h4>
                                            <p class="card-text">Some example text.</p><br></br><br></br><br></br>
                                            <a href="#" class="btn btn-primary">See second card</a>
                                        </div>
                            </div>
                        </div>

                        <div class="col-3">
                                <div class="card" style={{width:"1200"}}>
                                    <img class="card-img-top" src="https://www.teahub.io/photos/full/40-402760_light-color-background-for-website.jpg" alt="Card image" />
                                        <div class="card-img-overlay">
                                            <h4 class="card-title">Third Card</h4>
                                            <p class="card-text">Some example text.</p><br></br><br></br><br></br>  
                                            <a href="#" class="btn btn-primary">See Third card</a>
                                        </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="container mt-3 p-3">
                 <div class="row">
                    <h2>image related data Table</h2>
                 
                   
                    <div class="table-responsive">
                        <table class="table table-bordered">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>image name</th>
                            <th>imageid</th>
                            <th>image right px</th>
                            <th>image left px</th>
                            <th>image top px</th>
                            <th>image bottom px</th>
                            <th>image click</th>
                            <th>image responsive</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>nature</td>
                            <td>101</td>
                            <td>100</td>
                            <td>200</td>
                            <td>350</td>
                            <td>125</td>
                            <td>photographer</td>
                            <td>yes</td>
                            <td>yes</td>
                            
                            
                            </tr>
                        </tbody>
                        </table>
                        </div>
                    </div>               
                </div>
           
            </div>
            </div>           
      )
      
    }
  }