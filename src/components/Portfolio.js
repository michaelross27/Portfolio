import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

import PasswordRegistration from "../projects/RegisterPassword/PasswordRegistration";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Password Registration",
    description: `This is a Password Registration form made in React using the zxcvbn library for password strength.  It displays a strength bar to show the user whether their password is strong enough and will not allow the user to submit unless the entries in both password fields match.`,
    image: project5,
  },
  {
    name: "Project 2",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project2,
  },
  {
    name: "Project 3",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project3,
  },
  {
    name: "Project 4",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project4,
  },
  {
    name: "Project 5",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project5,
  },
  {
    name: "Project 6",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project6,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project5}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                  "Password Registration"
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                  `This is a Password Registration form made in React using the zxcvbn library for password strength.  It displays a strength bar to show the user whether their password is strong enough and will not allow the user to submit unless the entries in both password fields match.`
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
            
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project5}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                  "React Table with Pagination and full CRUD operations"
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                  `This table pulls entries from an API using Axios, and allows a user to View single entries, edit existing entries, add a new entry, or delete an existing one.`
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project5}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                  "Bootstrap Carousel"
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                  `This is a simple Carousel Demo in Bootstrap that scrolls through three images automatically and has controls to navigate the images manually.  This was done in a bootcamp I attended.`
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project5}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                  "Bootstrap Accordion"
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                  `Here is a set of Accordions made in Bootstrap for a community band.  Each section has its own Accordion listing all the players of each instrument in the section.`
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )
      </Grid>
    </Box>
  );
};

export default Portfolio;
