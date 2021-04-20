import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'

const Details = ({ hosts, activateHost, selectedHost, areas, setArea, addLog }) => {
  const renderHostInfo = () => {
    if (!!selectedHost) {
      return <HostInfo
        hosts={hosts}
        selectedHost={selectedHost}
        areas={areas}
        activateHost={activateHost}
        setArea={setArea}
        addLog={addLog}
      />
    } else {
      return <Image
        size='medium'
        src={Images.westworldLogo}
      />
    }
  }

  return (
    <Segment id="details" className="HQComps">
      {renderHostInfo()}
    </Segment>
  )
}

export default Details