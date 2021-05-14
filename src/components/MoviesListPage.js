import styled from 'styled-components';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function MoviesListPage(){
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies';
        const requestPromise = axios.get(url);
        requestPromise.then((request)=>{
            setMovies(request.data);
            console.log(request.data);
        })
    }, []);

    return(
        <>
        <MoviesList>
            <h2>Selecione o Filme</h2>
            <ul>
                {movies.map((movie, idx)=>{
                    return <Link to="/add">
                        <li key={idx}><img src={movie.posterURL} alt=""></img></li>
                    </Link>
                })}
            </ul>
        </MoviesList>
        </>
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