import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MainListSessions from './MainListSessions';


export default function SessionsListPage(){
    const params = useParams();
    const [filmSessions, setFilmSessions] = useState([]);
    useEffect(()=>{
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${params.idFilme}/showtimes`;
        const resquestPromise = axios.get(url);
        resquestPromise.then((request)=>{
            setFilmSessions(request.data);
            
        });
    }, [params.idFilme]);
    if(!filmSessions.days){
        return(
            <SessionsList>
                <h2>Carregando Sessões...</h2>
            </SessionsList>
        );
    }
    return(
        <SessionsList>
            <h2>Selecione o horário</h2>

            <MainListSessions filmSessions={filmSessions}/>

            <Footer>
                <div>
                    <img src={filmSessions.posterURL}alt=""></img>
                </div>
                <h2>{filmSessions.title}</h2>
            </Footer>
        </SessionsList>
    );
}

const SessionsList = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 33px;
    padding-left: 33px;
    padding-top: 43px;
    margin-bottom: 20px;

    h2{
        font-size: 24px;
        color: #293845;
        text-align: center;
    }
`;


export const Footer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 117px;
    background: #DFE6ED;
    display: flex;
    align-items: center;
    padding-left: 10px;
    border-top: 1px solid #9EADBA;

    div{
        padding: 8px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        background: #FFFFFF;
        margin-right: 14px;
    }
    div img{
        height: 72px;
        width: 48px;
    }
`;