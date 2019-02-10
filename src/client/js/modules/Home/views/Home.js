import React from "react";
import { RecentLaunches } from "modules/RecentLaunches";
import { NextLaunch } from "modules/NextLaunch";
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <NextLaunch />
      <RecentLaunches/>
    </React.Fragment>
  );
}
