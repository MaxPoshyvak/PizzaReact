import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import Card from '../../../src/UI/Card/Card';

export default function Main() {
    const [pizzaClass, setPizzaClass] = useState('Всі');
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://687fcf91f1dcae717b604f49.mockapi.io/pizza/items');
                const data = await response.json();
                console.log(data);
                setPizzas(data);
            } catch (e) {
                console.error(e);
            }
        };

        fetchData();
    }, []);

    const allPizzaClases = ['Всі', "М'ясні", 'Гострі', 'Вегетаріанські', 'Гриль'];
    return (
        <main className="py-[40px]">
            <div className="flex  gap-[9px] mb-[40px]">
                {allPizzaClases.map((item) => (
                    <Button
                        onClick={() => setPizzaClass(item)}
                        sx={{
                            backgroundColor: '#282828',
                            borderRadius: '30px',
                            height: '45px',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            pl: '30px',
                            pr: '30px',
                            fontSize: '15px',
                            fontWeight: '600',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: '#555555',
                            },
                        }}>
                        {item}
                    </Button>
                ))}
            </div>

            <div className="flex justify-between flex-wrap mt-[40px] gap-y-[65px] mx-auto">
                {pizzas
                    .filter((pizza) => pizza.classes.includes(pizzaClass))
                    .map((pizza) => (
                        <Card
                            key={pizza.id}
                            id={pizza.id}
                            imgPath={pizza.imgPath}
                            title={pizza.title}
                            price={pizza.price}
                            classes={pizza.classes}
                        />
                    ))}
            </div>
        </main>
    );
}
