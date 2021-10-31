import React, { useState } from "react";
import { withStyles, TextField, Grid, Typography } from "@material-ui/core";
import { ladyIcon, phoneIcon } from "./iconPaths";
const style = (theme) => {
    return {
        root: {
            padding: theme.spacing.unit * 3,
            height: "100%",
            maxWidth: 450,
            margin: "0 auto",
            "& input:disabled": { opacity: 0.5 }
        },
        icon: {
            fill: theme.palette.grey[500]
        }
    };
};

const Contacts2 = ({ classes, formSubmitted }) => {
    const [name, setName] = useState(() => {
        return localStorage.getItem("name") ?? "";
    });
    const [name2, setName2] = useState(() => {
        return localStorage.getItem("name2") ?? "";
    });

    const [phone, setPhone] = useState(localStorage.getItem("phone") ?? "");
    const [phone2, setPhone2] = useState(localStorage.getItem("phone2") ?? "");
    const handleNameChange = (e) => {
        setName(e.target.value);
        localStorage.setItem("name", JSON.stringify(e.target.value));
    };
    const handleNameChange2 = (e) => {
        setName2(e.target.value);
        localStorage.setItem("name1", JSON.stringify(e.target.value));
    };
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        localStorage.setItem("phone", e.target.value);
    };
    const handlePhoneChange2 = (e) => {
        setPhone2(e.target.value);
        localStorage.setItem("phone", e.target.value);
    };

    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.root}
        >
            <Grid container direction="row" alignItems="center" alignContent="center">

                <Typography gutterBottom>
                    FLOOR HEATING MATS (for comfort heating)
                </Typography>
                <Typography gutterBottom>
                    Time taken to Heat : 156mins
                </Typography>
            </Grid>
        </Grid>
    );
};

export default withStyles(style)(Contacts2);
