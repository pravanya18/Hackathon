// import './ESGBenchmarkDoc.css';

import { useState } from "react";
import EsgService from "../Services/EsgService";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useNavigate } from "react-router-dom";


  
  const rows = [
  {name:'Frozen yoghurt', calories:159, fat:6.0, carb:24, protein:4.0},
  {name:'Ice cream sandwich',calories: 237,fat: 9.0,carb: 37,protein: 4.3},
  {name:'Eclair',calories: 262,fat: 16.0,carb: 24,protein: 6.0,},
  {name:'Cupcake',calories: 305,fat: 3.7,carb: 67,protein: 4.3,},
  {name:'Gingerbread',calories: 356,fat: 16.0,carb: 49,protein: 3.9,}
  ];
  

function ESGBenchmarkDoc() {

    const [esg, setEsg] = useState({
        entityName: "",
        fileName:"",
    })

    const [esgData, setEsgData] = useState([])

    const handleChange = (e) => {
      const value = e.target.value;
      setEsg({...esg, [e.target.name]:value});
      console.log(" esg"+ esg.entityName +"  "+ esg.fileName +" esg " + esg);
    };

    const getEsgBenchmarkDoc = (e) => {
       e.preventDefault();
       EsgService.getEsgBenchmarkDoc(esg).
       then((response) => 
       {
        console.log("response "+JSON.stringify(response.data.esgResponse[0]));
        setEsgData([...esgData, response.data.esgResponse[0]]);
        console.log("use state esgdata "+ JSON.stringify(esgData));
       }).
        catch((error) => {console.log("error "+ error)})
    };

    const navigate = useNavigate();

    return (
        <>
      <div style={{width: "500px", height: "100px", backgroundColor: "", textAlign: "left", margin: "0px auto", paddingTop:"25px", paddingLeft:"225px", color:"black"}}>
        <label>Entity name : </label>
        <input type="text" name="entityName" value={esg.entityName} onChange={(e) => handleChange(e)}/>
        <p />
        <label>Upload file : </label>
        <input type="file" name="fileName" value={esg.fileName} onChange={(e) => handleChange(e)} style={{padding: "4px 8px", backgroundColor: "#53c68c", borderRadius:"16px"}}/>
        <p />
        <button onClick={getEsgBenchmarkDoc} style={{padding: "4px 8px", backgroundColor: "#53c68c", borderRadius:"16px", borderStyle: "none"}}>Get ESG Doc</button>
      </div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell align="center">MSCI Sustainalytics</TableCell>
            <TableCell align="center">Net zero target</TableCell>
            <TableCell align="center">Interim Emissions Reduction Target</TableCell>
            <TableCell align="center">Remewable Electricity Target</TableCell>
            <TableCell align="center">Circularity Stratagies and Target</TableCell>
            <TableCell align="center">Diversity Equity and Inclusion Target</TableCell>
            <TableCell align="center">Employee health and safety audits</TableCell>
            <TableCell align="center">Supply Chain Audits</TableCell>
            <TableCell align="center">SBTi</TableCell>
            <TableCell align="center">CDP</TableCell>
            <TableCell align="center">GRI</TableCell>
            <TableCell align="center">SASB</TableCell>
            <TableCell align="center">TCFD</TableCell>
            <TableCell align="center">Assurance</TableCell>
            <TableCell align="center">ESG benchmark document</TableCell>
            <TableCell align="center">get PDF URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {esgData.map((data) => (
            <TableRow
              key={data.entityName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.entityName}
              </TableCell>
              {data.benchmarkDetails.map((details) => (
                <TableCell align="right">
                  {/* {""+details.pageNumber + "\n" } */}
                  {details.primaryDetails =="true"?<CheckIcon color="success"/>: <FiberManualRecordIcon  style={{fontSize: "10px", color:"red"}}/>}
                  <p/>
                  {"\n"+details.secondaryDetails}
                 
                </TableCell>
              ))}
              <TableCell> 
                <button onClick={getEsgBenchmarkDoc} style={{padding: "4px 8px", backgroundColor: "#53c68c", borderRadius:"16px", borderStyle: "none"}}>Get ESG benchmark document</button>
              </TableCell>
              <TableCell> 
                <button onClick={()=> navigate("/pdf")} style={{padding: "4px 8px", backgroundColor: "#53c68c", borderRadius:"16px", borderStyle: "none"}}>Get PDF URL</button>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </>
    );
  }
  
  export default ESGBenchmarkDoc;