import styled from 'styled-components';
import whiteImg from '../../images/home-bg.jpg'

export const PopularContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 2.5rem calc((100vw - 1300px) / 2);
  background: url(${whiteImg});
  color: #fff;
`;

export const PopularHeading = styled.h1`
  font-size: clamp(2.2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 2.5rem;
  color: #333;

  span {
    color: #e31837;
  }
`;

export const PopularWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const PopularCard = styled.div`
  margin: 0 2rem;
  line-height: 1.5;
  width: 300px;
`;

export const PopularImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;




export const PopularInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: .5rem;
  text-align: center;
`;

export const PopularTitle = styled.h2`
  font-weight: 400;
  font-size: 2rem;
  color: #000;
`;

export const PopularDesc = styled.p`
  margin-bottom: 1rem;
  color: #666;
  font-size: 1.1rem;
`;

export const PopularPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #333;
`;

export const PopularBtn = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;