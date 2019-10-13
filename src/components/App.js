import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import '../index.scss';
import $ from "jquery";
import 'bootstrap';
// import Nav from './commonTools/Nav';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
class App extends Component {
  componentDidMount() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}>
            </Route>
            <Route path="/about" component={About}>
            </Route>
            <Route path="/contact" component={Contact}>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }