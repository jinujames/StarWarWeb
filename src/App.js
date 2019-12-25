import React, { Component } from 'react';

class App extends  React.Component {
  state = {
   loading:true
  }
  componentDidMount() {
    fetch('http://localhost:57491/api/getmoviename')
    .then(res => res.json())
    .then((data) => {
     
    })
    .catch(console.log)
  }
  render() {

    return (
       <div className="container">
        <div className="col-xs-12">
        <h1>My Todos</h1>
     
        </div>
       </div>
    );
  }
}

export default App;