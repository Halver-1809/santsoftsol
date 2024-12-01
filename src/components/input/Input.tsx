import { Input, InputProps } from '@chakra-ui/react';
import { ForwardedRef, forwardRef } from 'react';
import { FormRegister } from '@/types/UseForm';

interface CustomInputProps extends InputProps {
  register?: ReturnType<FormRegister>;
}

const CustomInput = forwardRef(
  (props: CustomInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { register, ...rest } = props;
    return <Input ref={ref} {...register} {...rest} />;
  },
);

export default CustomInput;
