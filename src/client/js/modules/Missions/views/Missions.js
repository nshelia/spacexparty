import React from "react";
import { MissionsAll } from "modules/MissionsAll";
import { Helmet } from 'react-helmet'

export default function Missions() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Missions</title>
      </Helmet>
      <MissionsAll />
    </React.Fragment>
  );
}
