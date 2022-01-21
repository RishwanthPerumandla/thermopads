import React, { useState } from "react";
import { Paper, Grid, Typography, withStyles, Button, FormControl, InputLabel, Select, MenuItem, TextField, IconButton, DialogTitle, DialogActions } from "@material-ui/core";

import { useForm } from "react-hook-form";
import Algorithm from './Algorithm';


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
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const [result1, setResult1] = useState("");
    const [result2, setResult2] = useState("");
    const [result3, setResult3] = useState("");
    const [result4, setResult4] = useState("");
    const [result5, setResult5] = useState("");
    const [result6, setResult6] = useState("");
    const [result7, setResult7] = useState("");
    const [result8, setResult8] = useState("");
    const [result9, setResult9] = useState("");
    const onSubmit = async (data) => {
        // console.log(data)

        const Q2 = await Algorithm(data);

        data.time = Q2.T;
        data.HeatDissipated = Q2.Q;
        data.Gri = Q2.Gri;
        data.Pri = Q2.Pri;
        data.Nui = Q2.Nui;
        data.hi = Q2.hi;
        data.Gro = Q2.Gro;
        data.Pro = Q2.Pro;
        data.ho = Q2.ho;
        // data.material = "Floor Heater Material"
        setResult(JSON.stringify(data.time));
        setResult1(JSON.stringify(data.HeatDissipated));
        setResult2(JSON.stringify(data.Gri));
        setResult3(JSON.stringify(data.Pri));
        setResult4(JSON.stringify(data.Nui));
        setResult5(JSON.stringify(data.hi));
        setResult6(JSON.stringify(data.Gro));
        setResult7(JSON.stringify(data.Pro));
        setResult8(JSON.stringify(data.Nuo));
        setResult9(JSON.stringify(data.ho));
    }


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

            <form onSubmit={handleSubmit(onSubmit)}>

                <label>
                    Temperature Units
                    <select {...register("TemperatureUnits")}>
                        <option value="">Temperature Units...</option>
                        <option value="c">Celsius(C)</option>
                        {/* <option value="k">Kelvin(K)</option> */}
                        {/* <option value="f">Fahrenheit (F)</option> */}
                    </select>
                </label>
                <label>
                    Desirable temperature
                    <input type="number" step=".1" defaultValue={25} {...register("desirableTemp")} placeholder="Desirable Temperature" />
                </label>
                <label>
                    Environmental temperature
                    <input type="number" step=".1"{...register("environTemp")} placeholder="Environmental Temperature" />
                </label>

                <label>
                    Layer 1 Material
                    <select {...register("layer1")}>
                        <option value="">Layer 1 Material...</option>
                        <option value="concrete">Concrete</option>
                        <option value="none">None</option>

                    </select>
                </label>

                <label>
                    Layer 1 Thickness in MM
                    <input {...register("layer1Thickness")} placeholder="layer1 Thickness" />
                </label>

                <label>
                    Layer 2 Material
                    <select {...register("layer2")}>
                        <option value="">Layer 2 Material...</option>
                        <option value="concrete">Concrete</option>
                        <option value="wood">Wood</option>
                        <option value="tiles">Tiles</option>
                        <option value="pavers">Pavers</option>
                    </select>
                </label>
                <label>
                    Layer 2 Thickness in MM
                    <input {...register("layer2Thickness")} placeholder="layer2 Thickness" />
                </label>
                <div>

                    <p>Time Takes to Heat : {result}</p>
                    <p>Heat dissipated by conduction and convection: {result1}</p>
                    <p>Gri: {result2}</p>
                    <p>Pri: {result3}</p>
                    <p>Nui: {result4}</p>
                    <p>hi: {result5}</p>
                    <p>Gro: {result6}</p>
                    <p>Pro: {result7}</p>
                    <p>Nuo: {result8}</p>
                    <p>ho: {result9}</p>
                </div>
                <div>

                    {/* <p>Heat dissipated by conduction and convection: {result1}</p> */}
                </div>
                <Button type="submit" variant="contained" primary >
                    Submit
                </Button>
            </form>


        </Paper>
    );
};
export default withStyles(style)(Content);
