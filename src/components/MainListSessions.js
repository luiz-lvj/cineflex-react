import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function MainListSessions(props){
    return(
        <MainList>
            {props.filmSessions.days.map((day)=>{
                return <SingleSession
                id={day.id}
                weekday={day.weekday}
                date={day.date}
                showtimes={day.showtimes}
                />
            })}
        </MainList>
    );
}

function SingleSession(props){
    return(
    <li key={props.id}>
        <h3>{props.weekday} - {props.date}</h3>
        <ul>
            {props.showtimes.map((time)=>{
                const url = "/assentos/" + time.id;
                return(
                    <Link to={url} key={time.id}>
                        <li><p>{time.name}</p></li>
                    </Link>
                );
            })}
        </ul>
    </li>
    );
}

const MainList = styled.ul`
    margin-top: 20px;
    overflow-y: scroll;
    margin-bottom: 120px;
    li{
        margin-top: 23px;
    }
    li h3{
        font-size: 20px;
        color: #293845;
    }
    li ul{
        display: flex;
        flex-wrap: wrap;
    }
    li ul li{
        margin-top: 0;
        width: 83px;
        height: 43px;
        background: #E8833A;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
        margin-top: 8px;
    }
    li ul li p{
        color: #FFFFFF;
        font-size: 18px;
    }
`;