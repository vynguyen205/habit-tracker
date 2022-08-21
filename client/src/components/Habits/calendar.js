import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import  ToggleButton from "@material-ui/lab";
import ToggleButtonGroup from "@material-ui/lab";


const Days = [
    {
        key: 'Sunday',
        label: 'S'
    },
    {
        key: 'Monday',
        label: 'M'
    },
    {
        key: 'Tuesday',
        label: 'T'
    },
    {
        key: 'Wednesday',
        label: 'W'
    },
    {
        key: 'Thursday',
        label: 'T'
    },
    {
        key: 'Friday',
        label: 'F'
    },
    {
        key: 'Saturday',
        label: 'S'
    }
];

const StyledToggleButtonGroup = withStyles(theme => ({
    grouped: {
      margin: theme.spacing(2),
      padding: theme.spacing(0, 1),
      "&:not(:first-child)": {
        border: "1px solid",
        borderColor: "#FFA17B",
        borderRadius: "50%"
      },
      "&:first-child": {
        border: "1px solid",
        borderColor: "#FFA17B",
        borderRadius: "50%"
      }
    }
  }))(ToggleButtonGroup);
  
  const StyledToggle = withStyles({
    root: {
      color: "#FFA17B",
      "&$selected": {
        color: "white",
        background: "#FFA17B"
      },
      "&:hover": {
        borderColor: "#FEE3CB",
        background: "#FEE3CB"
      },
      "&:hover$selected": {
        borderColor: "#FEE3CB",
        background: "#FEE3CB"
      },
      minWidth: 32,
      maxWidth: 32,
      height: 32,
      textTransform: "unset",
      fontSize: "0.75rem"
    },
    selected: {}
  })(ToggleButton);
  
function Calendar () {
    const [days, setDays] = useState([0, 2, 3]);
    return (
      <>
        <StyledToggleButtonGroup
          size="small"
          arial-label="My Habits"
          value={days}
          onChange={(event, value) => setDays(value)}
        >
          {Days.map((day, index) => (
            <StyledToggle key={day.key} value={index} aria-label={day.key}>
              {day.label}
            </StyledToggle>
          ))}
        </StyledToggleButtonGroup>
      </>
    );
  };
  
  export default Calendar;