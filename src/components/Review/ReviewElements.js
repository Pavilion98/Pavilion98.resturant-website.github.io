import styled from "styled-components";



export const ReviewContainer = styled.div`
    padding: 0.5rem calc((100vw - 1300px) / 2);
    background: #150f0f;
`;

export const ReviewHeading = styled.h1`
    text-align: center;
    font-size: clamp(2.2rem, 2.5vw, 3rem);
    padding: 1.5rem;
    color: #fff;

    span {
      color: #e31837;
    }
`;


export const BoxContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:1.5rem;
    padding: 2rem 3rem;  
`;


export const Box = styled.div`
    text-align: center;
    padding: 1rem;
    border: .5rem solid #fff;
    border-radius: .5rem;
    flex:1 1 17rem;
    background:#333;
    margin-top: 6rem;
`;

export const BoxImg = styled.img`
    height: 12rem;
    width:12rem;
    border-radius: 50%;
    border:.4rem solid #fff;
    margin-top: -8rem;
    object-fit: cover;
`;


export const BoxH3 = styled.h3`
    font-size: 2rem;
    color:#fff;
    padding:.5rem 0;
`; 

export const Stars = styled.div`
    i {
        font-size: 2rem;
        color:yellow;
        padding:.5rem 0;
    }
`;


export const BoxP = styled.p`
    font-size: 1rem;
    color:#eee;
    padding:1rem 0;
`;
