import styled from "styled-components";
import whiteImg from '../../images/home-bg.jpg'



export const StepsContainer = styled.div`
  padding: 1rem calc((100vw - 1300px) / 2);
  background: url(${whiteImg});
`;


export const StepsH1 = styled.h1`
    text-align: center;
    font-size: clamp(2.2rem, 2.5vw, 3rem);
    padding: 1rem;
    color: #333;

    span {
      color: #e31837;
    }
`;

export const StepsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0.5rem;
`;

export const StepBox = styled.div`
    flex: 1 1 16rem;
    padding:15px;
    text-align: center;
`;

export const StepImg = styled.img`
    border-radius: 50%;
    border:5px solid #fdc500;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
`;

export const StepHeading = styled.h3`
    color:#666;
    padding:10px;
    font-size: clamp(1.1rem, 2.5vw, 1.3rem);
    text-transform: uppercase;
`;