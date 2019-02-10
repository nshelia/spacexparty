import React from "react";
import { LaunchesAll } from "modules/LaunchesAll";
import { Helmet } from 'react-helmet'

export default function Launches() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Launches</title>
      </Helmet>
      <LaunchesAll />
    </React.Fragment>
  );
}
