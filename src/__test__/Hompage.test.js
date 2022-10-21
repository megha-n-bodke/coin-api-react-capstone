import renderer from "react-test-renderer";
import Homepage from "../__mock__/Homepage";

describe("Home", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Homepage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
