import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function MoviesListPage(){
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies';
        const requestPromise = axios.get(url);
        requestPromise.then((request)=>{
            setMovies(request.data);
        })
    }, []);


    if(!movies[0]){
        return(
            <MoviesList>
                <h2>Carregando Filmes...</h2>
            </MoviesList>
        );
    }
    
    return(
        <MoviesList>
            <h2>Selecione o Filme</h2>
            <ul>
                {movies.map((movie, idx)=>{
                    const url = "/sessoes/" + movie.id;
                    return(
                        <SingleMovie idx={idx} url={url} posterURL={movie.posterURL}/>
                    );
                })}
            </ul>
        </MoviesList>
    );
}

function SingleMovie(props){
    return(
        <li key={props.idx}>
            <Link to={props.url}><img src={props.posterURL} alt=""></img></Link>
        </li>
    );
}

const MoviesList = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-right: 33px;
    padding-left: 33px;
    padding-top: 43px;

    h2{
        font-size: 24px;
        color: #293845;
    }
    ul{
        margin-top: 43px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        @media (max-width: 354px){
            justify-content: center;
        }
    }
    ul li{
        padding: 7px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        margin-bottom: 18px;
    }
    ul li img{
        width: 129px;
        height: 193px;
    }
`;