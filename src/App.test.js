import React from "react";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("test if App renders", () => {
  const wrapper = mount(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  it("renders wrapping div with class app-container", () => {
    expect(wrapper.find("div.app-container")).toBeTruthy();
  });
});
