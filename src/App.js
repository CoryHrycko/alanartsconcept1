import React, { Component } from 'react';
import { connect } from 'react-redux';
import Capture from './assests/Capture.PNG';
import { simpleAction } from './actions/simpleAction'


const mapStateToProps = state => ({
  ...state
 });

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 });
/*
simpleAction = (event) => {
  this.props.simpleAction();
};*/
 
class App extends Component {
 render() {
  return (
   <div className="App">
    <header className="App-header">
     <img src={Capture} className="App-logo" alt="logo" />
     <h1 className="App-title">Allen Arts Music</h1>
    </header>
    <pre>
 {
  JSON.stringify(this.props)
 }
</pre>


    <button onClick={this.simpleAction}>Test redux action</button>    <p className="App-intro">
     To get started, edit <code>src/App.js</code> and save to reload
    </p>
   </div>
  );
 }
}


 

export default connect(mapStateToProps, mapDispatchToProps)(App);