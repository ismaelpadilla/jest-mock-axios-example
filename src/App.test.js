import React from "react";
import axios from "axios";
//npm i --save-dev enzyme enzyme-adapter-react-16
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";
import Posts from "./components/Posts/Posts";

// Mock axios
jest.mock("axios");

// Configure Enzyme
configure({ adapter: new Adapter() });

describe("<App/> tests", () => {
  it("renders without crashing", () => {
    axios.get.mockResolvedValue({ data: [] });
    const wrapper = shallow(<App />);
  });

  it("renders posts correctly", async () => {
    //// arrange
    // mock response from axios
    const mockedPosts = [
      { id: 1, title: "title 1", body: "body 1" },
      { id: 2, title: "title 2", body: "body 2" },
      { id: 3, title: "title 3", body: "body 3" },
      { id: 4, title: "title 4", body: "body 4" },
      { id: 5, title: "title 5", body: "body 5" }
    ];
    const mockedResponse = { data: mockedPosts };
    axios.get.mockResolvedValue(mockedResponse);

    //// act
    // mount app
    const wrapper = mount(<App />);

    await flushPromises();

    // Update our component
    wrapper.update();

    //// assert
    // Posts component
    const posts = wrapper.find(Posts);

    // Find title and body of first post
    // (more verbose than necessary)
    const firstPost = posts.find(".post").first();

    const firstTitle = firstPost.find("h3").text();
    const firstBody = firstPost.find("p").text();

    expect(firstTitle).toBe("title 1");
    expect(firstBody).toBe("body 1");

    wrapper.unmount();
  });
});

// helper function
function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}
