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
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function TasksList({ tasks, setActive }) {
  const classes = useStyles()
  const [checked, setChecked] = React.useState([1])
  const tasksByDate = Object.values(tasks).map((task) => task)
  const tasksList = tasksByDate.flat()

  function handleDoTaks(taskId) {
    axios
      .post('http://locahost:4000/dotask', { taskId: taskId })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
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
              <Checkbox
                edge="end"
                onClick={() => handleDoTaks(task._id)}
                onChange={handleToggle(task)}
                checked={checked.indexOf(task) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        )
      })}
    </List>
  )
}
