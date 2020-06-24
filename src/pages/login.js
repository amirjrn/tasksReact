import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import useTempState from './../hooks/useTempState'
import useInput from '../hooks/useInput'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function SignIn() {
  const history = useHistory()
  const classes = useStyles()
  const [name, handlenameChange] = useInput()
  const [pass, handlepassChange] = useInput()
  const [errors, setError] = useTempState({ timeout: 2500, initialState: [] })
  function handleSubmit() {
    console.log(name, pass)
    axios
      .post('http://localhost:4000/login', { username: name, password: pass }, { withCredentials: true })
      .then((response) => {
        history.push('/tasks')
      })
      .catch((error) => {
        setError(error.response.data.msg)
      })
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          ورود
        </Typography>
        {errors.map((err) => (
          <Alert severity="error">{err}</Alert>
        ))}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handlenameChange}
            id="username"
            label="نام کاربری"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="رمز"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlepassChange}
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="مرا به  خاطر بسپار" />
          <Button onClick={handleSubmit} fullWidth variant="contained" color="primary" className={classes.submit}>
            ورود
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/" variant="body2">
                ثبت نام
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2"></Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  )
}
