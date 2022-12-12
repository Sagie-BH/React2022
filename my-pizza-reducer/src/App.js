import './App.css';
import { useReducer } from 'react' 
import { pizzaTypes } from './pizzas';
import { Container, TextField, CssBaseline, Typography, Grid, RadioGroup, Radio, FormControlLabel, Button } from '@mui/material'
import { Formik } from "formik";


const validate = (state) => {
  const validName = state.name.trim().length > 1;
  const validPhone =  /^\d\d\d\d\d\d\d\d\d\d$/.test(state.phone);
  return {
    ...state,
    validName,
    validPhone,
    valid: validName && validPhone
  }
}


const App = () => {

  // const {register, errors, handleSubmit, control, getValues, watch } 

  const [state, stateReducer] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'setName':
          return validate({
            ...state,
            ...action.payload
          })
        case 'setPhone':
          return validate({
            ...state,
            ...action.payload
          })
        case 'setPizza':
          return validate({
            ...state,
            ...action.payload
          })
          default:
          return state
      }
    },
    validate({
      name: '',
      phone: '',
      pizza: pizzaTypes.find(({name}) => name === 'Alfredo')
    })
  )


  return (
    <Container>
      <Typography>React Forms</Typography>
      <CssBaseline />
        <TextField
          label="Your name"
          error={!state.validName}
          value={state.name}
          onChange={(evt) => {
            stateReducer({
              type: 'setName',
              payload: { name: evt.target.value }
            })
          }}
        />
        <TextField
        label="Your phone number"
        error={!state.validPhone}
        onChange={(evt) => {
          stateReducer({
            type: 'setPhone',
            payload: { phone: evt.target.value }
          })
        }}
      />
      <Grid>
        <Grid xs={3}>
          <RadioGroup
            aria-label="Pizza type"
            name="pizza"
            value={state.pizza.name}
            onChange={(evt) =>
              stateReducer({
                type: "setPizza",
                payload: {
                  pizza: pizzaTypes.find(
                    ({ name }) => name === evt.target.value
                  ),
                },
              })
            }
          >
            {pizzaTypes.map((pizza) => (
              <FormControlLabel
                value={pizza.name}
                control={<Radio />}
                label={pizza.name}
                key={pizza.name}
              />
            ))}
          </RadioGroup>
        </Grid>

      </Grid>
      <Button variant="contained" disabled={!state.valid}>
        Where's the Pizzaaaaaahhhh!!!!
      </Button>
      <div>{JSON.stringify(state)}</div>
    </Container>
  );
}

export default App;
