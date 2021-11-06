import styled from 'styled-components/native';
import { ContainerProps, SpacerProps, TitleProps, ButtonProps } from './TStyles'
import Constants from 'expo-constants';

import {
	Text as TextPaper,
	Title as TitlePaper,
	Button as ButtonPaper,
	TextInput as TextInputPaper,
	HelperText as HelperTextPaper,
	ActivityIndicator as ActivityIndicatorPaper,
} from 'react-native-paper';

import { LinearGradient } from 'expo-linear-gradient';

export const Spacer = styled.View<SpacerProps>`
  width: 100%;
  height: ${props => `${props.size || 10}px`};
`;

export const Margin = styled.View<SpacerProps>`
  width: 100%;
  height: 10px;
`;

export const Container = styled.View<ContainerProps>`
  flex: 1;
  flex-wrap: ${props => props.wrap || 'nowrap'};
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
  width: ${props => props.width || '100%'};
  max-width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  max-height: ${props => props.maxHeight || 'auto'};
  padding: ${props => (props.hasPadding ? '20px' : '0px')};
  padding-top: ${props => props.removePaddingTop ? '0' : props.hasPadding ? '20px' : '0px'};
  padding-bottom: ${props => props.removePaddingBottom ? '0' : props.hasPadding ? '20px' : '0px'};
  margin: ${props => props.spacing || 0};
  border-radius: ${props => props.radius ? '5px' : '0px'};
  border: ${props => props.border || 'none'};
  background: ${props => `${props.theme[props?.background] || props?.background || 'transparent'}`};
  margin-top: ${() => Constants.statusBarHeight + 'px'};
`;

export const ContainerKeyboardAvoiding = styled.KeyboardAvoidingView<ContainerProps>`
  flex: 1;
  width: ${props => props.width || '100%'};
  padding: ${props => (props.hasPadding ? '20px' : '0px')};
  padding-top: ${props => props.removePaddingTop ? '0' : props.hasPadding ? '20px' : '0px'};
  padding-bottom: ${props => props.removePaddingBottom ? '0' : props.hasPadding ? '20px' : '0px'};
`;

export const Title = styled(TitlePaper) <TitleProps>`
  font-size: ${props => props.small ? '20px' : props.big ? '40px' : props.size ? props.size + 'px' : '30px'};
  text-align: ${props => props.align || 'left'};
  letter-spacing: ${props => props.spacing ? props.spacing + 'px' : '0'};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  color: ${props => `${props.theme[props?.color || 'primary'] || props.color}`};
`;

export const Text = styled(TextPaper).attrs({})`
  
`;

export const Button = styled(ButtonPaper).attrs<ButtonProps>((props) => ({
	color: props.theme[props.background] || props.background || props.theme.primary,
	width: props.block ? '100%' : 'auto',
	labelStyle: {
		color: props.theme[props.textColor || 'light'],
		letterSpacing: 0,
		fontSize: 18
		//fontFamily: 'Ubuntu_300Light',
	},
	uppercase: false,
	mode: props.mode || 'contained',
}))``;

export const HelperText = styled(HelperTextPaper).attrs((props) => ({
	type: 'error'
}))``;

export const TextInput = styled(TextInputPaper).attrs((props) => ({
	mode: 'outlined',
	outlineColor: props.theme.secondary,
	underlineColor: props.theme.secondary,
	selectionColor: props.theme.secondary,
	theme: {
		colors: { 
			text: props.theme.dark,
			primary: props.theme.dark,
			background: props.theme.light,
			placeholder: props.theme.dark,
		},
	},
}))`
  height: 45px;
  width: 100%;
  font-size: 15px;
`;


