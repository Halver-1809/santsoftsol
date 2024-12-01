import React, { useCallback } from 'react';
import { Button, Flex, useColorModeValue, Box, Image, Text, Icon } from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { MdPictureAsPdf, MdDescription } from 'react-icons/md'; // Icons for PDF and DOC

function Dropzone(props: {
  content: JSX.Element | string;
  onImageSelect?: (file: File | null) => void;
  onDocumentSelect?: (file: File | null) => void;
  accept: { [key: string]: any }; // Acepta tipos de archivo
  [x: string]: any;
}) {
  const { content, onImageSelect, onDocumentSelect, accept, ...rest } = props;
  const [preview, setPreview] = React.useState<string | null>(null);
  const [fileInfo, setFileInfo] = React.useState<{ name: string; type: string } | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: accept,
    maxFiles: 1,
    onDrop: useCallback((acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        if (file.type.startsWith('image/')) {
          const imageUrl = URL.createObjectURL(file);
          setPreview(imageUrl);
          if (onImageSelect) {
            onImageSelect(file);
          }
          setFileInfo(null);
        } else {
          setFileInfo({ name: file.name, type: file.type });
          if (onDocumentSelect) {
            onDocumentSelect(file);
          }
          setPreview(null);
        }
      }
    }, [onImageSelect, onDocumentSelect]),
  });

  const bg = useColorModeValue('gray.100', 'navy.700');
  const borderColor = useColorModeValue('secondaryGray.100', 'whiteAlpha.100');

  return (
    <Flex
      align='center'
      justify='center'
      bg={bg}
      border='1px dashed'
      borderColor={borderColor}
      borderRadius='16px'
      w='100%'
      h='200px'
      minH='400px'
      cursor='pointer'
      {...getRootProps({ className: 'dropzone' })}
      {...rest}
    >
      <input {...getInputProps()} />
      <Box textAlign='center'>
        {preview ? (
          <Image src={preview} alt='Preview' borderRadius='16px' maxH='200px' />
        ) : fileInfo ? (
          <Flex align="center" justify="center" flexDirection="column">
            {fileInfo.type.startsWith('application/pdf') ? (
              <Icon as={MdPictureAsPdf} w="40px" h="40px" color="red.500" />
            ) : (
              <Icon as={MdDescription} w="40px" h="40px" color="gray.500" />
            )}
            <Text mt="2" fontSize="md" fontWeight="500" color="gray.700">
              {fileInfo.name}
            </Text>
          </Flex>
        ) : (
          <Button variant='no-effects'>{content}</Button>
        )}
      </Box>
    </Flex>
  );
}

export default Dropzone;
