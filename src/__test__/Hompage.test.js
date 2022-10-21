import renderer from "react-test-renderer";
import Homepage from "../__mock__/Homepage";

describe("Home Component", () => {
  const tree = renderer.create(<Homepage />).toJSON;
  expect(tree).toMatchSnapshot();
});
