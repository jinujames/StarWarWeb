import React, { Component } from "react";
import { render } from "react-dom";
import './index.css';


export default class StarWar extends React.Component {

    constructor() {
      super();
      this.state = {
        moviename:null,
        charactername:null,
        specieslist: [],
        pilotlist:[],
       
        
      };
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
      Promise.all([
        fetch("/getmoviename/"),
        fetch("/getcharactername/"),
        fetch("/getspecieslist/"),
        fetch("/getpilotlist/"),
       
     ])
     .then(([res1, res2,res3,res4]) => Promise.all([res1.json(), res2.json(),res3.json(),res4.json()]))
   
     .then(([data1, data2,data3,data4]) => this.setState({
       moviename:data1,
       charactername:data2,
       specieslist:data3,
       pilotlist:data4,
        
        
     }));
    }

    
  render() {
    const data = this.state;
    if (data == null) return null;
    var elements=[];
    var planetname="";
    var pilotname="";
    var str="";
    var cnt=0;
    var lst=this.state.pilotlist ;
    for(var i=0;i<lst.length;i++){
    
    
      if(planetname!=lst[i].planetname )
      {


       planetname=lst[i].planetname;
       pilotname=lst[i].pilotname;
       this.state.pilotlist.forEach(function(obj) {
       
        if(obj.planetname==planetname){
          cnt++;
          str+=obj.pilotname+" - "+obj.speciesname+" ,";
        }
     


  });
elements.push(<li className="lststyle" value={ planetname } >Planet:{planetname} - Pilots:({cnt})  {str}</li>);
      cnt=0;
      str="";
      }
  }
    return (
      <div >
    
        
       
<img src={require('./logo.png')} className="imgstyle" />
<div id="wrapper" className="StarWar">

<button className='button' type="button" onClick={this.handleClick}> Do.Or do Not.There is No Try .

</button>
</div>

<div className="StarWardiv">
        { this.state && this.state.moviename &&
        <div className="quesclr" >Which of the starwar movie has the longest opening crawl?
        <h2 className="answerstyle">{this.state.moviename}</h2>


        </div>
        }
     { this.state && this.state.moviename &&
        <div className="quesclr">What character (person) appeared in most of the Star Wars films?
        <h2 className="answerstyle">{this.state.charactername}</h2>


        </div>
        }
    { this.state && this.state.specieslist.length &&
        <div className="quesclr" >What species appeared in the most number of Star Wars films?
        
        <div>
        {this.state.specieslist.map(species => (
          <article>
            <h2 className="answerstyle">{species.name}({species.count})</h2>
          </article>
        ))}
          </div>


        </div>
        }
          { this.state && this.state.pilotlist.length &&
        <div className="quesclr" >What planet in Star Wars universe provided largest number of vehicle pilots?

        
        <div>
          <h2>
          <ul className="ulstyle">
         {elements}
         </ul>
         </h2>
          </div>


        </div>
        }
      </div>
      </div>
    );
  }


}

render(<StarWar />, document.getElementById("root"));
