import * as React from 'react'
import {default as FigureCard} from './figurecard'
import {default as ImageCard} from './imagecard'
import * as PropTypes from  'prop-types'
// import MapCard from './mapcard'

class Dashboard extends React.Component {
  render () {
    const { dashboard } = this.props
    const { figurecard, imagecard } = dashboard

    const figurecardProps = {
      figurecard
    }
    const imagecardProps = {
      imagecard
    }

    return (
      <div>
        <FigureCard {...figurecardProps} />
        <ImageCard {...imagecardProps} />
      </div>
    )
  }
}

Dashboard.propTypes = {
  dashboard: PropTypes.object
}

module.exports=Dashboard;
