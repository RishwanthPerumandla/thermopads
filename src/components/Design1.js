import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Algorithm from './Algorithm';
import Container from '@mui/material/Container';
import { useForm } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                p: 2,
                m: 1,
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};


function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
}

const Design1 = () => {
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const [result1, setResult1] = useState("");
    const [result2, setResult2] = useState("");
    const onSubmit = async (data) => {
        console.log(data)
        const Q2 = await Algorithm(data);
        data.time = secondsToHms(Q2.T);
        data.HeatDissipated = Q2.Q;
        data.Gri = Q2.Gri;
        data.Pri = Q2.Pri;
        data.Nui = Q2.Nui;
        data.hi = Q2.hi;
        data.Gro = Q2.Gro;
        data.Pro = Q2.Pro;
        data.Nuo = Q2.Nuo;
        data.ho = Q2.ho;
        data.U = Q2.U;

        if (data.HeatDissipated < 80) {
            setResult1(JSON.stringify("100Watt"));
        } else if (80 < data.HeatDissipated < 130) {
            setResult1(JSON.stringify("150Watt"));
        } else if (130 < data.HeatDissipated < 180) {
            setResult1(JSON.stringify("200Watt"));
        }

        console.log(data.HeatDissipated)
        setResult2(data.area * data.HeatDissipated)

        setResult(JSON.stringify(data.time));
    }

    return <div style={{ width: '100%' }}>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>




            <br />
            <Box sx={{ m: 2, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <Item >
                    <Grid sx={{ pt: 16 }} container spacing={6}>
                        <Grid item xs={12} sm={6}>
                            <InputLabel id="demo-simple-select-label"> Material</InputLabel>
                            <br />
                            <Select
                                placeholder='Layer 1 Material'
                                id="demo-simple-select"
                                {...register("layer1")}
                                label="Layer 1 Material"
                                input={<OutlinedInput />}
                                fullWidth
                            >
                                <MenuItem value={"concrete"}>Concrete</MenuItem>
                                <MenuItem value={"wood"}>Wood</MenuItem>
                                <MenuItem value={"tiles"}>Tiles</MenuItem>
                                <MenuItem value={"pavers"}>Pavers</MenuItem>
                                <MenuItem value={"none"}>None</MenuItem>

                            </Select>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel id="demo-simple-select-label">Thickness in MM</InputLabel>
                            <br />

                            <OutlinedInput id="outlined-number" style={{ width: 100 }} {...register("layer1Thickness")} />

                            {/* <input {...register("layer1Thickness")} placeholder="layer1 Thickness" /> */}
                        </Grid>
                    </Grid>

                    <br />
                    <br />

                    <Grid container spacing={6} >
                        <Grid item xs={12} sm={6}>
                            {/* <InputLabel id="demo-simple-select-label"> Material</InputLabel> */}
                            <Select
                                placeholder='Layer 1 Material'
                                id="demo-simple-select"
                                {...register("layer2")}
                                input={<OutlinedInput />}
                                label="Layer 2 Material"
                                fullWidth
                            >
                                <MenuItem value={"concrete"}>Concrete</MenuItem>
                                <MenuItem value={"wood"}>Wood</MenuItem>
                                <MenuItem value={"tiles"}>Tiles</MenuItem>
                                <MenuItem value={"pavers"}>Pavers</MenuItem>
                                <MenuItem value={"none"}>None</MenuItem>

                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {/* <InputLabel id="demo-simple-select-label">Thickness in MM</InputLabel> */}

                            <TextField focusColor='grey' id="outlined-basic" variant="outlined" style={{ width: 100 }}
                                default={0}  {...register("layer2Thickness")} />

                            {/* <input {...register("layer2Thickness")} default={0} placeholder="layer2 Thickness" /> */}
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                    <Button type="submit" variant="contained" primary  >
                        Submit
                    </Button>
                </Item>
                <Item>
                    <Grid container alignItems="center"
                        justifyContent="center" spacing={2} >
                        <Grid item >
                            <InputLabel id="demo-simple-select-label">T Surface (°C)</InputLabel>
                            <OutlinedInput style={{ width: 100 }} label="Surface Temperature" id="outlined-number" type="number" step=".1" defaultValue={25} {...register("desirableTemp")} placeholder="Desirable Temperature" endAdornment={<InputAdornment position="end">°C</InputAdornment>} />
                            {/* <input type="number" step=".1" defaultValue={25} {...register("desirableTemp")} placeholder="Desirable Temperature" /> */}
                        </Grid>
                        <Grid item>
                            <InputLabel id="demo-simple-select-label">T Ambient (°C)</InputLabel>
                            <OutlinedInput style={{ width: 100 }} label="Ambient Temperature" id="outlined-number" type="number" step=".1"{...register("environTemp")} endAdornment={<InputAdornment position="end">°C</InputAdornment>} />
                            {/* <input type="number" step=".1"{...register("environTemp")} placeholder="Environmental Temperature" /> */}
                        </Grid>
                    </Grid>
                    <div>
                        <img src={require("../images/convection.png")} />
                    </div>
                </Item>
                <Item >
                    <div>
                        <InputLabel id="demo-simple-select-label">Area in Sq Mts</InputLabel>
                        <br />
                        <OutlinedInput id="outlined-number" style={{ width: 100 }} {...register("area")} />
                        {(result !== "" && result2 !== "") &&
                            <div sx={{ pt: 6 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12}>
                                        <h3>Time Takes to Heat : <b>{result}</b></h3>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <h3>Recommended Wattage for Mat: <b>{result2}</b> </h3>
                                    </Grid>
                                </Grid>
                            </div>}
                    </div>
                </Item>
            </Box>
        </form>
    </div >
};

export default Design1;


