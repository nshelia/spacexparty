import React from 'react'
import _ from 'lodash'

export default (props) => _.range(0,props.count).map((index) => <div key={index} className="fade-ready launch launch-placeholder" style={{ boxShadow: `0px 3px 0px rgba(${_.random(5,45)},39,43)` }}>
  <div className="launch-image launch-placeholder-image" style={{ background: `rgba(${_.random(5,45)},39,43)` }}>
  </div>
  <div className="launch-details launch-placeholder-details">
    <div className="launch-placeholder-row"/>
    <div className="launch-placeholder-row"/>
  </div>
</div>)
