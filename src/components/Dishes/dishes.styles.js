import styled from "styled-components";



export const DishesContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const DishesHeading = styled.h1`
    text-align: center;
    font-size: clamp(2rem, 2.5vw, 3rem);
    padding: 1rem;
    color: #fff;
    margin-bottom: 5rem;

    span {
      color: #e31837;
    }
`;


export const DishesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 2.5rem;
  gap: 1rem;
`;


export const BoxImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: -100%;
  left: 0;
`;

export const BoxContent = styled.div`
  text-align: center;
  background: #fff;
  padding: 2rem;
`;


export const Box = styled.div`
  flex: 1 1 20rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
  border: 1px solid rgba(0,0,0,.3);
  cursor: pointer;
  border-radius: .5rem;

  &:hover ${BoxImg} {
      top: 0;
  }

  &:hover ${BoxContent} {
      transform: translateY(100%);
  }

`;



export const BoxIcon = styled.img`
  margin: 1.5rem 0;
`;


export const BoxH = styled.h3`
  font-size: 2rem;
  color: #333;
`;

export const BoxP = styled.p`
  font-size: 1.3rem;
  color: #666;
  padding: 1rem 0;
`;