import React from "react";
import {
  DishesContainer,
  DishesHeading,
  DishesWrapper,
  Box,
  BoxImg,
  BoxContent,
  BoxIcon,
  BoxH,
  BoxP,
} from "./dishes.styles";

const Dishes = ({data}) => {
  return (
    <DishesContainer>
      <DishesHeading> Our Speciality </DishesHeading>
      <DishesWrapper>
        {data.map((dish, index) => {
            return (
                <Box key={index}>
                    <BoxImg src={dish.img} alt={dish.alt} />
                    <BoxContent>
                        <BoxIcon src={dish.icon} />
                        <BoxH> {dish.name} </BoxH>
                        <BoxP> {dish.desc} </BoxP>
                    </BoxContent>
                </Box>
            )
        })}
      </DishesWrapper>
    </DishesContainer>
  );
};

export default Dishes;
