import React from 'react'

export default class NextLaunch extends React.Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div className="box next-launch">
				<span>Next rocket launch is in:</span>
				<div className="next-launch__countdown">
				</div>
			</div>
		)
	}
}