import styled from 'styled-components';
import { ArrowUndoSharp } from 'react-ionicons';
import { useHistory, useLocation } from 'react-router-dom';

export default function Header(){
    const history= useHistory();
    const location = useLocation();
    console.log(location);
    return(
        <HeaderPage>
            {location.pathname !== "/" ? 
                <ArrowUndoSharp
                color={'#808F9D'}
                height="45px"
                width="45px"
                onClick={()=>{
                    history.goBack();
                }}/>
            :
            <div></div>
        }
            <h1>CINEFLEX</h1>
            <div></div>
        </HeaderPage>
    );
}

const HeaderPage = styled.div`
    background: #C3CFD9;
    height: 67px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    h1{
        color: #E8833A;
        font-size: 34px;
    }
`;