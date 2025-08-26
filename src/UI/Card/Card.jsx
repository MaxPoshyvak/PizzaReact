import React from 'react';
import Radio from '../Radio/Radio';
import { Button } from '@mui/material';

import { Plus } from 'lucide-react';

const Card = (props) => {
    return (
        <div className="card w-[280px] h-[459px] flex flex-col items-center">
            <img src={props.imgPath} alt="" />
            <h2 className="font-extrabold text-[20px] mt-[11px] mb-[22px]">{props.title}</h2>
            <Radio size={`size-${props.id}`} typeName={`type-${props.id}`} sizes={props.sizes} types={props.type} />
            <div className="flex items-center justify-between w-full mt-[17px]">
                <div className="font-extrabold text-[22px]">від {props.price} ₴</div>
                <Button
                    sx={{
                        backgroundColor: 'transparent',
                        borderRadius: '30px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        fontSize: '15px',
                        fontWeight: '1000',
                        textTransform: 'none',
                        width: '132px',
                        border: '1px solid #FE5F1E',
                        color: '#FE5F1E',
                        '&:hover': {
                            backgroundColor: '#FE5F1E',
                            color: 'white',
                        },
                    }}>
                    <Plus strokeWidth="3px" size={20} />
                    Добавити
                </Button>
            </div>
        </div>
    );
};

export default Card;
