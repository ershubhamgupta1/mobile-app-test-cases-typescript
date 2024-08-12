import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './index';

describe('Button Component', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Button title="Click Me" onPress={() => {}} />);
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('should handle press events', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button title="Click Me" onPress={onPressMock} />);
    
    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when the disabled prop is true', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button title="Click Me" onPress={onPressMock} disabled/>);
    
    // Find the TouchableOpacity
    const touchableOpacity = getByText('Click Me').parent as any;
    console.log('touchableOpacity=====', touchableOpacity.props);

    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).toHaveBeenCalledTimes(0);  });
});
