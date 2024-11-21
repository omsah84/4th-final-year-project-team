import { styled } from "@mui/material/styles";

function Hero() {
  return (
    <>
      <Container>
        <div
          className="left"
          style={{
            width: "100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
           
          }}
        >
          <h1 >
            Hey, I am <span style={{color:"red"}}>Shashi Singh</span><br/> I make software</h1>
        </div>
        <div
          className="right"
          style={{
            width: "100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
          }}
        >
          <StyledImage src="/assets/kumar.jpg" alt="Portrait of Shashi Singh" />
        </div>
      </Container>

    </>
  );
}

export default Hero;

const StyledImage = styled("img")({
  width: "250px",
  height: "250px",
  borderRadius: "50%",
  marginTop: "1rem",
});

const Container = styled('div')(({ theme }) => ({
  width:"100",
  display:"flex",
  textAlign:"center",
  justifyContent:"space-around",
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  },

}));
