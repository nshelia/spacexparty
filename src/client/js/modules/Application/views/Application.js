import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "modules/Header";
import { hot } from "react-hot-loader";
import { routes } from "routes";
import { BaseCSS, Container, Row, Col } from "styled-bootstrap-grid";
import { createGlobalStyle } from "styled-components";
import { Helmet } from 'react-helmet'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    background: ${(props) => props.theme.black} !important;
    color: ${(props) => props.theme.white} !important;
    overflow-y: scroll !important;
  }
  a {
    color: inherit;
    text-decoration:none;
  }

  .svg-icon--reddit {
    height: 24px;
    width: 30px;
  }
`;

function Application() {
  return (
    <>
      <Helmet>
        <Helmet>
          <title>SpaceX Calendar</title>
          <meta name="description" content="SpaceX rockets launch dates, videos and other great stuff about companys work." />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="SpaceX Calendar" />
          <meta name="og:description" content="SpaceX rockets launch dates, videos and other great stuff about companys work." />
        </Helmet>
      </Helmet>
      <Container>
        <Header />
        <Row>
          <Col col={12}>
            <Switch>
              {routes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                  />
                );
              })}
            </Switch>
          </Col>
        </Row>
        <BaseCSS />
        <GlobalStyles />
      </Container>
    </>

  );
}
export default hot(module)(Application);
