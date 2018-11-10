import React, { Component } from 'react';
import { connect } from 'react-redux';
import Capture from './assests/Capture.JPG';
import { simpleAction } from './actions/simpleAction'
import Toolbar from './components/Toolbar/Toolbar.jsx';
import SideDrawer from './components/SideDrawer/SideDrawer.jsx'
import Backdrop from './components/Backdrop/Backdrop.jsx';



//import Video from './components/bgVideo.js'

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
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () =>{
    this.setState((prevState) =>{
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

backdropClickHandler=()=>{
  this.setState({sideDrawerOpen:false});
};


  render() {
    let backdrop;

    if (this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }


    return (
    <div className="App">
    <header className="heropanel">
    <video autoPlay muted loop id="myVideo">
      <source src="ThePiano.mp4" type="video/mp4"></source>
    </video>
      <div className="v-header container">
          <img src={Capture} className="App-logo" alt="logo" />
          <h1 className="App-title">Allen Arts Music</h1>
      </div>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}

    </header>
     <div className="mainShape">
   
     <h3 className="mainShapeTitle"> In the back is either going to be a. a series of videos or slide show</h3>

     </div>
   </div>
   
    
  );
 }
}


 

export default connect(mapStateToProps, mapDispatchToProps)(App); 