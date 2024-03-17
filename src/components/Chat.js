import Button from '@mui/material/Button';
function Chat() {
    const handleClick =() =>{
        window.open("localhost:8000")
    }
    return (
      <div>
         <Button variant="contained"  onClick={handleClick}>Chat with PDF</Button>
      </div>
    );
  }
  
  export default Chat;