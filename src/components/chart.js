import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import { Chart, BarSeries, Title, ArgumentAxis, ValueAxis } from '@devexpress/dx-react-chart-material-ui'

import { Animation } from '@devexpress/dx-react-chart'

export default class Chart extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Paper>
        <Chart data={this.props.tasks}>
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries valueField="number" argumentField="date" />
          <Title text="تسک های روزانه" />
          <Animation />
        </Chart>
      </Paper>
    )
  }
}
