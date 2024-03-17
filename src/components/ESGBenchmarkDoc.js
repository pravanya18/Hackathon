// import './ESGBenchmarkDoc.css';

import { useState } from "react";
import EsgService from "../Services/EsgService";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';



  

function ESGBenchmarkDoc({esgData, setEsgData, loading, setLoading}) {

    const [esg, setEsg] = useState({
        entityName: "",
        fileName:"",
    })

    // const [loading, setLoading] =useState();

    // const [esgData, setEsgData] = useState([])

    const handleChange = (e) => {
      const value = e.target.value;
      setEsg({...esg, [e.target.name]:value});
      console.log(" esg"+ esg.entityName +"  "+ esg.fileName +" esg " + esg);
    };

    const  getEsgBenchmarkDoc = async (e) => {
       e.preventDefault();
       setLoading(true);
       await EsgService.getEsgBenchmarkDoc(esg).
       then((response) => 
       {
        console.log("response "+JSON.stringify(response.data.esgResponse[0]));
        setEsgData([...esgData, response.data.esgResponse[0]]);
        console.log("use state esgdata "+ JSON.stringify(esgData));
       }).
        catch((error) => {console.log("error "+ error)})
      setLoading(false);
    };

    const navigate = useNavigate();

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      // [`&.${tableCellClasses.head}`]: {
      //   backgroundColor: theme.palette.common.black,
      //   color: theme.palette.common.white,
      // },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));

    return (
        <>
      <div style={{width: "500px", height: "100px", backgroundColor: "", textAlign: "left", margin: "0px auto", paddingTop:"25px", paddingLeft:"225px", color:"black"}}>
        <label>Entity name : </label>
        <input type="text" name="entityName" value={esg.entityName} onChange={(e) => handleChange(e)}/>
        <p />
        <label>Upload file : </label>
        <input type="file" name="fileName" value={esg.fileName} onChange={(e) => handleChange(e)} style={{padding: "4px 8px", backgroundColor: "#1976d2", borderRadius:"16px"}}/>
        {/* <FilePicker/> */}
        <p />
        {/* <button onClick={getEsgBenchmarkDoc} style={{padding: "4px 8px", backgroundColor: "#53c68c", borderRadius:"16px", borderStyle: "none"}}>Get ESG Doc</button> */}
        <Button onClick={getEsgBenchmarkDoc} disabled={esg.entityName==="" || esg.fileName===""} variant="contained">Get ESG Doc</Button>
        {/* <Button onClick={()=> navigate("/indicator")} variant="contained">Get ESG Indicator</Button> */}
  
        {/* <Button onClick={()=> navigate("/pdf")} variant="contained">Get PDF URL</Button> */}
      
      </div>
      
      
      </> 
    );
  }
  
  export default ESGBenchmarkDoc;