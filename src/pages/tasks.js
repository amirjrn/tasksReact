import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Chart from './../components/chart'
import List from './../components/list'
import Menu from './../components/menu'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
const Tasks = () => {
  const [tasks, setTasks] = useState([])
  const [active, setActive] = useState()
  const [error, setError] = useState()
  useEffect(() => {
    axios
      .get('http://localhost:4000/tasks', { withCredentials: true })
      .then((res) => {
        setTasks(res.data.tasks)
      })
      .catch((err) => setError(err))
  }, [])
  return !error ? (
    <div style={{ padding: 40 }}>
      <Grid container spacing={1}>
        <Grid item xs alignItems="center">
          <Menu />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs alignItems="center">
          <List tasks={tasks} setActive={setActive} setTasks={setTasks} />
        </Grid>
        <Grid item xs>
          <Chart tasks={tasks} />
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ padding: 40 }}>
        <Grid item xs alignItems="center">
          {active ? <Box>{`توضحیات تسک : ${active}`}</Box> : null}
        </Grid>
      </Grid>
    </div>
  ) : (
    <div>something went wrong</div>
  )
}
export default Tasks
