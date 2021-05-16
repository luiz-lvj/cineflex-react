import { useParams } from "react-router";
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Footer } from './SessionsListPage';
import SubTitleList from './SeatsSelection';
import Seats from './Seats';

export default function SeatsListPage(){
    const params = useParams();
    const [filmSeats, setFilmSeats] = useState([]);
    const [nameUser, setNameUser] = useState("");
    const [CPFuser, setCPFUser] = useState("");

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
            <Seats filmSeats={filmSeats} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/>
            

            <SubTitleList/>

            <InputsUser>
                <p>Nome do comprador:</p>
                <input placeholder="Digite seu nome..."></input>
                <p>CPF do comprador:</p>
                <input placeholder="Digite seu CPF..."></input>
            </InputsUser>

            <ButtonSubmit>Reservar assento(s)</ButtonSubmit>
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

const InputsUser = styled.div`
    margin-top: 42px;
    width: 100%;
    margin-bottom: 42px;
    p{
        color: #293845;
        font-size: 18px;
    }
    input{
        width: 100%;
        height: 57px;
        margin-bottom: 15px;
        margin-top: 2px;
        font-size: 18px;
        color: #AFAFAF;
    }
    input::placeholder{
        font-size: 18px;
        font-style: italic;
        color: #AFAFAF;
    }
`;

const ButtonSubmit = styled.button`
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    border: none;
    margin-bottom: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
`;