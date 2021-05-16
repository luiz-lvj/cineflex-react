import styled from 'styled-components';
import { UnAvailableSeat, AvailableSeat, SelectedSeat } from './SeatsSelection';

export default function Seats(props){

    function selectSeat(seatId){
        let availableToSelect = [...props.selectedSeats];
        if(!availableToSelect.includes(seatId)){
            availableToSelect.push(seatId);
        }
        props.setSelectedSeats(availableToSelect);
    }

    function unSelectSeat(seatId){
        let availableToSelect = [...props.selectedSeats];
        if(availableToSelect.includes(seatId)){
            const idx = availableToSelect.indexOf(seatId);
            availableToSelect.splice(idx, 1);
        }
        props.setSelectedSeats(availableToSelect);
    }

    return(
        <SeatsStyle>
            {props.filmSeats.seats.map((seat)=>{
                if(!seat.isAvailable){
                    return(
                        <UnAvailableSeat>
                            <p>{parseInt(seat.name) > 9 ? seat.name : '0' + seat.name}</p>
                        </UnAvailableSeat>
                    );
                }
                if(props.selectedSeats.includes(seat.id)){
                    return(
                        <SelectedSeat onClick={()=>unSelectSeat(seat.id)}>
                            <p>{parseInt(seat.name) > 9 ? seat.name : '0' + seat.name}</p>
                        </SelectedSeat>
                    );
                    
                }
                return(
                    <AvailableSeat onClick={()=> selectSeat(seat.id)}>
                        <p>{parseInt(seat.name) > 9 ? seat.name : '0' + seat.name}</p>
                    </AvailableSeat>
                );
            })}
        </SeatsStyle>
    );
}

const SeatsStyle = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-top: 43px;
    width: 100%;
`;