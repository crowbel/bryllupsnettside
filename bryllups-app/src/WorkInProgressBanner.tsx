import styled from 'styled-components';
import logo from './assets/logo.png';

import flower1 from './assets/Rectangle 27.png';
import flower2 from './assets/Rectangle 9.png';

const WorkInProgressDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column; 
    align-items: center;
    margin-top: 3rem;
    gap: 50px;
`;

const Logo = styled.img`
    object-fit: cover;
    position: relative;
    width: 60%;
    max-width: 500px;
`;

const Flowers = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const FlowerImg = styled.img`
    width: 100%;
    heigh: 100%;
    max-width: 500px;
`;


const Info = styled.span`
    font-size: 1.5rem;
    color: white;
    text-transform: uppercase;
`;

const WorkInProgressBanner = () => {
    return (
        <WorkInProgressDiv>
            <Logo src={logo}/>
            <Info>Her vil det komme informasjon etter 1.desember.</Info>
            <Flowers>
                <FlowerImg alt="" src={flower1}/>
                <FlowerImg alt="" src={flower2}/>
            </Flowers>
        </WorkInProgressDiv>
    );
};

export default WorkInProgressBanner;
