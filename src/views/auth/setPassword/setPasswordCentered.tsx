// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import InputField from '@/components/fields/InputField';
import React, { useState } from 'react';

// Custom components
import OnToast from '@/components/alert/Toast';
import { PasswordValidation } from '@/utils/formValidations/validations';

const SetPasswordCentered: React.FC = () => {
  const [password, setPassword] = useState<{
    password: string;
    confirmPassword: string;
  }>({ password: '', confirmPassword: '' });
  const [err, setErr] = useState(false); //if has error then true, otherwise false
  const [alert, setAlert] = useState(false); //if has error then true, otherwise false
  const [msg, setMsg] = useState(null); //if has error then true, otherwise false
  // Chakra color mode
  const textColor = useColorModeValue('navy.700', 'white');

  const handleChange = (val: string, field: string) => {
    if (field === 'pwd') {
      //password
      setPassword({ ...password, password: val });
    } else {
      setPassword({ ...password, confirmPassword: val });
    }
  };
  const handleSubmit = async () => {
    if (password.confirmPassword === '') {
      setErr(true);
      setMsg('Confirm Password Field is Empty');
    } else if (password.password === '') {
      setErr(true);
      setMsg('Password Field is Empty');
    } else if (
      password.confirmPassword !== '' &&
      password.confirmPassword !== password.password
    ) {
      setErr(true);
      setMsg('Password and Confirm passwords are not matched');
    } else {
      let valid = PasswordValidation(password.password, 8, 16);
      if (valid.err) {
        setErr(true);
        setMsg(valid.msg);
      } else {
        setErr(false);
        //send password update request for both creator and learners in the same file
      }
    }
    //update the password in creator table if both passward and confirm password matched
  };

  return (
    <Flex
      w="100%"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      px={{ base: '25px', md: '0px' }}
      flexDirection="column"
    >
      <Box mb="34px">
        <Heading
          color={textColor}
          fontSize={{ base: '3xl', md: '36px' }}
          mb="16px"
        >
          Set your password?
        </Heading>
      </Box>
      <Flex
        zIndex="2"
        direction="column"
        w={{ base: '100%', lg: '456px' }}
        maxW="100%"
        background="transparent"
        borderRadius="15px"
        align="start"
      >
        <FormControl>
          <InputField
            mb="10px"
            me="30px"
            id="ctPassword"
            name="ctPassword"
            isRequired={true}
            label="New Password"
            placeholder="eg. pass"
            type="password"
            onChange={(e: any) => handleChange(e.target.value, 'pwd')}
            value={password.password}
          />
          <InputField
            mb="10px"
            id="cnfPassword"
            name="cnfPassword"
            isRequired={true}
            label="Confirm Password"
            placeholder="eg. pass"
            type="text"
            // onChange={(e : any)=>{
            //   console.log(e);
            //   setPassword({...password, confirmPassword:e.target.value})
            // }}
            onChange={(e: any) => handleChange(e.target.value, 'cnf')}
            value={password.confirmPassword}
          />
          {alert ? (
            <OnToast
              msg={msg}
              status={err ? 'error' : 'success'}
              setAlert={setAlert}
            />
          ) : null}
          <Button
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            w="100%"
            h="50"
            mb="24px"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default SetPasswordCentered;
