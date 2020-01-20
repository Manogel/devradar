import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  flex: 1;
`;

export const SearchForm = styled.KeyboardAvoidingView`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  z-index: 5;
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  autoCapitalize: 'words',
  autoCorrect: false,
})`
  flex: 1;
  height: 50px;
  background-color: #fff;
  color: #333;
  border-radius: 25px;
  padding: 0 20px;
  font-size: 16px;
  shadow-color: #fff;
  shadow-opacity: 0.2;
  shadow-offset: {
    width: 4px;
    height: 4px;
  }
  elevation: 2;
`;
export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  background-color: #8e4dff;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;
