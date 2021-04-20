import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area';

const WestworldMap = ({ areas, hosts, selectedHostId, selectHost }) => {
  const renderHosts = (value) => hosts.filter(host => host.area === value)

  const renderAreas = () => {
    return areas.map(area => <Area
      key={area.id}
      value={area.name}
      area={area}
      name={area.name}
      limit={area.limit}
      hosts={renderHosts(area.name)}
      selectedHostId={selectedHostId}
      selectHost={selectHost}
    />)
  }

  return (
    <Segment id="map" >
      {renderAreas()}
    </Segment>
  )
}

export default WestworldMap