import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function MoviesListPage(props){
    if(!props.movies[0]){
        return(
            <MoviesList>
                <h2>Carregando Filmes...</h2>
            </MoviesList>
        );
    }
    
    return(
        <>
        <MoviesList>
            <h2>Selecione o Filme</h2>
            <ul>
                {props.movies.map((movie, idx)=>{
                    const url = "/sessoes/" + movie.id;
                    return(
                        <li key={idx}><Link to={url}><img src={movie.posterURL} alt=""></img></Link></li>
                    );
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