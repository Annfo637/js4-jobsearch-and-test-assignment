import React from "react";
import { mount } from "enzyme";
import SearchContextProvider from "../../contexts/SearchContextProvider";
import { BrowserRouter } from "react-router-dom";

import JobList from "../JobList";

describe("JobItem renders correctly", () => {
  it("renders 'No jobs found' if JobList is empty (initial state)", () => {
    const wrapper = mount(
      <SearchContextProvider>
        <BrowserRouter>
          <JobList />
        </BrowserRouter>
      </SearchContextProvider>
    );
    expect(wrapper.find("h4").text()).toBe("No jobs found");
  });

  it("has link back to searchpage (startpage)", () => {
    const wrapper = mount(
      <SearchContextProvider>
        <BrowserRouter>
          <JobList />
        </BrowserRouter>
      </SearchContextProvider>
    );
    expect(wrapper.find("Link").prop("to")).toBe("/");
  });
});
