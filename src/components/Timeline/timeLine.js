import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import "./timeLine.css";

const CustomTimeLine = ({ ProfileData, title }) => {
  return (
    <Timeline className="timeLine" style={{ padding: 0 }}>
      {/* Time Line Header */}
      <TimelineItem className="time_line_header">
        <TimelineSeparator>
          <TimelineDot className="time_line_dot_header">
            {<PersonIcon />}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className="TimeLineTextHeader">
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {/* Time Line Body */}
      {ProfileData &&
        Object.keys(ProfileData).length &&
        Object.entries(ProfileData).map(([key, value]) => (
          <CustomTimeLineItem key={key} keyName={key} value={value} />
        ))}
    </Timeline>
  );
};

const CustomTimeLineItem = ({ keyName, value }) => (
  <TimelineItem className="time_line_body">
    <TimelineSeparator className="time_line_separator_body">
      <TimelineDot variant="outlined" className="time_line_dot_body" />
      <TimelineConnector className="time_line_body_connector" />
    </TimelineSeparator>
    <TimelineContent className="time_line_body_content">
      <Typography className="TimeLineValueHeader">
        <b>{keyName}: </b>
        <span style={{ marginInlineStart: "5px" }} className="TimeLineValue">
          {value.toString()}
        </span>
      </Typography>
    </TimelineContent>
  </TimelineItem>
);

export default CustomTimeLine;
