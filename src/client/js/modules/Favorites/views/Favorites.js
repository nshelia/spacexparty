import React from "react";
import { BoxBlockHeader,BoxBlockHeaderText } from "shared/styled/Box";


class Favorites extends React.Component {
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
