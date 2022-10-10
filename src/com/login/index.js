import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    FormHelperText,
    FormGroup,
    Checkbox,
} from '@mui/material';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import myStore from "../../store/store";
export default function Login() {

    const navigate = useNavigate()
    let [lognname, setLognname] = useState()
    let [lognpass, setLognpass] = useState()
    let Lists = useSelector(store => store.signupdata.users3)
    console.table(Lists);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (logindata) => {

        console.log(logindata)
        let usermlgya = Lists.find((lst) => {
            if (lst.email === logindata.email && lst.Password === logindata.Password) {
                alert('yes')
                myStore.dispatch({
                    type: 'LOGINdata',
                    payload:logindata
                })
                return true
            } else {
                alert('no')
            }

        })
        if (usermlgya) {
            navigate('/body')
        }
        console.log(logindata);
    }


    return (
        <Card sx={{ width: "500px", alignItems: 'center', marginLeft: "30%", boxShadow: "none", marginTop: "30px", border: "none" }}>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "40%",
                    marginLeft: "30%", marginTop: "30px"


                }}>
                    <TextField
                        id="outlined-basic"
                        label="E-mail"
                        variant="outlined"
                        name="email"
                        {...register("email", { required: "E-mail  is required." })}
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type='password'
                        name="Password"
                        {...register("Password", { required: "Password is required." })}
                        error={Boolean(errors.Password)}
                        helperText={errors.Password?.message}
                    />

                    <div className="clearfix"></div>
                    <Button variant="contained" color="primary" type="submit" className="btns">
                        create new account
                    </Button>
                </div>
            </form>

        </Card>

    )
}