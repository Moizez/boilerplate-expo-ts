import styled from 'styled-components/native';

import {
  Text as TextPaper,
  Title as TitlePaper,
  Badge as BadgePaper,
  Button as ButtonPaper,
  TextInput as TextInputPaper,
  ProgressBar as ProgressBarPaper,
  ActivityIndicator as ActivityIndicatorPaper,
} from 'react-native-paper';

import { LinearGradient } from 'expo-linear-gradient';

export const Spacer = styled.View`
  width: 100%;
  height: ${(props) => props.size || '10px'};
`;

export const Container = styled.View`
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
  background: ${(props) =>
    props.theme[props.background] || props.background || 'transparent'};
`;

export const Title = styled(TitlePaper)`
  color: ${(props) => props.theme[props.color || 'dark']};
  font-size: ${(props) => (props.small ? '22px' : props.big ? '40px' : '30px')};
  padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
  letter-spacing: -2px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  line-height: ${(props) =>
    props.small ? '22px' : props.big ? '50px' : '30px'};
  text-align: ${(props) => props.align || 'left'};
  transform: ${(props) => (props.scale ? `scale(${props.scale})` : '')};
  font-family: 'Ubuntu_700Bold';
`;

export const Text = styled(TextPaper).attrs({})`
  color: ${(props) => props.theme[props.color || 'muted']};
  font-size: ${(props) => (props.small ? '13px' : '17px')};
  line-height: ${(props) => (props.small ? '13px' : '20px')};
  font-family: ${(props) =>
    props.bold ? 'Ubuntu_700Bold' : 'Ubuntu_300Light'};
  margin: ${(props) => props.spacing || 0};
  padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  opacity: ${(props) => props.opacity || 0.7};
  text-align: ${(props) => props.align || 'left'};
  text-decoration: ${(props) => props.decoration || 'none'};
`;

export const Button = styled(ButtonPaper).attrs((props) => ({
  color:
    props.theme[props.background] || props.background || props.theme.primary,
  width: props.block ? '100%' : 'auto',
  labelStyle: {
    color: props.theme[props.textColor || 'light'],
    letterSpacing: 0,
    fontFamily: 'Ubuntu_300Light',
  },
  uppercase: false,
  mode: props.mode || 'contained',
}))``;

export const TextInput = styled(TextInputPaper).attrs(({ theme }) => ({
  mode: 'outlined',
  outlineColor: theme.muted,
  underlineColor: theme.muted,
  selectionColor: theme.muted,
  theme: {
    colors: {
      text: theme.light,
      primary: theme.light,
      background: theme.dark,
      placeholder: theme.muted,
    },
  },
}))`
  height: 45px;
  width: 100%;
  font-size: 15px;
`;
