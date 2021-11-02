import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { Paper, Grid, Typography, withStyles, Button, FormControl, InputLabel, Select, MenuItem, TextField, IconButton, DialogTitle, DialogActions } from "@material-ui/core";
import PropTypes from 'prop-types';
import { styled } from '@material-ui/styles';

const style = (theme) => ({
    root: {
        border: `8px solid ${theme.palette.common.white}`,
        margin: 16,
        padding: "36px 0 0",
        background: `rgba(255,255,255,0.9)`,
        boxShadow: [
            `0px 16px 26px -10px ${theme.palette.primary.main}99`,
            theme.shadows[15]
        ]
    },
    navigation: {
        width: 110,
        fontSize: 12,
        [theme.breakpoints.down("xs")]: {
            fontSize: 10,
            width: 90
        }
    },
    prevBtn: {
        color: theme.palette.grey[700],
        background: theme.palette.common.white,
        boxShadow: theme.shadows[5]
    }
});



const Content = ({ classes }) => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [units, setUnits] = React.useState('');
    const [layer1, setLayer1] = React.useState('');
    const [layer2, setLayer2] = React.useState('');
    const [desirableTemp, setDesirableTemp] = useState("");
    const [environTemp, setEnvironTemp] = useState("");
    const [layer1Thickness, setLayer1Thickness] = useState('');
    const handleChangeLayer1Thickness = (event) => {
        setLayer1Thickness(event.target.value);
    };
    const [layer2Thickness, setLayer2Thickness] = useState('');
    const handleChangeLayer2Thickness = (event) => {
        setLayer2Thickness(event.target.value);
    };
    const handleChangeUnits = (event) => {
        setUnits(event.target.value);
    };
    const handleChangeLayer1 = (event) => {
        setLayer1(event.target.value);
    };
    const handleChangeLayer2 = (event) => {
        setLayer2(event.target.value);
    };
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     localStorage.clear();
    //     setFormSubmitted(true);
    //     const data = Array.from(e.target.elements)
    //         .map((el) => el.id)
    //         .filter(Boolean)
    //         .reduce((accObj, field) => {
    //             accObj[field] = e.target.elements[field].value;
    //             return accObj;
    //         }, {});
    //     alert(JSON.stringify(data, null, 2));
    // };

    return (
        <Paper style={{}} elevation={1} className={classes.root}>
            <Typography
                variant="h4"
                gutterBottom
                color="primary"
                style={{ padding: "0 8px" }}
            >
                ThermoPads
            </Typography>
            <Typography gutterBottom>
                This information will let us know about your preferences.
            </Typography>
            <Typography gutterBottom>
                We'll Suggest you the Best ThermoPad and Time taken to Heat the floor.
            </Typography>


            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Temperature Units</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={units}
                    label="Units"
                    onChange={handleChangeUnits}
                >
                    <MenuItem value={"c"}>Celsius(C)</MenuItem>
                    <MenuItem value={"f"}>Fahrenheit(F)</MenuItem>
                    <MenuItem value={"k"}>Kelvin(K)</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>

                <TextField
                    label="Desirable Temperature"
                    type="number"
                    value={desirableTemp}
                    variant="outlined"
                    inputProps={{
                        maxLength: 40,
                        step: "1.0"
                    }}
                    onChange={(e) => setDesirableTemp(parseFloat(e.target.value).toFixed(1))}
                />
            </FormControl>
            <FormControl fullWidth>


                <TextField
                    label="Environmental Temperature"
                    type="number"
                    value={environTemp}
                    variant="outlined"
                    inputProps={{
                        maxLength: 40,
                        step: "1.0"
                    }}
                    onChange={(e) => setEnvironTemp(parseFloat(e.target.value).toFixed(1))}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Layer 1</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={layer1}
                    label="Layer1"
                    onChange={handleChangeLayer1}
                >
                    <MenuItem value={"concrete"}>Concrete</MenuItem>
                    <MenuItem value={"none"}>None</MenuItem>
                    {/* <MenuItem value={"k"}>Kelvin(K)</MenuItem> */}
                </Select>
            </FormControl>
            <TextField
                id="outlined-name"
                label="Layer 1 Thickness"
                value={layer1Thickness}
                onChange={handleChangeLayer1Thickness}
            />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Layer 2</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={layer2}
                    label="Layer2"
                    onChange={handleChangeLayer2}
                >
                    <MenuItem value={"concrete"}>Concrete</MenuItem>
                    <MenuItem value={"wood"}>Wood</MenuItem>
                    <MenuItem value={"tiles"}>Tiles</MenuItem>
                    <MenuItem value={"pavers"}>Pavers</MenuItem>
                    {/* <MenuItem value={"k"}>Kelvin(K)</MenuItem> */}
                </Select>
                <TextField
                    id="outlined-name"
                    label="Layer 2 Thickness"
                    value={layer2Thickness}
                    onChange={handleChangeLayer2Thickness}
                />
            </FormControl>

            <Button variant="outlined" onClick={handleClickOpen}>
                Open dialog
            </Button>

        </Paper>
    );
};
export default withStyles(style)(Content);
