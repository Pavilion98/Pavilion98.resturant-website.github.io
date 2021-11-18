import React from 'react';
import {
    PopularContainer,
    PopularWrapper,
    PopularHeading,
    PopularTitle,
    PopularCard,
    PopularImg,
    PopularInfo,
    PopularDesc,
    PopularPrice,
    PopularBtn
  } from './PopularElements';

const Popular = ({ data}) => {
    return (
        <PopularContainer>
            <PopularHeading>Most <span>Popular</span> Food</PopularHeading>   
            <PopularWrapper>
                {data.map((popular, index) => {
                    return (
                        <PopularCard key={index}>
                            <PopularImg src={popular.img} />
                            <PopularInfo>
                                <PopularTitle>{popular.name}</PopularTitle>
                                <PopularDesc>{popular.desc}</PopularDesc>
                                <PopularPrice>{popular.price}</PopularPrice>
                                <PopularBtn>{popular.button}</PopularBtn>
                            </PopularInfo>
                        </PopularCard>
                    )
                })}
            
            </PopularWrapper>
        </PopularContainer>
    )
}

export default Popular;
