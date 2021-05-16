import { useParams } from "react-router";
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Footer } from './SessionsListPage';
import SubTitleList from './SeatsSelection';
import Seats from './Seats';
import InputHandler from "./InputHandler";

export default function SeatsListPage(){
    const params = useParams();
    const [filmSeats, setFilmSeats] = useState([]);

    useEffect(()=>{
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${params.idSessao}/seats`;
        const requestPromise = axios.get(url);
        requestPromise.then((request)=>{
            setFilmSeats(request.data);
        });
    }, [params.idSessao]);

    const [selectedSeats, setSelectedSeats] = useState([]);

    if(!filmSeats.seats){
        return(
            <SeatsList>
                <h2>Carregando os assentos...</h2>
            </SeatsList>
        );
    }

    return(
        <SeatsList>
            <h2>Selecione o(s) assento(s)</h2>
            <Seats filmSeats={filmSeats} selectedSeats={selectedSeats} 
                    setSelectedSeats={setSelectedSeats}/>

            <SubTitleList/>

            <InputHandler seatsWithNames={filmSeats.seats} selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats} movie={filmSeats.movie.title}
                date={filmSeats.day.weekday} time={filmSeats.name}/>

            <Footer>
                <div>
                    <img src={filmSeats.movie.posterURL} alt=""></img>
                </div>
                <ul>
                    <h2>{filmSeats.movie.title}</h2>
                    <h2>{filmSeats.day.weekday} - {filmSeats.name}</h2>
                </ul>
            </Footer>
        </SeatsList>
    );
}

const SeatsList = styled.div`
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
    
`;