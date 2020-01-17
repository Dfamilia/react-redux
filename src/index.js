import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import Results from './components/Results';
import Details from './components/Details';


const Root = (
    
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/results" component={Results} />
                <Route path="/details/:itemId" component={Details} />
                <Redirect from="/" to="/results"/>
            </Switch>
        </BrowserRouter>
    </Provider>
    
 
);

ReactDOM.render(Root, document.getElementById('root'));

