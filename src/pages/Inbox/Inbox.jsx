import React from "react";
import "./Inbox.css";
// import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TableInbox from "./TableInbox";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const Inbox = () => {
  return (
    <div className="wrap-cont">
      <Container sx={{  margin: "10px"}}>
        <Grid container spacing={2} sx={{ marginTop: "30px" }}>
          <Grid item xs={6} >
            <h3>
              <u>Updates</u>
            </h3>
          </Grid>

          <Grid item xs={6} style={{ textAlign: "right" }}>
            <button className="addReq">
              <AddOutlinedIcon sx={{ marginRight: "10px" }} />
              <span>Add Request</span>
            </button>
          </Grid>
          <Grid item xs={12} >
            <TableInbox />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Inbox;
