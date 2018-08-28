import React from 'react'
import { connect } from "react-redux";
import { moduleName } from '../config'
import { fetchNextLaunchAction } from 'components/NextLaunch/actions'
import PropTypes from 'prop-types'

class NextLaunch extends React.Component {
    componentDidMount() {
        this.props.fetchNextLaunchAction()
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

NextLaunch.propTypes = {
    fetchNextLaunchAction: PropTypes.func.isRequired
}

const mapStateToProps = (state) => state[moduleName]


const mapDispatchToProps = {
    fetchNextLaunchAction
}

export default connect(mapStateToProps,mapDispatchToProps)(NextLaunch)
