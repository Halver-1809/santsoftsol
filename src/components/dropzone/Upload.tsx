import { Box, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import { MdUpload } from 'react-icons/md';
import Dropzone from './Dropzone';

export default function Upload(props: {
  isDocumentUpload?: boolean;
  onImageSelect?: (file: File | null) => void;
  onDocumentSelect?: (file: File | null) => void;
  [x: string]: any;
}) {
  const { isDocumentUpload, onImageSelect, onDocumentSelect } = props;
  const brandColor = useColorModeValue('brand.500', 'white');

  return (
    <Flex
      h="100%"
      direction={{ base: 'column', '2xl': 'row' }}
      maxHeight="max-content"
    >
      {isDocumentUpload ? (
        <Dropzone
          align="center"
          justify="center"
          w="100%"
          maxW="100%"
          h="max-content"
          minH="200px"
          cursor="pointer"
          p="20px !important"
          content={
            <Box width="100%">
              <Icon as={MdUpload} w="80px" h="80px" color={brandColor} />
              <Flex justify="center" mx="auto" mb="12px">
                <Text fontSize="xl" fontWeight="700" color={brandColor}>
                  Cargar documento
                </Text>
              </Flex>
              <Text fontSize="sm" fontWeight="500" color="secondaryGray.500">
                PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX son permitidos
              </Text>
            </Box>
          }
          onDocumentSelect={onDocumentSelect}
          accept={{
            'application/pdf': [],
            'application/msword': [],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
              [],
            'application/vnd.ms-powerpoint': [],
            'application/vnd.openxmlformats-officedocument.presentationml.presentation':
              [],
            'application/vnd.ms-excel': [],
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
              [],
          }}
        />
      ) : (
        <Dropzone
          me="36px"
          align="center"
          justify="center"
          w="100%"
          maxW="100%"
          h="max-content"
          minH="200px"
          cursor="pointer"
          p="20px !important"
          content={
            <Box width="100%">
              <Icon as={MdUpload} w="80px" h="80px" color={brandColor} />
              <Flex justify="center" mx="auto" mb="12px">
                <Text fontSize="xl" fontWeight="700" color={brandColor}>
                  Cargar imagen
                </Text>
              </Flex>
              <Text fontSize="sm" fontWeight="500" color="secondaryGray.500">
                PNG, JPG y JPEG son permitidos
              </Text>
            </Box>
          }
          onImageSelect={onImageSelect}
          accept={{
            'image/jpeg': [],
            'image/png': [],
            'image/jpg': [],
          }}
        />
      )}
    </Flex>
  );
}
