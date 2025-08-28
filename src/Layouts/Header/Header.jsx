import { Button } from '@mui/material';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

import useStore from '/src/Stores/СartCount.js';

export default function Header() {
    const cartCount = useStore((state) => state.cartCount);

    const curentPizzaInCart = useStore((state) => state.currentPizzaInCart);

    return (
        <header className="flex items-center justify-between border-b-[#F6F6F6] border-b-[1px] pb-[40px]">
            <div className="flex items-center gap-[17px]">
                <img src="/img/logo.png" alt="Logo" width={40} />
                <div>
                    <h1 className="font-[900] text-2xl">REACT PIZZA</h1>
                    <p className="text-[16px] text-[#7B7B7B]">найсмачніша піца у всесвіті</p>
                </div>
            </div>
            <div>
                <Link to="/cart">
                    <Button
                        sx={{
                            backgroundColor: '#FE5F1E',
                            borderRadius: '50px',
                            width: '150px',
                            height: '50px',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '13px',
                            '&:hover': {
                                backgroundColor: '#F55A1B',
                            },
                        }}>
                        <div className="font-bold">
                            {curentPizzaInCart.map((pizza) => pizza.price).reduce((a, b) => a + b, 0)} ₴
                        </div>
                        <span className="w-[1px] h-[70%] bg-white opacity-25"></span>
                        <span className="flex items-center gap-[8px] font-bold">
                            <ShoppingCart width={20} fontWeight={700} />
                            {cartCount}
                        </span>
                    </Button>
                </Link>
            </div>
        </header>
    );
}
