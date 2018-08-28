import React from 'react'
import { NextLaunch } from 'components/NextLaunch'
import { Launches } from 'components/Launches'

export default class Home extends React.Component {
	render() {
		return (
			<div className="d-flex row">
				<div className="col-4">
					<NextLaunch/>
				</div>
				<div className="col-8">
					<Launches/>
				</div>
			</div>
		)
	}
}