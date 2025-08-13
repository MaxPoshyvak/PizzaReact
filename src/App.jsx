import { Container, Typography } from '@mui/material';
import Header from './Layouts/Header/Header';
import Main from './Layouts/Main/Main';

function App() {
    return (
        <>
            <Container
                maxWidth={false}
                disableGutters
                sx={{
                    pl: { xs: '20px', sm: '67px' },
                    pr: { xs: '20px', sm: '67px' },
                    pt: '50px',
                    pb: '96px',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    maxWidth: '1400px',
                }}>
                <div className="App rounded-[10px] w-full h-full bg-white">
                    <Header />
                    <Main />
                </div>
            </Container>
        </>
    );
}

export default App;
