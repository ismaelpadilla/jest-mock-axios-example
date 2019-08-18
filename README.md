# jest-mock-axios-example

A simple example illustrating how to use [jest](https://jestjs.io/en/) to mock [axios](https://github.com/axios/axios). Also using [Enzyme](https://airbnb.io/enzyme/) to make it easier to traverse our components. The test that mocks axios can be found in `App.test.js`.

## About this react app

This app simply fetches a some posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com) and displays them in different cards. Can be found [here](https://mock-axios-example.netlify.com/).

## Using jest to mock axios

```
import axios from "axios";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Configure Enzyme
configure({ adapter: new Adapter() });

it("fetches and renders posts correctly", async () => {
    const mockedPosts = [
      { id: 1, title: "title 1", body: "body 1" },
      { id: 2, title: "title 2", body: "body 2" },
      { id: 3, title: "title 3", body: "body 3" },
      { id: 4, title: "title 4", body: "body 4" },
      { id: 5, title: "title 5", body: "body 5" }
    ];
    const mockedResponse = { data: mockedPosts };
    axios.get.mockResolvedValue(mockedResponse);
    
    // mount app
    const wrapper = mount(<App />);

    await flushPromises();
    
    // Update our component
    wrapper.update();
    
    // And so on
```

```
// helper function
function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}
```

## Todo

Improve readme.