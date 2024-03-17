import { useState } from "react";
import Button from '@mui/material/Button';
import EsgService from "../Services/EsgService";
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

function PDFUrl() {
    const [esg1, setEsg1] = useState({
        entityName: "",
        fileName:"",
    })

    const [pdfUrl, setPdfUrl] = useState("")
    const [loading, setLoading] =useState();

    const handleChange = (e) => {
      const value = e.target.value;
      setEsg1({...esg1, [e.target.name]:value});
      console.log(" esg1"+ esg1.entityName +"  "+ esg1.fileName +" esg1 " + esg1);
    };

    const getPdfUrl =async (e) => {
        e.preventDefault();
        setLoading(true)
       await EsgService.getPdfUrl(esg1).
        then((response) => 
        {
         console.log("response "+JSON.stringify(response.data));
         setPdfUrl(response.data.pdfUrlPath);
         console.log("use state esgdata1 "+ JSON.stringify(pdfUrl));
         window.open("data:application/pdf," + encodeURI(pdfUrl));
        }).
         catch((error) => {console.log("error "+ error)})
         setLoading(false)
     };

     const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
 

    return (
        <>
       
        <div style={{width: "400px", border:"2px solid black", height: "200px", backgroundColor: "white", textAlign: "left", margin: "15px -100px", paddingTop:"25px", paddingLeft:"80px", color:"black"}}>
        <label>Entity name : </label>
        {/* <input type="text" name="entityName" value={esg1.entityName} onChange={(e) => handleChange(e)}/> */}
        <TextField id="standard-basic" label="Entity name" variant="standard" required name="entityName" value={esg1.entityName} onChange={(e) => handleChange(e)} style={{marginTop: "-20px"}}/>
        <p />
        <label>Upload file : </label>
        <input type="file" name="fileName" value={esg1.fileName} onChange={(e) => handleChange(e)} required style={{padding: "4px 8px", backgroundColor: "#1976d2", borderRadius:"16px"}}/>
   
        <p />
        {/* <button onClick={"nm"} style={{padding: "4px 8px", backgroundColor: "#53c68c", borderRadius:"16px", borderStyle: "none"}}>Get PDF URL</button>
        */}
        <Button onClick={getPdfUrl} disabled={esg1.entityName==="" || esg1.fileName===""} variant="contained">Get PDF URL</Button>
        {loading===true && <h3 style={{textAlign:"center", marginTop:"10px", width:"330px", paddingLeft:"-100px"}}>Loading</h3>}
      </div>
        </>
       
    );
  }
  
  export default PDFUrl;