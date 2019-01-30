import React from "react";
import { BoxBlockHeader,BoxBlockHeaderText,BoxBlockHeaderButton } from "shared/styled/Box";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

class Favorites extends React.Component {
	componentDidUpdate(prevProps, prevState) {
		console.log(prevProps,prevState)
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log(nextState,nextProps)
		return false
	}
  render() {

    return (
    	<BoxBlockHeader>	
	     <BoxBlockHeaderText red>
	            Favorite launches
	      </BoxBlockHeaderText>
    	</BoxBlockHeader>
    );
  }
}

Favorites.propTypes = {

};

export default Favorites;
