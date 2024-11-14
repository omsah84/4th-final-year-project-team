import { styled } from "@mui/material/styles";
import img from "../../public/assets/vikash.jpg";
import imge from "../../public/assets/Krish.jpg";
import imges from "../../public/assets/code.jpg";
import imgeess from "../../public/assets/code2.jpg";

function Mywork() {
  return (
    <>
      <Header>MY WORKS</Header>
      <Container>
        <Item>
          <Img src={img} alt="vikash" />
        </Item>
        <Item>
          <Img src={imge} alt="Krish" />
        </Item>
        <Item>
          <Img src={imges} alt="code" />
        </Item>
        <Item>
          <Img src={imgeess} alt="code2" />
        </Item>
      </Container>
    </>
  );
}

export default Mywork;

const Header = styled("h1")({
  justifyContent: "center",
  display: "flex",
  padding: "10px",
  color:"white",
  backgroundColor:"black"
});

const Container = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  height:'300px',
  gap: "10px",
  justifyContent: "center",
  backgroundColor:"black",
});

const Item = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
 
  width: "300px",
  padding: "10px",
  overflow: "hidden",
  

});

const Img = styled("img")({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  borderRadius: "10px",
});
