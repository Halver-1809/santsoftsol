import { extendTheme, HTMLChakraProps, ThemingProps } from '@chakra-ui/react';
import { buttonStyles } from './components/button';
import { inputStyles } from './components/input';
import { textareaStyles } from './components/textarea';
import { switchStyles } from './components/switch';
import { linkStyles } from './components/link';
import { globalStyles } from './styles';

export default extendTheme(
	globalStyles,
	buttonStyles, // button styles
	linkStyles, // link styles
	inputStyles, // input styles
	textareaStyles, // textarea styles
	switchStyles, // switch styles
);

export interface CustomCardProps extends HTMLChakraProps<'div'>, ThemingProps {}
