import { Button, Typography } from "@mui/material";
import React from "react";
import "./profile.css";
import CustomTimeLine from "../Timeline/timeLine";
const profileIcon = new URL(
  "../../assets/images/avtarImage.jpg",
  import.meta.url
).href;
import { ProfileData } from "../../utils/profileData";
import ButtonComponent from "../Button/button";
import DownloadIcon from "@mui/icons-material/Download";

const Profile = () => {
  return (
    <div className="profile_container" style={{ padding: "10px 0 25px 0" }}>
      <div className="profile_header">
        <Typography className="name">Jigyasa Singh</Typography>
        <Typography className="title">Software Engineer</Typography>
      </div>
      <figure className="profile_image">
        <img src={profileIcon} alt=" profile Icon" />
      </figure>
      <div className="profile_information">
        <CustomTimeLine ProfileData={ProfileData} />
        <br />
        <div className="btn_container">
          <ButtonComponent title={"Download Cv"} icon={<DownloadIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
