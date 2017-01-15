import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import Chart from     '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressure = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const {lon , lat } = cityData.city.coord

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" /></td>
        <td><Chart data={pressure} color="green" /></td>
        <td><Chart data={humidities} color="black" /></td>
      </tr>
    )
  }
  render () {
    const { weather } = this.props
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Presure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {weather && weather.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps( { weather } ){
  return { weather }
}
export default connect(mapStateToProps)(WeatherList)
