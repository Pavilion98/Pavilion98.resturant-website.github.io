import React from 'react';
import { StepsContainer, StepsWrapper, StepsH1, StepBox, StepImg, StepHeading } from './StepsElements';

const Steps = ({ data }) => {
    return (
        <StepsContainer>
            <StepsH1> How It <span>Works</span> </StepsH1>
            <StepsWrapper>
                {data.map((step, index) => {
                    return (
                        <StepBox key={index}>
                            <StepImg src={step.img} />
                            <StepHeading> {step.number}. {step.title} </StepHeading>
                        </StepBox>
                    )
                })}
            </StepsWrapper>
        </StepsContainer>
    )
}

export default Steps;
