import { Button } from "@mui/material";
import React from "react";
import "./button,.css";
const ButtonComponent = ({ title, icon }) => {
  return (
    <Button
      className="btn"
      style={{
        backgroundColor: "var(--main-color)",
        fontSize: "14px",
        border: 0,
        borderRadius: "50px",
        minWidth: "100px",
        textTransform: "none",
        padding: "1px 12px",
        lineHeight: "35px",
        outline:'none'
      }}
      endIcon={icon ? <div className="btn_icon">{icon}</div> : null}
    >
      <span
        className="btn_text"
        style={{ marginRight: "5px", marginLeft: "5px" }}
      >
        {title}
      </span>
    </Button>
  );
};

export default ButtonComponent;
