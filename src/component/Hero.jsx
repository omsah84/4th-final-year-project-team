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
            Hey, I am <span style={{color:"red"}}>Vikash Kumar Upadhyay</span><br/> I make software</h1>
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
          <StyledImage src="/assets/vikash.jpg" alt="Portrait of Vikash" />
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
  boxShadow: "0px 0px 10px red",
  cursor: "pointer", 

  '&:hover': { 
    transform: 'scale(1.1)', 
    boxShadow: '2px 4px 10px red',
},
  
   
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
