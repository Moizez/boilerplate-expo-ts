import styled from 'styled-components/native';

interface ContainerProps {
  background?: string,
  align?: string,
  justify?: string,
  spacing?: string | number
}

import {
  Text as TextPaper,
  Title as TitlePaper,
  Button as ButtonPaper,
  TextInput as TextInputPaper,
  ActivityIndicator as ActivityIndicatorPaper,
} from 'react-native-paper';

import { LinearGradient } from 'expo-linear-gradient';

export const Spacer = styled.View`
  width: 100%;
  height: ${(props) => props.size || '10px'};
`;

export const Container = styled.View<ContainerProps>`
  flex: 1;
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  width: ${(props) => props.width || '100%'};
  max-width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  max-height: ${(props) => props.height || 'auto'};
  padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
  padding-top: ${(props) =>
    props.removePaddingTop ? '0' : props.hasPadding ? '20px' : '0px'};
  padding-bottom: ${(props) =>
    props.removePaddingBottom ? '0' : props.hasPadding ? '20px' : '0px'};
  margin: ${(props) => props.spacing || 0};
  border-radius: ${(props) => (props.radius ? '5px' : '0px')};
  border: ${(props) => props.border || 'none'};
  background: ${(props) => props.background || 'transparent'};
`;

export const Title = styled(TitlePaper)`
  
`;

export const Text = styled(TextPaper).attrs({})`
  
`;

export const Button = styled(ButtonPaper).attrs({})``;

export const TextInput = styled(TextInputPaper).attrs({})``;


