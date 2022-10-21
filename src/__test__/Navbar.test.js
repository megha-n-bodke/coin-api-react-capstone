import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer, { create } from "react-test-renderer";
import Navbar from "../components/Navbar/Navbar";

it("Navbar renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
