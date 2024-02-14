import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Sorteio from './pages/Sorteio/Sorteio';
import PaginaInicial from './pages/PaginaInicial/PaginaInicial';
import Cabecalho from './components/Cabecalho/Cabecalho';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Cabecalho />
        <Routes>
          <Route index element={<PaginaInicial />} />
          <Route path='/sorteio' element={<Sorteio />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter >
  );
}

export default App;
