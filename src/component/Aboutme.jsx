import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';

function Aboutme() {
    

    return (
      <>
        <Header>About Me</Header>
        <Button variant="contained">
          Download Resume
        </Button>
      </>
    );
}

export default Aboutme;

const Header = styled("h1")({
  justifyContent: "center",
  display: "flex",
  padding: "10px",
  color:"white",
  backgroundColor:"black"
});
