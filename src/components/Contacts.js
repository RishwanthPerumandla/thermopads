import React, { useState } from "react";
import { withStyles, TextField, Grid, MenuItem, InputLabel, Select, FormControl } from "@material-ui/core";
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

const Contacts = ({ classes, formSubmitted }) => {
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
                <Grid item xs={2}>
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className={classes.icon}
                        width="30px"
                        height="30px"
                    >
                        {ladyIcon}
                    </svg> */}
                </Grid>
                <Grid item xs={10}>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Layer 1</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={name}
                            label="Layer 1"
                            onChange={handleNameChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        name="name"
                        id="name"
                        value={name2}
                        fullWidth
                        margin="normal"
                        label="Enter Thickness in MM "
                        variant="filled"
                        onChange={handleNameChange2}
                        disabled={formSubmitted}
                    />
                </Grid>
            </Grid>{" "}
            <Grid container direction="row" alignItems="center">
                <Grid item xs={2}>
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 463.009 463.009"
                        className={classes.icon}
                        width="24px"
                        height="24px"
                    >
                        {phoneIcon}
                    </svg> */}
                </Grid>
                <Grid item xs={10}>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Layer 2</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={phone}
                            label="Layer 2"
                            onChange={handlePhoneChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        name="phone"
                        id="phone"
                        value={phone2}
                        fullWidth
                        margin="normal"
                        label="Enter Thickness in MM "
                        variant="filled"
                        onChange={handlePhoneChange2}
                        disabled={formSubmitted}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default withStyles(style)(Contacts);
