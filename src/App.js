import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NetworkErrorBoundary } from "rest-hooks";
//@todo consider moving this to index, but also we can just use the theme hooks (context hooks).
import ThemeContext from "./contexts/ThemeContext";

// Main Pages
import HomeScreen from "./screens/Home/HomeScreen";
import AddressDetailScreen from "./screens/AddressDetail/AddressDetailScreen";
import AirdropClaimScreen from "./screens/AirdropClaim/AirdropClaimScreen";
import Block from "./screens/Block";
import Blocks from "./screens/Blocks";
import Name from "./screens/Name";
import Names from "./screens/Names";

// Tool Pages
import NodeStatus from "./screens/tools/NodeStatus";

import NotFoundScreen from "./screens/Errors/NotFoundScreen";
import PeersScreen from "./screens/Peers/PeersScreen";
import SearchResultsScreen from "./screens/SearchResults/SearchResultsScreen";
import TxDetailScreen from "./screens/TxDetail/TxDetailScreen";
import Changelog from "./screens/Changelog";

import NavbarComponent from "./components/Navbar/NavbarComponent";
import FooterComponent from "./components/Footer/FooterComponent";

import "./App.scss";

function App() {
  return (
    <NetworkErrorBoundary>
      <ThemeContext>
        <div>
          <Router>
            <NavbarComponent />
            <Switch>
              <Route path="/" exact component={HomeScreen} />
              <Route
                path="/address/:hash"
                exact
                component={AddressDetailScreen}
              />
              <Route
                path="/airdropclaim"
                exact
                component={AirdropClaimScreen}
              />
              <Route path="/blocks" exact component={Blocks} />
              <Route path="/block/:height" exact component={Block} />
              <Route path="/names" exact component={Names} />
              <Route path="/name/:name" exact component={Name} />
              <Route path="/peers" exact component={PeersScreen} />
              <Route path="/search" exact component={SearchResultsScreen} />
              <Route path="/status" exact component={NodeStatus} />
              <Route path="/tx/:hash" exact component={TxDetailScreen} />
              <Route path="/changelog" exact component={Changelog} />
              <Route path="*" component={NotFoundScreen} />
            </Switch>
            <FooterComponent />
          </Router>
        </div>
      </ThemeContext>
    </NetworkErrorBoundary>
  );
}

export default App;
