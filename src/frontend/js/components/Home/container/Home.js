import React from 'react'
import { NextLaunch } from 'components/NextLaunch'

export default class Home extends React.Component {
	render() {
		return (
			<div className="d-flex row">
				<div className="col-4">
					<NextLaunch/>
				</div>
				<div className="col-8">
					Recent co
				</div>
			</div>
		)
	}
}