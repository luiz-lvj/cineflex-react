import styled from 'styled-components';


export default function SubTitleList(){
    return(
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
    );
}

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

export const SelectedSeat = styled.div`
    ${liSeat}
    background: #8DD7CF;
    border: 1px solid #1AAE9E;
`;

export const AvailableSeat = styled.div`
    ${liSeat}
    background: #C3CFD9;
    border: 1px solid #7B8B99;
`;

export const UnAvailableSeat = styled.div`
    ${liSeat}
    background: #FBE192;
    border: 1px solid #F7C52B;
`;
