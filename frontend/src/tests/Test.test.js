import { queryByAttribute, render, screen } from '@testing-library/react';
import Test from '../Test';
 
const getById = queryByAttribute.bind(null, 'id');

describe("<Test />", () => {
 
  test('render the title of an application', () => {
    const dom = render(<Test />);
    
    const titleValue = getById(dom.container, 'title')
    expect(titleValue.textContent).toBe('Test Application')
  });
 
});