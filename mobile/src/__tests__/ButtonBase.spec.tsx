import 'react-native';
import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import { ButtonBase } from '@src/components/UI';

describe('Button Component', () => {
  it('should be able display the passed-in label', () => {
    const { queryByText } = render(<ButtonBase labelOfButtonBase='Salvar' onPress={() => { }} />)

    expect(queryByText('Salvar')).not.toBeNull();
  })
  it('should be able call the passed-in function', () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(
      <ButtonBase
        labelOfButtonBase='Salvar'
        onPress={handleSubmit}
        testID={'ButtonBase'}
      />
    )
    fireEvent.press(getByTestId('ButtonBase'));
    expect(handleSubmit).toHaveBeenCalled();
  })
})
