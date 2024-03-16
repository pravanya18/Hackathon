import { useState } from "react";

function PDFUrl() {
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

    return (
        <>
        <h1>Hiiii PDFUrl</h1>
        <div style={{width: "500px", height: "100px", backgroundColor: "", textAlign: "left", margin: "0px auto", paddingTop:"25px", paddingLeft:"225px", color:"black"}}>
        <label>Entity name : </label>
        <input type="text" name="entityName" value={esg.entityName} onChange={(e) => handleChange(e)}/>
        <p />
        <label>Upload file : </label>
        <input type="file" name="fileName" value={esg.fileName} onChange={(e) => handleChange(e)} style={{padding: "4px 8px", backgroundColor: "#53c68c", borderRadius:"16px"}}/>
        <p />
        {/* <button onClick={"nm"} style={{padding: "4px 8px", backgroundColor: "#53c68c", borderRadius:"16px", borderStyle: "none"}}>Get ESG Doc</button> */}
      </div>
        </>
       
    );
  }
  
  export default PDFUrl;