import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters';

class App extends Component {
  state = {
    hosts: [],
    areas: [],
    selectedHostId: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/hosts')
      .then(resp => resp.json())
      .then(fetchedHosts => this.setState({ hosts: fetchedHosts }))

    fetch('http://localhost:3000/areas')
      .then(resp => resp.json())
      .then(fetchedAreas => this.setState({ areas: fetchedAreas }))
  }

  activateAll = (activated) => {
    this.setState({
      hosts: this.state.hosts.map(host => {
        host.active = activated
        return host
      })
    })
  }

  activateHost = (id) => {
    this.setState(state => {
      state.host.forEach(host => {
        if (host.id === id) {
          host.active = !host.active
        }
      })
      return { hosts: state.hosts }
    })
  }

  selectHost = (selectedHostId) => { this.setState({ selectedHostId }) }

  renderActiveHosts = () => this.state.hosts.filter(host => host.active)

  setArea = (id, areaName) => {
    this.setState(state => {
      state.hosts.forEach(host => {
        if (host.id === id) {
          host.area = areaName
        }
      })
      return { hosts: state.hosts }
    })
  }

  render() {
    return (
      <Segment id='app'>
        <WestworldMap
          areas={this.state.areas}
          hosts={this.renderActiveHosts()}
          selectedHostId={this.state.selectedHostId}
          selectHost={this.selectHost}
        />

        <Headquarters
          areas={this.state.areas}
          hosts={this.state.hosts}
          activateHost={this.activateHost}
          selectedHostId={this.selectedHostId}
          selectHost={this.selectHost}
          setArea={this.setArea}
          activateAll={this.activateAll}
        />
      </Segment>
    )
  }
}

export default App;