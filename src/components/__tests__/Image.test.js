import React from "react";
import { mount } from "enzyme";
import Image from "../Image";

describe("Image renders correctly", () => {
  const wrapper = mount(<Image imageURL="api-company_logo" />);

  it("renders API company_logo value in attribute src", () => {
    expect(wrapper.find("img").prop("src")).toBe("api-company_logo");
  });
  it("<img> element has attribute alt", () => {
    expect(wrapper.find("img").prop("alt")).toBeTruthy();
  });
});
