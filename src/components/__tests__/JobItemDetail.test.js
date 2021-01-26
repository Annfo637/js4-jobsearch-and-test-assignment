import React from "react";
import { mount } from "enzyme";
import JobItemDetail from "../JobItemDetail";

describe("JobItemDetail renders correctly", () => {
  it("<h2> element has class 'title'", () => {
    const wrapper = mount(<JobItemDetail />);
    expect(wrapper.find("h2").hasClass("title")).toBe(true);
  });
  it("<strong> element has classes 'location' and 'type'", () => {
    const wrapper = mount(<JobItemDetail />);
    expect(wrapper.find("strong").hasClass("location")).toBe(true);
    expect(wrapper.find("strong").hasClass("type")).toBe(true);
  });
  it("<a> with class company_url has href attribute (initial state undefined)", () => {
    const wrapper = mount(<JobItemDetail />);
    expect(wrapper.find("a.company_url").prop("href")).toBeUndefined();
  });
});
