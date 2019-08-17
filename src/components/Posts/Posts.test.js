import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Posts from "./Posts";

// Configure Enzyme
configure({ adapter: new Adapter() });

describe("<Posts/> tests", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Posts />);
  });

  it("renders posts correctly", () => {
    //// arrange
    // mount posts
    const postsArray = [
      { id: 1, title: "title 1", body: "body 1" },
      { id: 2, title: "title 2", body: "body 2" },
      { id: 3, title: "title 3", body: "body 3" }
    ];

    const wrapper = mount(<Posts posts={postsArray} />);

    //// assert
    const posts = wrapper.find(".post");

    expect(posts.length).toBe(3);
    expect(
      posts
        .first()
        .find("h3")
        .text()
    ).toBe("title 1");
    expect(
      posts
        .first()
        .find("p")
        .text()
    ).toBe("body 1");

    wrapper.unmount();
  });
});
