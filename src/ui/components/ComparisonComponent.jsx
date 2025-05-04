import { useEffect, useState } from 'react';

export const ComparisonComponent = ({ anthropometryHistory, onSelectionChange }) => {
    const [firstSelectValue, setFirstSelectValue] = useState('');
    const [secondSelectValue, setSecondSelectValue] = useState('');

    const handleFirstSelectChange = (e) => {
        const selectedValue = e.target.value;
        setFirstSelectValue(selectedValue);
        onSelectionChange('first', anthropometryHistory[selectedValue]);
        if (selectedValue === secondSelectValue) {
            setSecondSelectValue('');
            onSelectionChange('second', null);
        }
    };

    const handleSecondSelectChange = (e) => {
        const selectedValue = e.target.value;
        setSecondSelectValue(selectedValue);
        onSelectionChange('second', anthropometryHistory[selectedValue]);
        if (selectedValue === firstSelectValue) {
            setFirstSelectValue('');
            onSelectionChange('first', null);
        }
    };

    useEffect(() => {
        const lastIndex = anthropometryHistory.length - 1;
        if (lastIndex >= 0) {
            setFirstSelectValue(lastIndex);
            onSelectionChange('first', anthropometryHistory[lastIndex]);
        }
    }, []);

    return (
        <div className='custom-flex-row custom-flex-align-center custom-h-100 custom-mt-1 custom-gap-2 custom-border-2 custom-border-color-gray custom-border-radius-20 custom-p-2'>
            <h4>Comparación de evaluaciones antropométricas:</h4>
            <select 
                className='input-select border-clr-secondary custom-px-05'
                value={firstSelectValue}
                onChange={handleFirstSelectChange}
            >
                <option value=''>
                    Evaluación A
                </option>
                {
                    anthropometryHistory.map((record, index) => (
                        <option 
                            key={index} 
                            value={index} 
                            disabled={index === parseInt(secondSelectValue)}
                        >
                            {record.Fecha}
                        </option>
                    ))
                }
            </select>

            <select 
                className='input-select border-clr-secondary custom-px-05'
                value={secondSelectValue}
                onChange={handleSecondSelectChange}
            >
                <option value=''>
                    Evaluación B
                </option>
                {
                    anthropometryHistory.map((record, index) => (
                        <option 
                            key={index} 
                            value={index} 
                            disabled={index === parseInt(firstSelectValue)}
                        >
                            {record.Fecha}
                        </option>
                    ))
                }
            </select>
        </div>
    );
}
