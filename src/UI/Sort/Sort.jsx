import React, { useState, useEffect } from 'react';

export default function Sort({ onValueChange }) {
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState('Популярністю');

    const options = ['Популярністю', 'Ціною', 'Алфавітом'];

    useEffect(() => {
        onValueChange(sort);
    }, [sort, onValueChange]);

    return (
        <div className="flex items-center text-[15px] mb-[40px]">
            <p className="font-bold text-[#2C2C2C]">
                Сортування за:{' '}
                <span
                    className="cursor-pointer text-[#FE5F1E] underline-offset-5"
                    style={{ textDecoration: 'underline dotted' }}
                    onClick={() => setOpen((prev) => !prev)}>
                    {sort}
                </span>
            </p>
            {open && (
                <div className="relative">
                    <div
                        className="flex flex-col justify-center absolute bg-white rounded-[10px] py-[10px] overflow-hidden bottom-[-150px] right-0 font-semibold"
                        style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
                        {options.map((option) => (
                            <p
                                key={option}
                                onClick={() => {
                                    setSort(option);
                                    setOpen(false);
                                }}
                                className={`cursor-pointer ${
                                    sort === option ? 'text-[#FE5F1E]' : ''
                                } hover:bg-[#FE5F1E0D] py-[7px] px-[14px]`}>
                                {option}
                            </p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
