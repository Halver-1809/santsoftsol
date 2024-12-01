// Chakra imports
import { Flex, FormLabel, Input, Text, useColorModeValue } from '@chakra-ui/react';

// Custom components
export default function Default(props: {
  id?: string;
  label?: string;
  extra?: JSX.Element;
  placeholder?: string;
  type?: string;
  mb?: any;
  name?: string;
  value?: any;
  defaultValue?: string; // Añadido defaultValue
  isRequired?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void; // Añadido onBlur
  me?: any;
}) {
  const {
    id,
    label,
    extra,
    placeholder,
    type,
    mb,
    me,
    value,
    defaultValue,
    onChange,
    onBlur, // Destructuración de onBlur
    ...rest
  } = props;
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');

  return (
    <Flex direction='column' mb={mb ? mb : '30px'} me={me ? me : '0px'}>
      <FormLabel
        display='flex'
        ms='10px'
        htmlFor={id}
        fontSize='sm'
        color={textColorPrimary}
        fontWeight='bold'
        _hover={{ cursor: 'pointer' }}
      >
        {label}
        <Text fontSize='sm' fontWeight='400' ms='2px'>
          {extra}
        </Text>
      </FormLabel>
      <Input
        {...rest}
        type={type}
        id={id}
        defaultValue={defaultValue} // Usar defaultValue para valores iniciales
        onChange={onChange} // Pasar `onChange` directamente
        onBlur={onBlur} // Pasar `onBlur` directamente
        fontWeight='500'
        variant='main'
        placeholder={placeholder}
        _placeholder={{ fontWeight: '400', color: 'secondaryGray.600' }}
        h='44px'
        maxH='44px'
      />
    </Flex>
  );
}
