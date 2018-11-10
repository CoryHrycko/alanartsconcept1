import React, { Component } from 'react';
import { connect } from 'react-redux';
import Capture from './assests/Capture.JPG';
import { simpleAction } from './actions/simpleAction'
import Toolbar from './components/Toolbar/Toolbar.jsx';
import SideDrawer from './components/SideDrawer/SideDrawer.jsx'
import Backdrop from './components/Backdrop/Backdrop.jsx';

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
      <div className="v-header container">
        <div className="appLogoContainer">
          <img src={Capture} className="App-logo" alt="logo" />
          </div>
          <h1 className="App-title">Allen Arts Music</h1>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
      </div>
    </header>
    <div className="mainBg">
     <div className="mainShape">
      <div>
     <h3 className="mainShapeTitle"> In the back is either going to be a. a series of videos or slide show carosal</h3>
    

     </div>
     <div>
     <h3 className="mainShapeTitle">> some sort of Events</h3>
   </div>
   <div>
     <h3 className="mainShapeTitle">> a claender of events</h3>
   </div>
   <div>
     <h3 className="mainShapeTitle">> Contact Form</h3>
   </div>
   </div>
   </div>
   <footer>some text displayinh date</footer>>
   </div>
    
  );
 }
};


 

export default connect(mapStateToProps, mapDispatchToProps)(App); 