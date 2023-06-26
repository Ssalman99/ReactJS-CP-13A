import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    currentId: countryAndCapitalsList[0].id,
  }

  onChanging = event => {
    this.setState({currentId: event.target.value})
  }

  render() {
    const {currentId} = this.state
    const result = countryAndCapitalsList.find(each => each.id === currentId)
    const {country} = result
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="input-container">
            <select
              className="select-list"
              onChange={this.onChanging}
              value={result.id}
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="pera">is capital of which country?</p>
          </div>
          <h1 className="heading1">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
