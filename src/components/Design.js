import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Algorithm from './Algorithm';
import Container from '@mui/material/Container';
import { useForm } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import InputAdornment from '@mui/material/InputAdornment';




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

const Design = () => {
    // const classes = useStyles();

    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const [result1, setResult1] = useState("");
    // const [result2, setResult2] = useState("");
    // const [result3, setResult3] = useState("");
    // const [result4, setResult4] = useState("");
    // const [result5, setResult5] = useState("");
    // const [result6, setResult6] = useState("");
    // const [result7, setResult7] = useState("");
    // const [result8, setResult8] = useState("");
    // const [result9, setResult9] = useState("");
    // const [result11, setResult11] = useState("");
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
        // data.material = "Floor Heater Material"
        setResult(JSON.stringify(data.time));

        // setResult2(JSON.stringify(data.Gri));
        // setResult3(JSON.stringify(data.Pri));
        // setResult4(JSON.stringify(data.Nui));
        // setResult5(JSON.stringify(data.hi));
        // setResult6(JSON.stringify(data.Gro));
        // setResult7(JSON.stringify(data.Pro));
        // setResult8(JSON.stringify(data.Nuo));
        // setResult9(JSON.stringify(data.ho));
        // setResult11(JSON.stringify(data.U));
    }

    return <div>

        <Grid container spacing={5} sx={{ mt: 3 }}>

            <Grid item xs={12} sm={6}>
                <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                    <Container >
                        {/* <FormControl> */}
                        <Grid container spacing={6} >
                            <Grid item xs={12} sm={6}>
                                <InputLabel id="demo-simple-select-label">Desirable Temperature</InputLabel>
                                <OutlinedInput label="Desirable Temperature" id="outlined-number" type="number" step=".1" defaultValue={25} {...register("desirableTemp")} placeholder="Desirable Temperature" endAdornment={<InputAdornment position="end">°C</InputAdornment>} />
                                {/* <input type="number" step=".1" defaultValue={25} {...register("desirableTemp")} placeholder="Desirable Temperature" /> */}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel id="demo-simple-select-label">Environment Temperature</InputLabel>
                                <OutlinedInput label="Environment Temperature" id="outlined-number" type="number" step=".1"{...register("environTemp")} endAdornment={<InputAdornment position="end">°C</InputAdornment>} />
                                {/* <input type="number" step=".1"{...register("environTemp")} placeholder="Environmental Temperature" /> */}
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container spacing={6}>
                            <Grid item xs={12} sm={6}>
                                <InputLabel id="demo-simple-select-label">Layer 1 Material</InputLabel>
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
                                <InputLabel id="demo-simple-select-label">Layer 1 Thickness in MM</InputLabel>
                                <OutlinedInput id="outlined-number"  {...register("layer1Thickness")} placeholder="Layer 1 Thickness in MM" />

                                {/* <input {...register("layer1Thickness")} placeholder="layer1 Thickness" /> */}
                            </Grid>
                        </Grid>
                        <br />
                        <br />

                        <Grid container spacing={6} >
                            <Grid item xs={12} sm={6}>
                                <InputLabel id="demo-simple-select-label">Layer 2 Material</InputLabel>
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
                                <InputLabel id="demo-simple-select-label">Layer 2 Thickness in MM</InputLabel>

                                <TextField focusColor='grey' id="outlined-basic" variant="outlined"
                                    default={0}  {...register("layer2Thickness")} placeholder="Layer 2 Thickness in MM" />

                                {/* <input {...register("layer2Thickness")} default={0} placeholder="layer2 Thickness" /> */}
                            </Grid>
                        </Grid>

                        <br />
                        <br />

                        <Button type="submit" variant="contained" primary  >
                            Submit
                        </Button>

                        {/* </FormControl> */}
                    </Container>
                </form>
            </Grid>

            <Grid item xs={12} sm={6}>
                <div>
                    <img src={require("../images/convection.png")} />
                </div>
            </Grid>
        </Grid>

        {(result !== "" && result1 !== "") &&
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <h4>Time Takes to Heat : {result}</h4>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <h4>Recommended Wattage for Mat: {result1} </h4>
                    </Grid>
                </Grid>
            </div>}
    </div >;
};

export default Design;
