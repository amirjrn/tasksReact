import react, { useEffect } from 'react'
import axios from 'axios'
import List from './../components/list'
const tasks = (tasks) => {
  useEffect(() => {
    axios.get('http://localhost:4000/tasks')
  }, [])
  const data = []
  for (let [key, value] of Object.entries(tasks)) {
    data.push({ date: key, number: value.length })
  }
  return <List tasks={data} />
}

export default tasks
