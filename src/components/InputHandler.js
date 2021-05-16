import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function InputHandler(props){
    const [buyers, setBuyers] = useState({});
    useEffect(()=>{
        const requestToSend = {
            ids: [...props.selectedSeats],
            compradores: props.selectedSeats.map((id)=>{
                return {
                    idAssento: id,
                    nome: "",
                    cpf: ""
                }
            })
        }
        setBuyers(requestToSend);
    }, [props.selectedSeats]);

    function setBuyerName(event, idx){
        let buyersObj = {...buyers};
        for(let i = 0; i< buyersObj.compradores.length; i++){
            if(buyersObj.compradores[i].idAssento === idx){
                buyersObj.compradores[i].nome = event.target.value;
                break;
            }
        }
        setBuyers(buyersObj);
    }
    function getBuyerName(idx){
        if(buyers.compradores){
            if(buyers.compradores.filter(item => item.idAssento === idx)[0]){
                return buyers.compradores.filter(item => item.idAssento === idx)[0].nome
            }
        }
    }

    function setBuyerCpf(event, idx){
        let buyersObj = {...buyers};
        for(let i = 0; i< buyersObj.compradores.length; i++){
            if(buyersObj.compradores[i].idAssento === idx){
                buyersObj.compradores[i].cpf = event.target.value.trim();
                break;
            }
        }
        setBuyers(buyersObj);
    }
    function getBuyerCpf(idx){
        if(buyers.compradores){
            if(buyers.compradores.filter(item => item.idAssento === idx)[0]){
                return buyers.compradores.filter(item => item.idAssento === idx)[0].cpf
            }
        }
    }

    function sendData(){
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many";
        const requestPromise = axios.post(url, {...buyers});
        requestPromise.then((request)=>{
            props.setSelectedSeats([]);
        })
    }

    function getSeatName(id){
        for(let i = 0; i< props.seatsWithNames.length; i++){
            if(props.seatsWithNames[i].id === id){
                return props.seatsWithNames[i].name;
            }
        }
        return 'Nome não encontrado';
    }

    function InputsFromUser(props){
        return(
            <InputsUser key={props.id.toString()}>
                <p>Nome do comprador (Assento {getSeatName(props.id)}):</p>
                <input autoFocus={false} key={"input1" + props.id} onChange={e =>{setBuyerName(e, props.id)}} placeholder="Digite seu nome..." value={getBuyerName(props.id)}/>
                <p>CPF do comprador:</p>
                <input key={"input2" + props.id} onChange={e =>{setBuyerCpf(e, props.id)}} placeholder="Digite seu CPF..." value={getBuyerCpf(props.id)}/>
            </InputsUser>
        );
    }
    
    return(
        <>
        {props.selectedSeats.map((id)=>{
            console.log(buyers);
            return(
                <InputsFromUser key={id.toString()} id={id}/>
            );
        })}
        {props.selectedSeats.length > 0 ?
            <ButtonSubmit onClick={sendData}>Reservar assento(s)</ButtonSubmit>
        : <></>}
        </>
    );
}

const InputsUser = styled.div`
    margin-top: 20px;
    width: 100%;
    margin-bottom: 20px;
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