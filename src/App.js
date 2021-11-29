import React from "react";
import { useSelector } from "react-redux";

import Navbar from "./components/layout/Navbar";
import Container from "./components/views/Container";
import ItemList from "./components/layout/ItemList";
import Title from "./components/views/Title";
import Total from "./components/views/Total";
import Button from "./components/views/Button";
import Empty from "./components/views/Empty";
import Loading from "./components/views/Loading";

import "./App.css";

function App() {
  const { isEmpty, loading } = useSelector((state) => state);

  return (
    <React.Fragment>
      {!loading && <Navbar />}
      {loading && <Loading />}
      <Container>
        {!loading && <Title />}
        {isEmpty && <Empty />}
        {!isEmpty && <ItemList />}
        {!isEmpty && !loading && <Total />}
        {!isEmpty && !loading && <Button />}
      </Container>
    </React.Fragment>
  );
}

export default App;
