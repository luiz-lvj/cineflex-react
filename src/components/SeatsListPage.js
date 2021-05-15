import { useParams } from "react-router";
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function SeatsListPage(){
    const params = useParams();
    const [filmSeats, setFilmSeats] = useState([]);

    useEffect(()=>{
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${params.idSessao}/seats`;
        const requestPromise = axios.get(url);
        requestPromise.then((request)=>{
            setFilmSeats(request.data);
        })
    }, [params.idSessao])

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
            <Seats>
                {filmSeats.seats.map((seat)=>{
                    return(
                        <li><p>{parseInt(seat.name) > 9 ? seat.name : '0' + seat.name}</p></li>
                    );
                })}
            </Seats>
            <SubTitle>
                <li>
                    <SelectedSeat/>
                    <p>Selecionado</p>
                </li>
                <li>
                    <AvailableSeat/>
                    <p>Disponível</p>
                </li>
                <li>
                    <UnAvailableSeat/>
                    <p>Indisponível</p>
                </li>
            </SubTitle>
            <InputsUser>
                <p>Nome do comprador:</p>
                <input placeholder="Digite seu nome..."></input>
                <p>CPF do comprador:</p>
                <input placeholder="Digite seu CPF..."></input>
            </InputsUser>
            <ButtonSubmit>Reservar assento(s)</ButtonSubmit>
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

const Seats = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-top: 43px;
    width: 100%;

    li{
        height: 26px;
        width: 26px;
        background: #C3CFD9;
        border: 1px solid #808F9D;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 7px;
        margin-bottom: 7px;
    }
    li p{
        font-size: 11px;
    }
`;

const SubTitle = styled.ul`
    display: flex;
    margin-top: 16px;
    width: 87%;
    justify-content: space-between;
    li{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    li p{
        font-size: 13px;
        color: #4E5A65;
    }
`;

const liSeat = `
    height: 26px;
    width: 26px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 7px;
    margin-bottom: 7px;

    p{
        font-size: 11px;
    }
`;

const SelectedSeat = styled.div`
    ${liSeat}
    background: #8DD7CF;
    border: 1px solid #1AAE9E;
`;

const AvailableSeat = styled.div`
    ${liSeat}
    background: #8DD7CF;
    border: 1px solid #1AAE9E;
`;

const UnAvailableSeat = styled.div`
    ${liSeat}
    background: #FBE192;
    border: 1px solid #F7C52B;
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
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
`;