import React from 'react';
import TextField from '@mui/material/TextField';
import myStore from '../../store/store';
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
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
const App = () => {
  let navigate = useNavigate()

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  function onSubmit(user) {
    console.log(user)
    myStore.dispatch({
      type: "Signupdata",
      payload: user

    })
    navigate('/logn')
  }

  return (
    <Card sx={{ width: "500px", alignItems: 'center', marginLeft: "30%", boxShadow: "none", marginTop: "30px", border: "none" }}>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          marginLeft: "30%", marginTop: "30px",
          padding:"15px"


        }}>
          <TextField
            id="standard-basic"
            name="Name"
            label="Name"
            variant="outlined"
            {...register("Name", { required: "Name is required." })}
            error={Boolean(errors.Name)}
            helperText={errors.Name?.message}
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
            label="Address"
            variant="outlined"

            name="Address"
            {...register("Address", { required: " Address is required." })}
            error={Boolean(errors.Address)}
            helperText={errors.Address?.message}
          />
          {/* Radio button */}
          <FormControl error={Boolean(errors.gender)} >
            <FormLabel component="legend"> Choose Your Gender </FormLabel>
            <RadioGroup row aria-label="gender" name="gender">
              <FormControlLabel
                value="female"
                control={
                  <Radio {...register("gender", { required: "Choose your gender" })} />
                }
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={
                  <Radio {...register("gender", { required: "Choose your gender" })} />
                }
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={
                  <Radio {...register("gender", { required: "Choose your gender" })} />
                }
                label="Other"
              />

            </RadioGroup>
            <FormHelperText style={{ color: '#d32f2f' }}>{errors.gender?.message}</FormHelperText>
          </FormControl>
          <div className="clearfix"></div>
          {/* Check box */}
          <FormGroup
            error={Boolean(errors.tnc)}
            style={{ display: "block", marginTop: "17px" }}
          >
            <FormControlLabel
              control={
                <Checkbox name="tnc" {...register("tnc", { required: "please aggre our terms and condtions" })} />
              }
              label="I aggree all terms and conditions"
            />
          </FormGroup>
          <FormHelperText style={{ color: '#d32f2f' }}>{errors.tnc?.message}</FormHelperText>
          <div className="clearfix"></div>
          <Button variant="contained" color="primary" type="submit" className="btns">
            create new account
          </Button>
        </div>
      </form>

    </Card>

  )
}
export default App