import "./App.css";
import React, { Component } from "react";
import NavBar from "./component/NavBar";
import News from "./component/News";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 12;
  render() {
    return (
      <div>
<Router>
<NavBar />
<Routes>
 <Route exact path="/" element={<News key="general"  pageSize ={this.pageSize} country="in" category="general" apiKey="process.env.REACT_APP_NEWS-API"/>}></Route>
 <Route exact path="/business" element={<News key="business"  pageSize ={this.pageSize} country="in" category="business" apiKey="process.env.REACT_APP_NEWS-API"/>}></Route>
 <Route exact path="/entertainment" element={<News key="entertainment"  pageSize ={this.pageSize} country="in" category="entertainment" apiKey="process.env.REACT_APP_NEWS-API"/>}></Route>
 <Route exact path="/general" element={<News key="general"  pageSize ={this.pageSize} country="in" category="general" apiKey="process.env.REACT_APP_NEWS-API"/>}></Route>
 <Route exact path="/health" element={<News key="health"  pageSize ={this.pageSize} country="in" category="health" apiKey="process.env.REACT_APP_NEWS-API"/>}></Route>
 <Route exact path="/science" element={<News key="science"  pageSize ={this.pageSize} country="in" category="science" apiKey="process.env.REACT_APP_NEWS-API"/>}></Route>
 <Route exact path="/sports" element={<News key="sports"  pageSize ={this.pageSize} country="in" category="sports" apiKey="process.env.REACT_APP_NEWS-API"/>}></Route>
 <Route exact path="/technology" element={<News key="technology"  pageSize ={this.pageSize} country="in" category="technology" apiKey="process.env.REACT_APP_NEWS-API"/>}></Route>
 </Routes>
</Router>
        {/* <Router>
         
            <ul>
              <li><Link to="/">NavBar</Link> </li>
              <li><Link to="/News">About Us</Link> </li>
            </ul>
            <Routes>
              <Route path="/" element={<NavBar />}></Route>
              <Route path="/News" element={<News
                                 pageSize ={this.pageSize}
                                country="in"
                                category="science"
                                apiKey="process.env.REACT_APP_NEWS-API"
                             />}></Route>
            </Routes>
        
        </Router> */}
      </div>
    );
  }
}
