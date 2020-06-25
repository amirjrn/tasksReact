import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Chart from './../components/chart'
import List from './../components/list'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
const Tasks = () => {
  const [tasks, setTasks] = useState([])
  const [active, setActive] = useState()
  useEffect(() => {
    axios.get('http://localhost:4000/tasks', { withCredentials: true }).then((res) => {
      // noramalize the data so that List component can work with it
      setTasks(res.data.tasks)
    })
  }, [])
  return (
    <div style={{ padding: 40 }}>
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
  )
}
export default Tasks
