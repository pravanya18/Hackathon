import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function DisplayTable({loading, esgData}) {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
        //   backgroundColor: theme.palette.common.black,
        //   color: theme.palette.common.white,
        },
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
      <div>
         <div>
         {loading===false &&(<TableContainer component={Paper} style={{margin:"60px 0px"}}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" style={{width:"200px"}}>
        <TableHead>
        <StyledTableRow style={{backgroundColor:"#333333", color:"white"}}>
            <StyledTableCell align="center" colSpan={2}>ESG Score</StyledTableCell>
            <StyledTableCell align="center" colSpan={4}>Environmental</StyledTableCell>
            <StyledTableCell align="center" colSpan={1}>Social</StyledTableCell>
            <StyledTableCell align="center" colSpan={2}>Governance</StyledTableCell>
            <StyledTableCell align="center" colSpan={6}>Reporting</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow style={{backgroundColor:"#808080", color:"white"}}>
            <StyledTableCell>Company</StyledTableCell>
            <StyledTableCell align="center">MSCI Sustainalytics</StyledTableCell>
            <StyledTableCell align="center">Net zero target</StyledTableCell>
            <StyledTableCell align="center">Interim Emissions Reduction Target</StyledTableCell>
            <StyledTableCell align="center">Remewable Electricity Target</StyledTableCell>
            <StyledTableCell align="center">Circularity Stratagies and Target</StyledTableCell>
            <StyledTableCell align="center">Diversity Equity and Inclusion Target</StyledTableCell>
            <StyledTableCell align="center">Employee health and safety audits</StyledTableCell>
            <StyledTableCell align="center">Supply Chain Audits</StyledTableCell>
            <StyledTableCell align="center">SBTi</StyledTableCell>
            <StyledTableCell align="center">CDP</StyledTableCell>
            <StyledTableCell align="center">GRI</StyledTableCell>
            <StyledTableCell align="center">SASB</StyledTableCell>
            <StyledTableCell align="center">TCFD</StyledTableCell>
            <StyledTableCell align="center">Assurance</StyledTableCell>
            {/* <TableCell align="center">ESG benchmark document</TableCell>
            <TableCell align="center">get PDF URL</TableCell> */}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {esgData.map((data) => (
            <StyledTableRow
              key={data.entityName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {data.entityName}
              </StyledTableCell>
              {data.benchmarkDetails.map((details) => (
                <StyledTableCell align="right">
                  {/* {""+details.pageNumber + "\n" } */}
                  {details.primaryDetails =="true"?<CheckIcon color="success"/>: <FiberManualRecordIcon  style={{fontSize: "10px", color:"red"}}/>}
                  <p/>
                  {"\n"+details.secondaryDetails}
                 
                </StyledTableCell>
              ))}
              {/* <TableCell> 
                <button onClick={()=> navigate("/indicator")} style={{padding: "4px 8px", backgroundColor: "#53c68c", borderRadius:"16px", borderStyle: "none"}}>Get ESG benchmark document</button>
              </TableCell>
              <TableCell> 
                <button onClick={()=> navigate("/pdf")} style={{padding: "4px 8px", backgroundColor: "#53c68c", borderRadius:"16px", borderStyle: "none"}}>Get PDF URL</button>
              </TableCell> */}
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>)}
    {loading===true && <h3 style={{textAlign:"center", marginTop:"50px"}}>Loading</h3>}
          </div>
      </div>
    );
  }
  
  export default DisplayTable;