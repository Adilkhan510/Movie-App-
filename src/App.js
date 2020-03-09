import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import { ThemeProvider } from '@material-ui/core'
import Login from './components/Login/Login';
import  Header  from './components/ui/Header';
import theme from './components/ui/Theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={()=> <div>ROUTE</div>} />
          </Switch>
        </BrowserRouter>

      </ThemeProvider>
    </div>
  );
}

export default App;
