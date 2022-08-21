import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

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

const StyledToggleButtonGroup = withStyles({
    grouped: {
        margin: 0.5,
        border: 'none',
        padding: 0,
        '&:not(:first-child)': {
            borderRadius: 0,
        },
        '&:first-child': {
            borderRadius: '50%',
        },
        '&:not(:last-child)': {
            borderRight: `1px solid bg-gray-300`,
        },
        '&:hover': {
            backgroundColor: '#f5f5f5',
        },
    },
})(ToggleButtonGroup);

// const StyledToggleButtonGroup = withStyles(theme => ({
//     grouped: {
//         margin: theme.spacing(2),
//         padding: theme.spacing(0, 1),
//         "&:not(:first-child)": {
//             border: "1px solid",
//             borderColor: "#FFA17B",
//             borderRadius: "50%"
//         },
//         "&:first-child": {
//             border: "1px solid",
//             borderColor: "#FFA17B",
//             borderRadius: "50%"
//         }
//     }
// }))(ToggleButtonGroup);

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

function Calendar() {
    const [days, setDays] = useState([0, 2, 3]);
    return (
        <>
            <StyledToggleButtonGroup
                value={days}
                exclusive
                onChange={(event, newValue) => {
                    setDays(newValue);
                }
                }
                aria-label="text alignment"
            >
                {Days.map(day => (
                    <StyledToggle
                        key={day.key}
                        value={day.key}
                        aria-label={day.label}
                    >
                        {day.label}
                    </StyledToggle>
                ))}
            </StyledToggleButtonGroup>
        </>
    );
}

export default Calendar;

//             {/* <StyledToggleButtonGroup
//                 size="small"
//                 arial-label="My Habits"
//                 value={days}
//                 onChange={(event, value) => setDays(value)}
//             >
//                 {Days.map((day, index) => (
//                     <StyledToggle key={day.key} value={index} aria-label={day.key}>
//                         {day.label}
//                     </StyledToggle>
//                 ))}
//             </StyledToggleButtonGroup> */}
// //         </>
// //     );
// // };

// // export default Calendar;