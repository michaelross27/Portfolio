import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import EmailIcon from "@mui/icons-material/Email";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { AiTwotoneMail } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
    marginBottom: "1rem",
    marginLeft: "1rem",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Typography variant="h4" className={classes.heading}>
          Please Contact Me For a Copy of My Resume or for any Further Inquiries
        </Typography>
      </Grid>
      <Grid container justify="center">
      <IconContext.Provider
          value={{ color: "orange", size: "2em", marginRight: "1em", className: "global-class-name" }}
        >
          <div>
            <AiTwotoneMail />
          </div>
        </IconContext.Provider>
        <Typography variant="h5" className={classes.input}>
          <a href="mailto:michaelross27@gmail.com">Email Me Here</a>
        </Typography>
      </Grid>
      <Grid container justify="center">
        <IconContext.Provider
          value={{ color: "orange", size: "2em", marginRight: "1em", className: "global-class-name" }}
        >
          <div>
            <FaGithub />
          </div>
        </IconContext.Provider>
        <Typography variant="h5" className={classes.input}>
        Click <a href="https://github.com/michaelross27">Here</a> to Access my
          Github Page
        </Typography>
      </Grid>
    </Box>
  );
};

export default Contact;
