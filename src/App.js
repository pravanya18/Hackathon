
import './App.css';
import Header from './components/Header';
import ESGBenchmarkDoc from './components/ESGBenchmarkDoc';
import ESGBenchmarkIndicator from './components/ESGBenchmarkIndicator';
import ESGIndicatorPopper from './components/ESGIndicatorPopper';
import PDFUrlPopper from './components/PDFUrlPopper';
import Chat from './components/Chat';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DisplayTable from './components/DisplayTable';
import { useState } from "react";



function App() {

  const [loading, setLoading] =useState();

  const [esgData, setEsgData] = useState([])


  return (
   
    <>
    <BrowserRouter>
    <Header/>
    <div class="container">
   <div class="column"><ESGBenchmarkDoc loading={loading} setLoading={setLoading} esgData={esgData}  setEsgData={setEsgData}/></div>
   <div class="column" style={{marginTop:"50px"}}><ESGIndicatorPopper/><PDFUrlPopper/></div>
   <div class="column" style={{marginTop:"50px"}}><Chat/></div>
   </div>
   <DisplayTable loading={loading} esgData={esgData}/>
    {/* <Routes>
      <Route index element={ <ESGBenchmarkDoc/>}></Route>
      <Route path="/indicator" element={ <ESGBenchmarkIndicator/>}></Route>
      <Route path="/pdf" element={  <PDFUrl/>}></Route>
    </Routes> */}
    </BrowserRouter>
    </>
  );
}

export default App;
