import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import { ThemeProvider } from '@material-ui/core'
import Login from './components/Login/Login';
import  Header  from './components/ui/Header';
import theme from './components/ui/Theme'
import Trending from './components/Trending/Trending';
import { Register } from './components/Auth/Register';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={()=> <Trending />} />
          <Switch>
            <Route exact path="/favorites" component={()=> <div>Favorites</div>} />
            <Route exact path="/profile" component={()=>(<Register />)} />
            <Route exact path="/trending" component={()=> <Trending />} />
            <Route exact path="/new" component={()=> <div>New movies here</div>} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
