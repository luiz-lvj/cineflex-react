import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonSubmit } from './InputHandler';

export default function SuccessPage(){
    let history = useHistory();
    const dataFromSeats = history.location.state;

    function FilmSession(props){
        return(
            <ul>
                <TitleP>Filme e sessão</TitleP>
                <p>{props.movie}</p>
                <p>{props.date} - {props.time}</p>
            </ul>
        );
    }

    function SeatLine(props){
        return(
            <li>
                <p>Assento {props.number}</p>
            </li>
        );
    }

    function BuyerLine(props){
        return(
            <li>
                <p>Nome: {props.name}</p>
                <p>CPF: {props.cpf}</p>
            </li>
        );

    }

    return(
        <SuccessStyle>
            <h2>Pedido feito com sucesso!</h2>
            <FilmSession movie={dataFromSeats.movie} date={dataFromSeats.date} time={dataFromSeats.time}/>
            <ul>
                <TitleP>Ingressos</TitleP>
                {dataFromSeats.seatsNames.map((idx)=>{
                    return(
                        <SeatLine key={idx} number={idx}/>
                    );
                })}
            </ul>
            <ul>
                <TitleP>Compradores</TitleP>
                {dataFromSeats.seatsBuyers.map((obj)=>{
                    return(
                        <BuyerLine key={obj.idAssento} name={obj.nome} cpf={obj.cpf}/>
                    );
                })}
            </ul>
            <ButtonSubmit onClick={()=>{
                history.push("/");
            }}>Voltar para Home</ButtonSubmit>
        </SuccessStyle>
    );
}

const SuccessStyle = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 33px;
    padding-left: 33px;
    padding-top: 30px;
    h2{
        font-size: 24px;
        font-weight: bold;
        color: #247A6B;
        display: block;
        text-align: center;
        line-height: 28px;
        margin-bottom: 50px;
    }
    ul{
        margin-bottom: 50px;
        width: 100%;
    }
    ul p{
        color: #293845;
        font-size: 18px;
        line-height: 22px;
    }
`;

const TitleP = styled.p`
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
`;