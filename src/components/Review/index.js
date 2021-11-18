import React from "react";
import {
  ReviewContainer,
  ReviewHeading,
  BoxContainer,
  Box,
  BoxImg,
  BoxH3,
  Stars,
  BoxP,
} from "./review.styles";

const Review = ({ data }) => {
  return (
    <ReviewContainer>
      <ReviewHeading>
        Our Customers <span>Reviews</span>
      </ReviewHeading>
      <BoxContainer>
        {data.map((review, index) => {
            return (
                <Box key={index}>
                    <BoxImg src={review.img} />
                    <BoxH3> {review.name} </BoxH3>
                    <Stars>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </Stars>
                    <BoxP> {review.desc} </BoxP>
                </Box>
            )
        })}
      </BoxContainer>
    </ReviewContainer>
  );
};

export default Review;
