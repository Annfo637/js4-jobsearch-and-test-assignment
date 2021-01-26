import React from "react";
import { mount, shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import JobItem from "../JobItem";

describe("JobItem renders correct element for API values", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <JobItem
          key={2}
          id={"api-id"}
          type={"api-type"}
          title={"api-title"}
          company_url={"api-company_url"}
          description={"api-description"}
          company_logo={"api-company_logo"}
        />
      </BrowserRouter>
    );
  });
  it("contains prop type in <strong> element", () => {
    expect(wrapper.find("strong.type").text()).toContain("api-type");
  });
  it("contains prop title in <h2> element", () => {
    expect(wrapper.find("h2.title").text()).toContain("api-title");
  });
  it("contains prop company_url in <a> element", () => {
    expect(wrapper.find("a.company_url").text()).toContain("api-company_url");
  });
  it("contains prop description in <div> element", () => {
    expect(wrapper.find("div.description").text()).toContain("api-description");
  });
});

describe("JobItem <a> with class company_url has href attribute", () => {
  const wrapper = shallow(
    <JobItem
      key={2}
      id={"api-id"}
      type={"api-type"}
      title={"api-title"}
      company_url={"api-company_url"}
      description={"api-description"}
      company_logo={"api-company_logo"}
    />
  );
  it("has attribute href", () => {
    expect(wrapper.find("a.company_url").prop("href")).toBeTruthy();
  });
});

describe("JobItem links to detail page correctly", () => {
  const wrapper = mount(
    <BrowserRouter>
      <JobItem id={"api-id"} description={"api-description"} />
    </BrowserRouter>
  );
  it("renders with correct id in link 'Read more'", () => {
    expect(wrapper.find("Link").prop("to")).toBe("/jobs/api-id");
  });
});
