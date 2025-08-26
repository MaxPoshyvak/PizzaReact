import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import Card from '../../../src/UI/Card/Card';
import Sort from '../../../src/UI/Sort/Sort';

export default function Main() {
    const [sortType, setSortType] = useState('');
    const [pizzaClass, setPizzaClass] = useState('Всі');
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true); // ⬅️ стан завантаження

    const handleValueChange = (newValue) => {
        setSortType(newValue);
    };

    const allPizzaClases = ['Всі', "М'ясні", 'Гострі', 'Вегетаріанські', 'Гриль'];

    const filteredPizzas = pizzaClass === 'Всі' ? pizzas : pizzas.filter((pizza) => pizza.classes.includes(pizzaClass));

    const sortedPizzas = [...filteredPizzas].sort((a, b) => {
        switch (sortType) {
            case 'Ціною':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            case 'Алфавітом':
                return a.title.localeCompare(b.title, 'uk');
            case 'Популярністю':
                return b.popularity - a.popularity;
            default:
                return 0;
        }
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://687fcf91f1dcae717b604f49.mockapi.io/pizza/items');
                const data = await response.json();
                setPizzas(data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <main className="py-[40px]">
            <div className="flex justify-between items-center">
                <div className="flex gap-[9px] mb-[40px]">
                    {allPizzaClases.map((item) => (
                        <Button
                            key={item}
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
                <Sort onValueChange={handleValueChange} />
            </div>

            <div
                className={`flex ${
                    sortedPizzas.length < 4 ? 'justify-start' : 'justify-between'
                } flex-wrap mt-[40px] gap-y-[65px] gap-x-[45px] mx-auto`}>
                {loading
                    ? [...Array(8)].map((_, index) => <img key={index} src="/img/PizzaSkeleton.png" alt="" />)
                    : sortedPizzas.map((pizza) => (
                          <Card
                              key={pizza.id}
                              id={pizza.id}
                              imgPath={pizza.imgPath}
                              title={pizza.title}
                              price={pizza.price}
                              classes={pizza.classes}
                              sizes={pizza.sizes}
                              type={pizza.type}
                          />
                      ))}
            </div>
        </main>
    );
}
