import React from "react";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";

import SearchInput from "../SearchInput";
import SearchContextProvider from "../../contexts/SearchContextProvider";

describe("SearchInput renders correctly", () => {
  it("renders a button with text Search", () => {
    const wrapper = mount(
      <BrowserRouter>
        <SearchInput />
      </BrowserRouter>
    );
    expect(wrapper.find("button").text()).toBe("Search");
  });
  it("searchString with one word is correct", () => {
    const wrapper = mount(
      <SearchContextProvider>
        <BrowserRouter>
          <SearchInput />
        </BrowserRouter>
      </SearchContextProvider>
    );
    wrapper.find("input").simulate("change", { target: { value: "test" } });
    expect(wrapper.find("input").prop("value")).toBe("test");
  });
  it("searchString with multiple words is correct", () => {
    const wrapper = mount(
      <SearchContextProvider>
        <BrowserRouter>
          <SearchInput />
        </BrowserRouter>
      </SearchContextProvider>
    );
    wrapper
      .find("input")
      .simulate("change", { target: { value: "test more" } });
    expect(wrapper.find("input").prop("value")).toBe("test+more");
  });
});
