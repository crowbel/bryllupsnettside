import styled from 'styled-components';
import logo from './assets/logo.png';

import flower1 from './assets/peoni.png';
import flower2 from './assets/peoni2.png';

const WorkInProgressDiv = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    margin-top: 5rem;
    gap: 100px;
`;

const Logo = styled.img`
    object-fit: cover;
    width: 80%;
    max-width: 500px;
`;

const Info = styled.span`
    text-align: center;
    color: white;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 400;
`;

const Flowers = styled.div`
    display: flex;
    justify-content: space-between;
    bottom: 0;
    width: 100%;
    position: absolute;
`;

const FlowerImgLeft = styled.img`
    position: relative;    
    bottom: -50px;
    left: -60px;    
    transform: rotate(55deg);
    width: 100px;
    max-width: 200px;
    `;

const FlowerImgRight = styled.img`
    position: relative;
    bottom: -50px;
    right: -60px;
    transform: rotate(15deg);
    width: 100px;
    max-width: 200px;
    `;

const WorkInProgressBanner = () => {
    return (
        <>
        <WorkInProgressDiv>
            <Logo src={logo}/>
            <Info>HER VIL DET KOMME INFORMASJON ETTER 1.DESEMBER.</Info>
        </WorkInProgressDiv>
        <Flowers>
            <FlowerImgLeft alt="" src={flower2}/>
            <FlowerImgRight alt="" src={flower1}/>
        </Flowers>
        </>
    );
};

export default WorkInProgressBanner;
