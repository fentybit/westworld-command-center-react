import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList'
import PropTypes from 'prop-types'

const Area = ({ value, name, limit, hosts, selectHost, selectedHostId }) => {
  return (
    <div div className='area' id={value} >
      <h3 className='labels'>{name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h3>

      <HostList
        hosts={hosts}
        selectHost={selectHost}
        selectedHostId={selectedHostId}
        limit={limit}
      />
    </div>
  )
}

Area.propTypes = {
  hosts: function (props, propName, componentName) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
