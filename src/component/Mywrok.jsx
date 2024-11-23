import { useState } from "react";
import { styled } from "@mui/material";
import { useTransition } from "react";

const workList = [
  {
    img: "https://via.placeholder.com/150",
    title: "Project 1",
    par: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Project 2",
    par: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Project 3",
    par: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Project 4",
    par: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Project 5",
    par: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Project 6",
    par: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Project 7",
    par: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Project 8",
    par: "Lorem ipsum dolor sit amet consectetur",
  },
];

function MyWork() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = 4; // Number of projects to show initially

  const toggleShowMore = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>My Work</h1>
      <ContainerStyle id="mywork" className="container">
        {workList
          .slice(0, showAll ? workList.length : visibleProjects)
          .map((work, index) => (
            <WorkCard key={index}>
              <img src={work.img} alt={work.title} />
              <h5>{work.title}</h5>
              <p>{work.par}</p>
            </WorkCard>
          ))}
      </ContainerStyle>
      <ButtonStyle onClick={toggleShowMore}>
        {showAll ? "Show Less" : "Show More"}
      </ButtonStyle>
    </>
  );
}

export default MyWork;

const ContainerStyle = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "2rem",
  padding: "40px",
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

const WorkCard = styled("div")(() => ({
  textAlign: "center",
  padding: "10px",
  boxShadow: "0px 0px 10px red",
  borderRadius: "8px",
  img: {
    width: "100%",
    height: "auto",
    borderRadius: "8px 8px 0 0",
  },
  h5: {
    margin: "10px 0",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  p: {
    fontSize: "1rem",
    color: "#555",
  },


  '&:hover': { 
    transform: 'scale(1.05)', 
    boxShadow: '2px 4px 10px red',
    transition:"0.8s"
},


}));

const ButtonStyle = styled("button")(() => ({
  display: "block",
  margin: "20px auto",
  padding: "10px 20px",
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#fff",
  background: "red",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  "&:hover": {
    background: "darkred",
  },
}));










































// import { styled } from "@mui/material";

// const workList = [
//     {
//         img:"img",
//         title:"project",
//         par:"lorm ipsum dolor sit amet consectetur"

//     },
//     {
//         img:"img",
//         title:"project",
//         par:"lorm ipsum dolor sit amet consectetur"

//     }, {
//         img:"img",
//         title:"project",
//         par:"lorm ipsum dolor sit amet consectetur"

//     }, {
//         img:"img",
//         title:"project",
//         par:"lorm ipsum dolor sit amet consectetur"

//     }, {
//         img:"img",
//         title:"project",
//         par:"lorm ipsum dolor sit amet consectetur"

//     }, {
//         img:"img",
//         title:"project",
//         par:"lorm ipsum dolor sit amet consectetur"

//     }, {
//         img:"img",
//         title:"project",
//         par:"lorm ipsum dolor sit amet consectetur"

//     }, {
//         img:"img",
//         title:"project",
//         par:"lorm ipsum dolor sit amet consectetur"

//     }, {
//         img:"img",
//         title:"project",
//         par:"lorm ipsum dolor sit amet consectetur"

//     },
// ];

// function Mywrok() {
//     return (
//       <>
//       <h1 style={{textAlign:"center"}}>My work</h1>
//        <ConainerStyle className="container">
//         <div style={{textAlign:"center", padding:"5px", boxShadow:"0px 0px 10px red"}}><img src="#"/> <h5>Project title</h5> <p>Lorem ipsum dolor sit amet consectetur</p></div>
//         <div style={{textAlign:"center", padding:"5px", boxShadow:"0px 0px 10px red"}}><img src="#"/> <h5>Project title</h5> <p>Lorem ipsum dolor sit amet consectetur</p></div>
//         <div style={{textAlign:"center", padding:"5px", boxShadow:"0px 0px 10px red"}}><img src="#"/> <h5>Project title</h5> <p>Lorem ipsum dolor sit amet consectetur</p></div>
//         <div style={{textAlign:"center", padding:"5px", boxShadow:"0px 0px 10px red"}}><img src="#"/> <h5>Project title</h5> <p>Lorem ipsum dolor sit amet consectetur</p></div>
//         <div style={{textAlign:"center", padding:"5px", boxShadow:"0px 0px 10px red"}}><img src="#"/> <h5>Project title</h5> <p>Lorem ipsum dolor sit amet consectetur</p></div>
//         <div style={{textAlign:"center", padding:"5px", boxShadow:"0px 0px 10px red"}}><img src="#"/> <h5>Project title</h5> <p>Lorem ipsum dolor sit amet consectetur</p></div>
//         <div style={{textAlign:"center", padding:"5px", boxShadow:"0px 0px 10px red"}}><img src="#"/> <h5>Project title</h5> <p>Lorem ipsum dolor sit amet consectetur</p></div>
//         <div style={{textAlign:"center", padding:"5px", boxShadow:"0px 0px 10px red"}}><img src="#"/> <h5>Project title</h5> <p>Lorem ipsum dolor sit amet consectetur</p></div>
//        </ConainerStyle>
//       </>
//     )
//   }
  
//   export default Mywrok ;


// const ConainerStyle = styled("div")(({theme})=>({
//     display:"grid",
//     gridTemplateColumns: "auto auto auto auto",
//     justifyContent:"space-around",
//     gap:"2rem",
//     paddingTop:"10px",
//     width:"100%",
//     [theme.breakpoints.down('lg')]: {
//         gridTemplateColumns:"auto auto",
//     },
//     [theme.breakpoints.down('sm')]: {
//         gridTemplateColumns:"auto",
//     },
// }));