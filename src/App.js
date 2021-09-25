import React from 'react';
import Countries from './components/Countries';
import Filter from './components/Filter';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Country from './components/Country';

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/">
        <Filter/>
        <Countries/>
      </Route>
      <Route path="/countries/:name" children={<Country/>}></Route>
    </Router>
  );
}

export default App;
