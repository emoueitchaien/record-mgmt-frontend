import React from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

//Importing Components
import NavBar from "./components/Navbar";
import Welcome from './components/Welcome';
import SellPrice from './components/SellPrice';
import CostPrice from './components/CostPrice';
import Search from './components/Search';
import Calculate from './components/Calculate';

const style = makeStyles(theme =>({
  root:{
    display:'flex',
  },
  display:{
    marginTop:  theme.spacing(8)
  }
}));

function App() {
  const classes = style();
  return (
    <Router>
      <NavBar />
      <br />
      <div className={classes.display}>
      <Route path='/' exact component={Welcome} />
      <Route path='/sp' component={SellPrice} />
      <Route path='/cp' component={CostPrice} />
      <Route path='/search' component={Search} />
      <Route path='/calculate' component={Calculate} />
      </div>
    </Router>
  );
}

export default App;
