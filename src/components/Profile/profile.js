import { Button, Typography } from "@mui/material";
import React from "react";
import "./profile.css";
const profileIcon = new URL("../../assets/profileIcon.jpeg", import.meta.url)
  .href;

const Profile = () => {
  return (
    <div className="profile_container">
      <div className="profile_header">
        <Typography className="name">Jigyasa Singh</Typography>
        <Typography className="title">Software Engineer</Typography>
      </div>
      <div className="profile_image">
        <img src={profileIcon} alt=" profile Icon" width={"100px"} />
      </div>
      <div className="profile_information">
        Add TileLine
        <br />
        <Button>Download</Button>
      </div>
    </div>
  );
};

export default Profile;
