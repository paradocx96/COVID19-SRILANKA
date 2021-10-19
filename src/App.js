import React from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Component
import Home from "./pages/Home";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>

                    <Redirect to="/"/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
