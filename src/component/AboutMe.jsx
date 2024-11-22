import { styled } from "@mui/material/styles";
import image from "../../public/assets/vikash.jpg"



function AboutMe() {
    return (
        <>

            <Container>
                <div className="Aboutus" style={{
                    width: "100%",
                    // margin: "1px",
                    border: "2px solid red",
                    textAlign: "center",
                    padding: "5px",

                }}>
                    <h1>About Me</h1>
                    <img src={image} alt="vikash" style={{
                        width: "250px",
                        height: "250px",
                        borderRadius: "50%",
                        border:"2px solid blue"

                    }} />
                    <p>
                        My name is <span style={{ color: "red" }}>Vikash Kumar Upadhyay</span>, and I am a dedicated Web Developer skilled in creating responsive, user-friendly websites using HTML, CSS, JavaScript, and modern frameworks. I am passionate about delivering seamless user experiences and staying updated with the latest web technologies." 😊
                    </p>

                </div>

                <div className="contactus" style={{
                    width: "100%",
                    margin: "2px",
                    border: "2px solid red",
                    textAlign: "center",
                    padding: "5px",

                }}>
                    <h1>Contacat Us</h1>
                    <form
                        style={{
                            width: "300px",
                            margin: "20px auto",
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "15px",
                        }}>
                        <label htmlFor="username">Name</label>
                        <input type="text" id="username" placeholder="name"
                            style={{
                                width: "100%",
                                padding: "10px",
                                fontSize: "16px",
                            }}

                        />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="email"
                            style={{
                                width: "100%",
                                padding: "10px",
                                fontSize: "16px",
                            }}

                        />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="message"
                            style={{
                                width: "100%",
                                height: "100px",
                                padding: "10px",
                                fontSize: "16px",
                                resize: "none",
                            }}

                        ></textarea>

                        <button
                            type="submit"
                            style={{
                                width: "100%",
                                padding: "10px",
                                fontSize: "16px",
                                backgroundColor: "blue",
                                color: "#fff",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Submit
                        </button>
                    </form>

                </div>


            </Container >


        </>
    )
}

export default AboutMe;


const Container = styled('div')(({ theme }) => ({
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '15px',
    gap: '10px',
    [theme.breakpoints.down('md')]: {

        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
    },

}));

