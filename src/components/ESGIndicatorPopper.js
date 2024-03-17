import Button from '@mui/material/Button';
import ESGBenchmarkIndicator from "./ESGBenchmarkIndicator";
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
function ESGIndicatorPopper() {

 
 
     return (
        <PopupState variant="popper" popupId="demo-popup-popper">
        {(popupState) => (
          <div>
            <Button variant="contained" {...bindToggle(popupState)}>
            Get ESG Indicator Popper
            </Button>
            <Popper {...bindPopper(popupState)} transition style={{backgroundColor:""}}>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <ESGBenchmarkIndicator/>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </div>
        )}
      </PopupState>
     );
   }
   
   export default ESGIndicatorPopper;