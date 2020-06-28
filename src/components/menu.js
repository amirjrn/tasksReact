import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ExitIcon from '@material-ui/icons/ExitToApp'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function Menu() {
  const classes = useStyles()
  const history = useHistory()
  const Logout = () => {
    axios
      .post('http://localhost:4000/logout', {}, { withCredentials: true })
      .then((res) => history.push('/login'))
      .catch((err) => console.log(err))
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Tasks
          </Typography>
          <Button onClick={Logout} color="inherit">
            <ExitIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
