import React from 'react';
import { ShoppingCart, Trash2, X, Minus, Plus, ChevronLeft } from 'lucide-react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useStore from '/src/Stores/СartCount.js';

export default function Cart() {
    const currentPizzaInCart = useStore((state) => state.currentPizzaInCart);
    const changeAmount = useStore((state) => state.changeAmount);
    const removeAll = useStore((state) => state.removeAll);

    return (
        <div className="py-[95px] px-[250px]">
            <div className="flex items-center justify-between pb-[30px]">
                <div className="flex items-center gap-[15px]">
                    <ShoppingCart size={32} color="#3F3F3F" />
                    <p className="font-extrabold text-[32px]">Корзина</p>
                </div>
                <div
                    className="flex items-center gap-[7px] cursor-pointer"
                    onClick={() =>
                        window.confirm('Ви дійсно хочете очистити корзину?') &&
                        useStore.setState({ currentPizzaInCart: [] })
                    }>
                    <Trash2 size={16} color="#B6B6B6" />
                    <p className="text-[#B6B6B6] text-[16px]">Очистити корзину</p>
                </div>
            </div>

            {currentPizzaInCart.map((pizza) => (
                <div
                    className="border-t-[#F6F6F6] border-t-[1px] flex items-center justify-between pt-[30px]"
                    key={`${pizza.title}-${pizza.size}-${pizza.type}`}>
                    <div className="flex items-center gap-[15px]">
                        <img src={pizza.imgPath} alt="Pizza" width={80} />
                        <div>
                            <h2 className="font-extrabold text-[22px] w-[300px]">{pizza.title}</h2>
                            <p className="text-[18px] text-[#8D8D8D]">
                                {pizza.type}, {pizza.size} см
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-[12px]">
                        <Btn onClick={() => changeAmount(pizza, pizza.amount - 1)} color="#FE5F1E">
                            <Minus size={20} strokeWidth={3} />
                        </Btn>
                        <p className="font-extrabold text-[22px]">{pizza.amount}</p>
                        <Btn onClick={() => changeAmount(pizza, pizza.amount + 1)} color="#FE5F1E">
                            <Plus size={20} strokeWidth={3} />
                        </Btn>
                    </div>

                    <h2 className="font-extrabold text-[22px]">{pizza.basePrice * pizza.amount} ₴</h2>

                    <Btn color="#D7D7D7" onClick={() => removeAll(pizza)}>
                        <X size={20} strokeWidth={3} />
                    </Btn>
                </div>
            ))}

            <div>
                <div className="flex items-center justify-between py-[40px]">
                    <div className="flex items-center gap-[10px]">
                        <h2 className=" text-[22px]">Всього піц:</h2>
                        <h2 className="font-extrabold text-[22px]">
                            {currentPizzaInCart.reduce((sum, pizza) => sum + pizza.amount, 0)} шт.
                        </h2>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <h2 className=" text-[22px]">Сума замовлення:</h2>
                        <h2 className="font-extrabold text-[22px] text-[#FE5F1E]">
                            {currentPizzaInCart.reduce((acc, pizza) => acc + pizza.basePrice * pizza.amount, 0)} ₴
                        </h2>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <Link to="/">
                        <ActionBtn variant="outline">
                            <ChevronLeft /> Повернутись назад
                        </ActionBtn>
                    </Link>
                    <ActionBtn variant="filled">Оплатити зараз</ActionBtn>
                </div>
            </div>
        </div>
    );
}

function Btn({ children, color, onClick }) {
    return (
        <Button
            onClick={onClick}
            sx={{
                border: `2px solid ${color}`,
                backgroundColor: 'white',
                borderRadius: '50%',
                minWidth: 0,
                width: 32,
                height: 32,
                color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': { backgroundColor: color, color: 'white' },
            }}>
            {children}
        </Button>
    );
}

function ActionBtn({ children, variant, onClick }) {
    const isFilled = variant === 'filled';
    return (
        <Button
            onClick={onClick}
            sx={{
                border: isFilled ? 'none' : '2px solid #D3D3D3',
                backgroundColor: isFilled ? '#FE5F1E' : 'transparent',
                borderRadius: '50px',
                width: 211,
                height: 55,
                color: isFilled ? 'white' : '#D3D3D3',
                textTransform: 'none',
                fontWeight: isFilled ? 700 : 500,
                gap: '13px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                    backgroundColor: isFilled ? '#F55A1B' : '#D3D3D3',
                    color: 'white',
                },
            }}>
            {children}
        </Button>
    );
}
