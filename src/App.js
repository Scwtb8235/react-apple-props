
import React, { Component } from 'react'
import "./App.css";
import "./commonResource/css/bootstrap.css"
import "./commonResource/css/styles.css"
import Footer from './Components/Footer/Footer';
// import Section123 from './Components/Main/Section123';
// import Section45 from './Components/Main/Section45';
// import Youtube from './Components/Main/Youtube';
import MyRouter1 from './MyRouter';
import Header from './Components/Nav/Header';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* < Section123 />
        <Section45 />
        <Youtube /> */}
        <MyRouter1 />
        <Footer />
      </div>
    )
  }
}
export default App

