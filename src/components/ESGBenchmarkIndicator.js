import { useState } from "react";
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import EsgService from "../Services/EsgService";


function ESGBenchmarkIndicator() {

   const [esgIndicator, setEsgIndicator] = useState({
      entityName: "",
      fileName:"",
      esgType: "",
      esgIndicator:""
  })

  const [esgIndicatorData, setEsgIndicatorData] = useState()

  const [loading, setLoading] =useState();

  const esgIndicatorValues = {
   ESGScore:     ["MSCI Sustainalytics"],
   Environment:   ["Net Zero Target", "Interim Emissions Reduction Target", "Renewable Electricity Target", "Circularity Stratergy"],
   Social:      [ "DE&I Target"],
   Goverance:   new Array("Health And Safety Target", "Supply Audit Target"),
   Reporting:   ["SBTi", "CDP", "GRI", "SASB", "TCFD", "Assurance"]
}

  const handleChange = (e) => {
    const value = e.target.value;
    setEsgIndicator({...esgIndicator, [e.target.name]:value});
    console.log("esgIndicator.esgType "+ esgIndicator.esgType +""+ typeof esgIndicator.esgType + " ind " + esgIndicatorValues[esgIndicator.esgType]);
    console.log("split ", esgIndicatorValues["Goverance"].length, " ", JSON.stringify(esgIndicatorValues["Goverance"][1]))
    console.log(" esgIndicator "+ esgIndicator.entityName +"  "+ esgIndicator.fileName +" esgIndicator " + esgIndicator.esgType);
  };

  const getEsgBenchmarkIndicator = async (e) => {
     e.preventDefault();
     setLoading(true);
     await EsgService.getEsgBenchmarkIndicator(esgIndicator).
     then((response) => 
     {
      console.log("response "+JSON.stringify(response.data.esgResponse[0]));
      setEsgIndicatorData(()=>response.data.esgResponse[0]);
      console.log("use state esgdata Indicator"+ JSON.stringify(esgIndicatorData));
     }).
      catch((error) => {console.log("error "+ error)})
      setLoading(false);
  };

    return (
      <div style={{width: "500px", height: "370px", border:"2px solid black", backgroundColor: "", textAlign: "left", margin: "20px 130px", paddingTop:"25px", paddingLeft:"225px", color:"black"}}>
      <label>Entity name : </label>
      <input type="text" name="entityName" value={esgIndicator.entityName} onChange={(e) => handleChange(e)}/>
      <p />
      <label>Upload file : </label>
      <input type="file" name="fileName" value={esgIndicator.fileName} onChange={(e) => handleChange(e)} style={{padding: "4px 8px", backgroundColor: "#1976d2", borderRadius:"16px"}}/>
      <p />
      
  <InputLabel id="demo-simple-select-label">Esg Type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={esgIndicator.esgType}
    label="Esg Type"
    onChange={handleChange}
    style={{width: "200px"}}
    name="esgType"
  >
    <MenuItem value={"ESGScore"}>ESG Score</MenuItem>
    <MenuItem value={"Environment"}>Environment</MenuItem>
    <MenuItem value={"Social"}>Social</MenuItem>
    <MenuItem value={"Goverance"}>Goverance</MenuItem>
    <MenuItem value={"Reporting"}>Reporting</MenuItem>
  </Select>
  <p/>
  <InputLabel id="demo-simple-select-helper-label">Esg Indicator</InputLabel>
  <Select
    labelId="demo-simple-select-helper-label"
    id="demo-simple-select-helper"
    value={esgIndicator.esgIndicator}
    label="Esg Indicator"
    onChange={handleChange}
    style={{width: "200px"}}
    name="esgIndicator"
    disabled={esgIndicator.esgType==""}
  >
   {
        Array.from(Array(esgIndicator.esgType===""?0:esgIndicatorValues[esgIndicator.esgType].length).keys()).map((e)=><MenuItem value={e}>{esgIndicatorValues[esgIndicator.esgType][e]}</MenuItem>)
   }
  </Select>
  <p/>
 
  <Button onClick={getEsgBenchmarkIndicator} disabled={esgIndicator.entityName==="" || esgIndicator.fileName==="" || esgIndicator.esgType==="" || esgIndicator.esgIndicator===""} variant="contained">Get ESG Indicator</Button>
  {loading===true && <h3 style={{textAlign:"center", marginTop:"10px", width:"330px", paddingLeft:"-100px"}}>Loading</h3>}
  
  {loading===false && <h3 style={{textAlign:"center", marginTop:"10px", width:"330px", paddingLeft:"-100px"}}>{esgIndicatorData.benchmarkDetails["primaryDetails"]}</h3>}
  
    </div>
    );
    
  }
  
  export default ESGBenchmarkIndicator;