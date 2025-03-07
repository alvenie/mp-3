import React, { useState } from 'react';
import useCalculator from '../hooks/useCalculator';
import styled from 'styled-components';

const MainHeading = styled.h2`
    padding: .5vw .5vw 0;
    font-size: calc(2px + 2vw);
    text-align: center;
    color: crimson;
`;

const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1vw;
    justify-content: center;
`;

const CalcInput = styled.div`
    font-size: calc(2px + 2vw);
    display: flex;
    flex-direction: column;
    background-color: cadetblue;
    border: 5px solid black;
`;

const StyledLabel = styled.label`
    display: inline-block;
    width: fit-content;
    text-align: center;
    font-family: "Comic Sans MS", cursive;
`;

const StyledInput = styled.input`
    display: block;
    font-size: calc(1px + 2vw);
    text-align: center;
    font-family: "Comic Sans MS", cursive;
`;

const CalcButtons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const StyledButtons = styled.button`
    font-size: calc(1px + 2vw);
    color: azure;
    background-color: cadetblue;
    border: 1px solid black;
    font-family: "Comic Sans MS", cursive;
`;

const StyledOutput = styled.h3`
    font-size: calc(2px + 2vw);
    text-align: center;
    background-color: white;
    border: 1px solid black;
    font-family: "Comic Sans MS", cursive;
`;
const Calculator = () => {
    const [firstNum, setFirstNum] = useState<string>('');
    const [secondNum, setSecondNum] = useState<string>('');
    const { result, calculate, clearOutput } = useCalculator();

    return (
        <div>
            <MainHeading>
                My Online Calculator
            </MainHeading>
            <MainContent>
                <CalcInput>
                    <StyledLabel>
                        First Number
                        <StyledInput
                            type="text"
                            value={firstNum}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstNum(e.target.value)}
                        />
                    </StyledLabel>
                    <StyledLabel>
                        Second Number
                        <StyledInput
                            type="text"
                            value={secondNum}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSecondNum(e.target.value)}
                        />
                    </StyledLabel>

                    <CalcButtons>
                        <StyledButtons onClick={() => calculate('add', firstNum, secondNum)}>+</StyledButtons>
                        <StyledButtons onClick={() => calculate('subtract', firstNum, secondNum)}>-</StyledButtons>
                        <StyledButtons onClick={() => calculate('multiply', firstNum, secondNum)}>*</StyledButtons>
                        <StyledButtons onClick={() => calculate('divide', firstNum, secondNum)}>/</StyledButtons>
                        <StyledButtons onClick={() => calculate('power', firstNum, secondNum)}>**</StyledButtons>
                        <StyledButtons onClick={clearOutput}>Clear</StyledButtons>
                    </CalcButtons>
                    <StyledOutput style={{ color: result.value !== null && result.value < 0 ? 'red' : 'black' }}>
                        {result.value !== null ? result.value : result.text}
                    </StyledOutput>
                </CalcInput>
            </MainContent>
        </div>
    );
};

export default Calculator;
