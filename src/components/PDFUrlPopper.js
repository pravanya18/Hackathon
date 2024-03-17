import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import PDFUrl from './PDFUrl';
function PDFUrlPopper() {

 
 
     return (
      <PopupState variant="popper" popupId="demo-popup-popper" >
      {(popupState) => (
        <div>
          <Button variant="contained" {...bindToggle(popupState)} style={{marginTop:"50px"}}>
          Get PDF Report
          </Button>
          <Popper {...bindPopper(popupState)} transition >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <PDFUrl/>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
     );
   }
   
   export default PDFUrlPopper;