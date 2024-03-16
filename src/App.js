
import './App.css';
import Header from './components/Header';
import ESGBenchmarkDoc from './components/ESGBenchmarkDoc';
import ESGBenchMarkDocument from './components/ESGBenchMarkDocument';
import PDFUrl from './components/PDFUrl';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route index element={ <ESGBenchmarkDoc/>}></Route>
      <Route path="/doc" element={ <ESGBenchMarkDocument/>}></Route>
      <Route path="/pdf" element={  <PDFUrl/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
