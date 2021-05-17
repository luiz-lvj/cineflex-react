import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import GlobalStyle from './components/resetCSS';
import MoviesListPage from './components/MoviesListPage';
import SessionsListPage from './components/SessionsListPage';
import SeatsListPage from './components/SeatsListPage';
import SuccessPage from './components/SuccessPage';

function App(){
    return(
        <>
            <React.Fragment>
                <GlobalStyle/>
            </React.Fragment>
            
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/" exact>
                        <MoviesListPage/>
                    </Route>
                    <Route path="/sessoes/:idFilme">
                        <SessionsListPage/>
                    </Route>
                    <Route path="/assentos/:idSessao">
                        <SeatsListPage/>
                    </Route>
                    <Route path="/sucesso">
                        <SuccessPage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector(".root"))