import React from 'react';

// Chakra imports
import { Button, Flex, Link, Text } from '@chakra-ui/react';

// Assets
import banner from '@/assets/img/product/OverviewBanner.png';

export default function Banner() {
	// Chakra Color Mode
	return (
		<Flex
			direction='column'
			bgImage={banner}
			bgSize='cover'
			mb='20px'
			py={{ base: '30px', md: '56px' }}
			px={{ base: '30px', md: '64px' }}
			borderRadius='30px'>
			<Text
				fontSize={{ base: '24px', md: '34px' }}
				color='white'
				mb='14px'
				maxW={{
					base: '75%',
					md: '54%',
					lg: '65%',
					xl: '65%',
					'2xl': '50%',
					'3xl': '42%'
				}}
				fontWeight='700'
				lineHeight={{ base: '32px', md: '42px' }}>
				Compañías
			</Text>
			<Text
				fontSize='2xl'
				color='#E3DAFF'
				maxW={{
					base: '90%',
					md: '64%',
					lg: '66%',
					xl: '56%',
					'2xl': '46%',
					'3xl': '38%'
				}}
				fontWeight='500'
				lineHeight='28px'>
				  Elige la compañía para iniciar el proceso de migración a SAP HXM Cloud.
			</Text>
		</Flex>
	);
}
