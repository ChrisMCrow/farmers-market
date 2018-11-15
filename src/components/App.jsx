import React from 'react';
import Schedule from './Schedule';
import Produce from './Produce';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

function App(){
  return(
    <div className='container'>
      <style jsx> {`
        @import url('https://fonts.googleapis.com/css?family=Allerta+Stencil');

        body {
          background-image: url('https://fee.org/media/25783/farmersmarket.jpg?anchor=center&mode=crop&width=1920&rnd=131577516230000000');
          background-attachment: fixed;
          padding-bottom: 100px;
        }
        h1 {
          font-family: 'Allerta Stencil', sans-serif;
          font-size: 100px;
          text-align: center;
          border: 10px solid #007bff;
          border-radius: 5px;
          color: #007bff;
          background-color: rgb(255, 204, 153, .5);
          text-shadow: 0 0 3px black;
          padding: 50px;
          margin: 20px;
          box-shadow: 0 0 5px black;
        }
        .marketFont {
          font-family: 'Allerta Stencil', sans-serif;
          font-size: 200%;
          color: #007bff;
        }
        .content {
          margin-top: 200px;
        }
      `} </style>
      <h1>Avery's Organics</h1>
      <Navbar/>
      <div className="content">
        <Switch>
          <Route path='/schedule' component={Schedule} />
          <Route path='/produce' component={Produce} />
          <Route exact path='/'component={Home}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;