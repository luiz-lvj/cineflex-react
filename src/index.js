import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header';
import GlobalStyle from './components/resetCSS';
import MoviesListPage from './components/MoviesListPage';
import SessionsListPage from './components/SessionsListPage';

function App(){
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies';
        const requestPromise = axios.get(url);
        requestPromise.then((request)=>{
            setMovies(request.data);
        })
    }, []);

    return(
        <>
            <React.Fragment>
                <GlobalStyle/>
            </React.Fragment>
            
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <MoviesListPage movies={movies}/>
                    </Route>
                    <Route path="/sessoes/:idFilme">
                        <SessionsListPage/>
                    </Route>
                    <Route path="/assentos/:idSessao">
                        
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector(".root"))