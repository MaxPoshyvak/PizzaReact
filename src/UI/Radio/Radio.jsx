import React from 'react';
import styled from 'styled-components';

const Radio = ({ size, type }) => {
    return (
        <StyledWrapper>
            <div className="radio-inputs">
                <div>
                    <label className="radio">
                        <input type="radio" name={type} defaultChecked />
                        <span className="name">Тонка</span>
                    </label>
                    <label className="radio">
                        <input type="radio" name={type} />
                        <span className="name">Традиційна</span>
                    </label>
                </div>
                <div>
                    <label className="radio">
                        <input type="radio" name={size} defaultChecked />
                        <span className="name">26 см</span>
                    </label>
                    <label className="radio">
                        <input type="radio" name={size} />
                        <span className="name">30 см</span>
                    </label>
                    <label className="radio">
                        <input type="radio" name={size} />
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
        color: rgba(51, 65, 85, 1);
        transition: all 0.15s ease-in-out;
    }

    .radio-inputs div .radio input:checked + .name {
        background-color: #fff;
        font-weight: 700;
    }
`;

export default Radio;
