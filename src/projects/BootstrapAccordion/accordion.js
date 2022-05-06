import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './style/accordion.css';

import { Grid, Button } from "@material-ui/core";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BootstrapAccordion = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Band Roster</DialogTitle>
      <Divider />
      <DialogContent>
      <Grid container spacing={3}>
          <Grid item xs={11}>
        <div>
          <h3 className="font-weight-bold">Conductor - Tom Offerjost</h3>
        </div>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={11}>
            <div>
              <h4 className="font-weight-bold">Woodwinds</h4>
            </div>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Piccolo</Accordion.Header>
                <Accordion.Body>
                  <p>Louise Johnson</p>
                  <p>Cheryl McGovern</p>
                  <p>Bonnie Harley</p>
                  <p>Janet Offerjost</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Oboe</Accordion.Header>
                <Accordion.Body>
                  <p>Ginny Baird</p>
                  <p>Larry Romba</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Clarinet</Accordion.Header>
                <Accordion.Body>
                  <p>Alane Gruber</p>
                  <p>Mark Jordan</p>
                  <p>Sabrina Tempesta</p>
                  <p>Donna Ross</p>
                  <p>Jerrald Zupfer</p>
                  <p>Adrian Mercado</p>
                  <p>Diana Garcia</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Bass Clarinet</Accordion.Header>
                <Accordion.Body>
                  <p>Lynne Montella</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4"></Accordion.Item>
              <Accordion.Header>Saxophone</Accordion.Header>

              <Accordion.Body>
                <p>Randy Scott</p>
                <p>James Butcher</p>
                <p>Mark Perry</p>
                <p>Aaron Mercado</p>
                <p>Tom Bisdale</p>
                <p>Mark Jordan</p>
                <p>Larry Romba</p>
                <p>Mike Depompeo</p>
              </Accordion.Body>
            </Accordion>
          </Grid>

          <Grid item xs={11}>
            <div>
              <h4 className="font-weight-bold">Brass</h4>
            </div>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Trumpet</Accordion.Header>
                <Accordion.Body>
                  <p>Bob Harley</p>
                  <p>Katy Holsten</p>
                  <p>Mike Monticello</p>
                  <p>Steve Steiner</p>
                  <p>Russ Paquette</p>
                  <p>Andrew Gerstmayr</p>
                  <p>Derek Johnson</p>
                  <p>George Sable</p>
                  <p>Jeff Offerjost</p>
                  <p>Pat Passero</p>
                  <p>Tom Offerjost</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Trombone</Accordion.Header>
                <Accordion.Body>
                  <p>Mel Flanzman</p>
                  <p>Warren Beckman</p>
                  <p>Dan Montella</p>
                  <p>Lloyd de Vries</p>
                  <p>Everett Fink</p>
                  <p>Tom Garlick</p>
                  <p>Jeff Behr</p>
                  <p>Chris Russo</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>French Horn</Accordion.Header>
                <Accordion.Body>
                  <p>Robert Garcia</p>
                  <p>David Jenkins</p>
                  <p>Jeff Offerjost</p>
                  <p>Andrew Gerstmayr</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Baritone Horn</Accordion.Header>
                <Accordion.Body>
                  <p>Andrew Gerstmayr</p>
                  <p>Kevin Nast</p>
                  <p>David Jenkins</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Euphonium</Accordion.Header>

                <Accordion.Body>
                  <p>Lloyd de Vries</p>
                  <p>Everett Fink</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Tuba</Accordion.Header>

                <Accordion.Body>
                  <p>Carl Stromberg</p>
                  <p>Everett Fink</p>
                  <p>Larry Zaidan</p>
                  <p>Adam Smith</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Grid>
          <Grid item xs={11}>
            <div>
              <h4 className="font-weight-bold">Percussion and Others</h4>
            </div>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Percussion</Accordion.Header>
                <Accordion.Body>
                  <p>Dan Pena</p>
                  <p>Andrew Haderthauer</p>
                  <p>Rob Abbatomarco</p>
                  <p>Bob Visich</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Piano</Accordion.Header>
                <Accordion.Body>
                  <p>Warren Beckman</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Bass Guitar</Accordion.Header>
                <Accordion.Body>
                  <p>Robert Garcia</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Grid>
        </Grid>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BootstrapAccordion;
