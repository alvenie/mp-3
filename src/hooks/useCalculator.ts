import { useState } from 'react';

type Operation = 'add' | 'subtract' | 'multiply' | 'divide' | 'power';

interface CalculatorResult {
    value: number | null;
    text: string;
}

const useCalculator = () => {
    const [result, setResult] = useState<CalculatorResult>({ value: null, text: 'Result' });

    const calculate = (operation: Operation, firstNum: string, secondNum: string) => {
        const num1 = Number(firstNum);
        const num2 = Number(secondNum);
        let calculatedResult: number;

        switch (operation) {
            case 'add':
                calculatedResult = num1 + num2;
                break;
            case 'subtract':
                calculatedResult = num1 - num2;
                break;
            case 'multiply':
                calculatedResult = num1 * num2;
                break;
            case 'divide':
                calculatedResult = num1 / num2;
                break;
            case 'power':
                calculatedResult = 1
                if (num2 > 0){

                    for (let i = 1; i <= num2; i++) {
                        calculatedResult = num1 * calculatedResult;
                    }

                } else {

                    for (let i = -1; i >= num2; i--) {
                        calculatedResult = calculatedResult / num1;
                    }

                }
                break;
            default:
                setResult({ value: null, text: 'Invalid operation' });
                return;
        }

        setResult({ value: calculatedResult, text: '' });
    };

    const clearOutput = () => {
        setResult({ value: null, text: 'Result' });
    };

    return { result, calculate, clearOutput };
};

export default useCalculator;
