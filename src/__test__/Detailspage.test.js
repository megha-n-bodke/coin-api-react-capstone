import renderer from 'react-test-renderer';
import Detailspage from '../__mock__/Detailspage';

describe('Detailspage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Detailspage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
