import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }  
    };
  }

  daysToLaunch(){
    //I set the launch date to 7-30-2021 at 8:30pm and one second
    //the only reason I hard-coded this is that this is a set in stone launch date.
    const year = new Date().getFullYear();
    const timeLeft = +new Date(`${year}-7-30`) - +new Date();

    this.setState({
      time: {
        days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeLeft / 1000 / 60) % 60),
        seconds: Math.floor((timeLeft / 1000) % 60)
      }
    });
  }
  componentDidMount(){
    this.interval = setInterval(() => this.daysToLaunch(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return (
      <div className="App">
        <section className="header">
          <h1>WE'RE LAUNCHING SOON!</h1>  
        </section>      
        <section className="time-left">  
          <div><p className="time-count">{this.state.time.days}</p> <p>DAYS</p></div>
          <div><p className="time-count">{this.state.time.hours} </p><p>HOURS</p></div> 
          <div><p className="time-count">{this.state.time.minutes} </p><p>MINUTES</p></div> 
          <div><p className="time-count">{this.state.time.seconds}</p> <p>SECONDS</p></div>                                    
        </section>
        <section className="social-media">
          <div className="icons">
            <span className="icon facebook"></span>
            <span className="icon pinterest"></span>
            <span className="icon instagram"></span>
          </div>
        </section>
      </div>
    );
  }

}

export default App;
