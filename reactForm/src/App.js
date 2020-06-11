import React from "react";
import { Route } from "react-router-dom";
import SignUpForm from "./Components/SignUpForm";
import Navigation from "./Components/Navigation";
import Dashboard from "./Components/Dashboard";
import { Container } from "./Styles/Container";

function App() {
  return (
    <Container>
      <Navigation />
      <Route exact path="/" component={SignUpForm} />
      <Route path="/dashboard" component={Dashboard} />
    </Container>
  );
}

export default App;
