import styled from 'styled-components';

export default function Header(){
    return(
        <HeaderPage>
            <h1>CINEFLEX</h1>
        </HeaderPage>
    );
}

const HeaderPage = styled.div`
    background: #C3CFD9;
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        color: #E8833A;
        font-size: 34px;
    }
`;