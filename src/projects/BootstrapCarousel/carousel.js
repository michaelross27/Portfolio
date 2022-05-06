import React from "react";
import { Grid, Button } from "@material-ui/core";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import chromeRiver from "./img/chrome-river.jpg";
import reactLake from "./img/react-lake.jpg";
import breadcrumbTrail from "./img/breadcrumb-trail.jpg";

const BooststrapCarousel = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Campsite Carousel</DialogTitle>
      <Divider />
      <DialogContent>
        <Grid container spacing={3}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={breadcrumbTrail}
                alt="Breadcrumb Trail Campground"
              />
              <Carousel.Caption
                style={{
                  backgroundColor: "rgba(29, 44, 42, 0.7)",
                }}
              >
                <h3>Breadcrumb Trail Campground</h3>
                <p>
                  Let Nucamp be your guide on this off-the-beaten-path,
                  hike-in-only campground.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={reactLake}
                alt="React Lake Campground"
              />

              <Carousel.Caption
                style={{
                  backgroundColor: "rgba(29, 44, 42, 0.7)",
                }}
              >
                <h3>React Lake Campground</h3>
                <p>
                  Nestled in the foothills of the Chrome Mountains, this
                  campground on the shores of the pristine React Lake is a
                  favorite for fly fishers.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={chromeRiver}
                alt="Chrome River Campground"
              />

              <Carousel.Caption
                style={{
                  backgroundColor: "rgba(29, 44, 42, 0.7)",
                }}
              >
                <h3>Chrome River Campground</h3>
                <p>
                  Spend a few sunny days and starry nights beneath a canopy of
                  old-growth firs at this enchanting spot by the Chrome River.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Grid>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BooststrapCarousel;
