import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import { Chart, BarSeries, Title, ArgumentAxis, ValueAxis } from '@devexpress/dx-react-chart-material-ui'

import { Animation } from '@devexpress/dx-react-chart'
export default ({ tasks }) => {
  const data = []
  for (let [key, value] of Object.entries(tasks)) {
    const done_tasks = value.filter((task) => task._done === true)
    data.push({ date: key, number: done_tasks.length })
  }
  return (
    <Paper>
      <Chart data={data}>
        <ArgumentAxis />
        <ValueAxis max={7} />

        <BarSeries valueField="number" argumentField="date" />
        <Title text="گزارش تسک های انجام شده" />
        <Animation />
      </Chart>
    </Paper>
  )
}
