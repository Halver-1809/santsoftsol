import React, { useState } from 'react';

// chakra imports
import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  Icon,
  useColorModeValue,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import Content from '@/components/sidebar/components/Content';
import {
  renderThumb,
  renderTrack,
  renderView,
  renderViewMini,
} from '@/components/scrollbar/Scrollbar';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { css, keyframes } from '@emotion/react';
import patterHR from '@/assets/img/landing/pattern.svg';

// Assets
import { IoMenuOutline } from 'react-icons/io5';

function Sidebar(props: { routes: RoutesType[]; [x: string]: any }) {
  const { routes, mini, hovered, setHovered } = props;
  let variantChange = '0.2s linear';
  let shadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.08)',
    'unset',
  );

  /* let sidebarBg = useColorModeValue('white', 'navy.800'); */
  let sidebarMargins = '0px';
  let sidebarRadius = '30px';

  return (
    <Box
      transform={{
        base: 'translateX(-100%)',
        sm: 'translateX(-100%)',
        md: 'translateX(-100%)',
        lg: 'translateX(-100%)',
        xl: 'translateX(0)',
      }}
      transition="transform 1s ease-in-out"
      position="fixed"
      minH="100%"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box
        background={`linear-gradient(to bottom, #b2aaf9, #b2aaf9)`}
        position="relative"
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        // className='sidebar-bgGradient'
        transition={variantChange}
        w={
          mini === false
            ? '285px'
            : mini === true && hovered === true
            ? '285px'
            : '120px'
        }
        ms={{
          sm: '16px',
        }}
        my={{
          sm: '16px',
        }}
        h="calc(100vh - 32px)"
        m={sidebarMargins}
        borderRadius={sidebarRadius}
        minH="100%"
        overflowX="hidden"
        boxShadow={shadow}
      >
        <Box
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${patterHR})`,
            backgroundSize: '200%',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            opacity: 0.2,
            zIndex: 0,
          }}
        />
        <Scrollbars
          autoHide
          renderTrackVertical={renderTrack}
          renderThumbVertical={renderThumb}
          renderView={
            mini === false
              ? renderView
              : mini === true && hovered === true
              ? renderView
              : renderViewMini
          }
        >
          <Content mini={mini} hovered={hovered} routes={routes} />
        </Scrollbars>
      </Box>
    </Box>
  );
}

// FUNCTIONS
export function SidebarResponsive(props: {
  routes: RoutesType[];
  [x: string]: any;
}) {
  let menuColor = useColorModeValue('gray.400', 'white');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  /* const [highlight, setHighlight] = useState(false); */
  const [shouldBlink /* , setShouldBlink */] = useState(false);

  const { routes } = props;
  // let isWindows = navigator.platform.startsWith("Win");
  const blinkAnimation = keyframes`
  to {
    opacity: 0.2;
  }
`;

  const blinkStyles = css`
    animation: ${blinkAnimation} 0.2143s infinite alternate; /* Set iteration count for more than 10 times within 1 second */
  `;
  return (
    <Flex display={{ sm: 'flex', xl: 'none' }} alignItems="center">
      <Flex
        ref={btnRef}
        w="max-content"
        h="max-content"
        onClick={onOpen}
        align="center" // Align vertically
        justify="center" // Align horizontally
      >
        <Icon
          as={IoMenuOutline}
          color={menuColor}
          className={`kkkooo ${shouldBlink ? 'blink-animation' : ''}`}
          w="20px"
          h="20px"
          borderRadius={shouldBlink ? '50%' : '0'}
          border={shouldBlink ? '2px solid #3311db' : 'none'}
          boxSizing="content-box"
          p="4px"
          _hover={{
            cursor: 'pointer',
          }}
          css={shouldBlink ? blinkStyles : undefined}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={document.documentElement.dir === 'rtl' ? 'right' : 'left'}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay zIndex={9999999} />
        <DrawerContent
          containerProps={{ zIndex: 999999999 }}
          w={'285px'}
          maxW="285px"
          ms={{
            sm: '16px',
          }}
          my={{
            sm: '16px',
          }}
          borderRadius="16px"
          background={`linear-gradient(to bottom, #b2aaf9, #b2aaf9)`}
          position="relative"
          backgroundRepeat={'no-repeat'}
          backgroundSize={'cover'}

          // backgroundImage={OverView}
          // className='sidebar-bgGradient'
        >
          <Box
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${patterHR})`,
              backgroundSize: '200%',
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center',
              opacity: 0.2,
              zIndex: 0,
            }}
          />
          <DrawerCloseButton
            zIndex="3"
            onClick={onClose}
            _focus={{ boxShadow: 'none' }}
            _hover={{ boxShadow: 'none' }}
          />
          <DrawerBody
            maxW="285px"
            px="0rem"
            pb="0"
            sx={{ overflowY: 'hidden', overflowX: 'hidden', height: '100%' }}
          >
            <Scrollbars
              autoHide
              renderTrackVertical={renderTrack}
              renderThumbVertical={renderThumb}
              renderView={renderView}
            >
              <Content mini={false} routes={routes} onClick={onClose} />
            </Scrollbars>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
// PROPS

export default Sidebar;
