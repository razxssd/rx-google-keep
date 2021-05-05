import React from 'react';
import { Layout } from "./layout";
import { Body } from "./body";
import { Store } from "../store/Store";
import { Provider as ReduxProvider } from "react-redux";

export const App = () => {
  return (<ReduxProvider store={Store}>
    <Layout>
      <Body/>
    </Layout>
  </ReduxProvider>);
};

export default App;
