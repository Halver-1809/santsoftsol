import { useState } from 'react';
import { Box, Text, Link, Button, Flex } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true);

  return (
    <>
      {bannerOpen && (
        <Box
          position="fixed"
          bottom={{ base: 0, md: 8 }}
          right={{ base: 0, md: 12 }}
          w={{ base: '100%', md: 'auto' }}
          zIndex="50"
        >
          <Flex
            bg="#FF823F"
            fontSize="sm"
            p="3"
            rounded={{ md: 'md' }}
            shadow="lg"
            justify="space-between"
            alignItems="center"
          >
            <Text display="inline-flex">
              <Link
                href="https://hrsolutions.com.co"
                target="_blank"
                rel="noreferrer"
                fontWeight="bold"
                _hover={{ textDecoration: 'underline' }}
              >
                Recibe una demo
              </Link>
              <Text as="span" fontStyle="italic" px="1.5">
                or
              </Text>
              <Link
                href="https://wa.me/+573158645940"
                target="_blank"
                rel="noreferrer"
                fontWeight="bold"
                _hover={{ textDecoration: 'underline' }}
              >
                Consulta con un asesor
              </Link>
            </Text>
            <Button
              variant="ghost"
              _hover={{ color: 'slate.400' }}
              pl="1"
              ml="1"
              borderColor="gray.700"
              onClick={() => setBannerOpen(false)}
            >
              <CloseIcon w={2} h={2} />
              <span className="sr-only">Close</span>
            </Button>
          </Flex>
        </Box>
      )}
    </>
  );
}
