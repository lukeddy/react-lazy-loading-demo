import React, { Fragment, Component, Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import AngryJoe from "./components/AngryJoe";
import LoadingIndicator from "./components/LoadingIndicator";
import ErrorBoundary from "./components/ErrorBoundary";
import { camelCase } from "lodash-es";

class App extends Component {
  state = {
    selectedCardType: ""
  };

  render() {
    return (
      <Fragment>
        <div className="app-bar">
          <h1 className="app-bar-title">MARVEL CARD SELECTOR!</h1>
        </div>
        <section className="app-section container">
          {this.renderCardSelector()}

          <div className="top-margin-small">
            <ErrorBoundary>
              <Suspense fallback={<LoadingIndicator />}>
                {this.renderSelectedCardComponent(this.state.selectedCardType)}
              </Suspense>
            </ErrorBoundary>
          </div>
        </section>
      </Fragment>
    );
  }

  renderCardSelector() {
    return (
      <div className="form-group top-margin-small">
        <label className="card-selector-label">Select Card Style</label>
        <select
          className="card-selector form-control"
          onChange={e => this.setState({ selectedCardType: e.target.value })}
        >
          <option />
          <option value="CardA">Captain America: The Winter Soldier</option>
          <option value="CardB">Guardians of the Galaxy</option>
        </select>
      </div>
    );
  }

  renderSelectedCardComponent(selectedCardType) {
    if (!selectedCardType) return <AngryJoe text="just pick something" />;

    const Component = this.loadComponent(selectedCardType);

    return Component;
  }

  loadComponent(cardType) {
    const Card = lazy(() =>
      import(`./components/cards/${camelCase(cardType)}/${cardType}`)
    );
    return <Card />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
