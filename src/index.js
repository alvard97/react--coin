import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/header/header';
import List from './components/list/list';
import NotFound from './components/not-found/not-found';
import Details from './components/details/details';
import './index.css';



const App = () => {
  return (
    <BrowserRouter>
      
        <Header />
        <Switch>
          <Route path ='/' component={List} exact/>
          <Route path='/currency/:id' component={Details} />
          <Route component ={NotFound}/>
          

        </Switch>
    </BrowserRouter>
    
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
