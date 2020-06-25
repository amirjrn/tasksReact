import React from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Checkbox from '@material-ui/core/Checkbox'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
  root: {
    left: '50%',
    transform: 'translate(-50%)',
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function TasksList({ tasks, setActive, setTasks }) {
  const classes = useStyles()
  const [checked, setChecked] = React.useState([1])
  const tasksByDate = Object.values(tasks).map((task) => task)
  const tasksList = tasksByDate.flat().filter((task) => task._done === false)

  const handleDoTask = (taskId) => () => {
    axios
      .post('http://localhost:4000/dotask', { taskId: taskId }, { withCredentials: true })
      .then((res) => {
        setTasks(res.data.tasks)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <List dense className={classes.root}>
      {tasksList.map((task) => {
        const labelId = `checkbox-list-secondary-label-${task}`
        const desc = task._desc
        return (
          <ListItem key={task._id} button>
            <ListItemText onClick={() => setActive(desc)} id={labelId} primary={`عنوان تسک :  ${task._name}`} />
            <ListItemSecondaryAction>
              <Checkbox edge="end" onClick={handleDoTask(task._id)} checked={checked.indexOf(task) !== -1} inputProps={{ 'aria-labelledby': labelId }} />
            </ListItemSecondaryAction>
          </ListItem>
        )
      })}
    </List>
  )
}
