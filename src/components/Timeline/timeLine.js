import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import "./timeLine.css";

const CustomTimeLine = ({ icon, title, children }) => {
  return (
    <Timeline className="timeLine">
      {/* Time Line Header */}
      <TimelineItem className="time_line_header">
        <TimelineSeparator>
          <TimelineDot className="time_line_dot_header">
            {<WorkIcon />}
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
      <TimelineItem>
        <CustomTimeLineItem />
        <TimelineContent>
          <Typography className="TimeLineTextHeader">code</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export const CustomTimeLineItem = ({ icon, title, children }) => {
  return (
    <TimelineSeparator className="time_line_separator_body">
      <TimelineDot variant="outlined" className="time_line_dot_body" />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

export default CustomTimeLine;
