import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Radio = ({ size, typeName, sizes, types, onChange }) => {
    const firstAvailableSize = sizes[0];
    const firstAvailableType = types[0];

    const [selectedSize, setSelectedSize] = useState(firstAvailableSize);
    const [selectedType, setSelectedType] = useState(firstAvailableType);

    const handleSizeChange = (size) => {
        setSelectedSize(size);
        onChange?.({ size, type: selectedType });
    };

    const handleTypeChange = (type) => {
        setSelectedType(type);
        onChange?.({ size: selectedSize, type });
    };

    useEffect(() => {
        onChange?.({ size: firstAvailableSize, type: firstAvailableType });
    }, []);

    return (
        <StyledWrapper>
            <div className="radio-inputs">
                <div>
                    <label className="radio">
                        <input
                            type="radio"
                            name={typeName}
                            disabled={!types.includes('тонка')}
                            defaultChecked={firstAvailableType == 'тонка'}
                            onChange={() => handleTypeChange('тонка')}
                        />
                        <span className="name">Тонка</span>
                    </label>
                    <label className="radio">
                        <input
                            type="radio"
                            name={typeName}
                            disabled={!types.includes('традиційна')}
                            defaultChecked={firstAvailableType == 'традиційна'}
                            onChange={() => handleTypeChange('традиційна')}
                        />
                        <span className="name">Традиційна</span>
                    </label>
                </div>
                <div>
                    <label className="radio">
                        <input
                            type="radio"
                            name={size}
                            disabled={sizes.includes(26) ? false : true}
                            defaultChecked={firstAvailableSize === 26}
                            onChange={() => handleSizeChange(26)}
                        />
                        <span className="name">26 см</span>
                    </label>
                    <label className="radio">
                        <input
                            type="radio"
                            name={size}
                            disabled={sizes.includes(30) ? false : true}
                            defaultChecked={firstAvailableSize === 30}
                            onChange={() => handleSizeChange(30)}
                        />
                        <span className="name">30 см</span>
                    </label>
                    <label className="radio">
                        <input
                            type="radio"
                            name={size}
                            disabled={sizes.includes(40) ? false : true}
                            defaultChecked={firstAvailableSize === 40}
                            onChange={() => handleSizeChange(40)}
                        />
                        <span className="name">40 см</span>
                    </label>
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .radio-inputs {
        width: 280px;
        box-sizing: border-box;
        background-color: #f3f3f3;
        border-radius: 0.5rem;
        box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
    }
    .radio-inputs div {
        padding: 0.25rem;

        position: relative;
        display: flex;
        flex-wrap: wrap;
        font-size: 14px;
        font-weight: 700;
        color: #2c2c2c;
    }

    .radio-inputs div .radio {
        flex: 1 1 auto;
        text-align: center;
    }

    .radio-inputs .radio input {
        display: none;
    }

    .radio-inputs div .radio .name {
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem;
        border: none;
        padding: 0.5rem 0;
        color: rgba(51, 65, 85, 1); /* текст для звичайного стану */
        // background-color: #f3f3f3; /* фон для неактивної опції */
        transition: all 0.15s ease-in-out;
    }

    .radio-inputs div .radio input:checked + .name {
        background-color: #fff; /* активна опція */
        font-weight: 700;
        color: #2c2c2c;
    }

    .radio-inputs div .radio input:disabled + .name {
        // background-color: #ededed; /* недоступна опція */
        color: #b5b5b5;
        cursor: not-allowed;
    }
`;

export default Radio;
