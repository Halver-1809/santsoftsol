import React from 'react';

// Chakra imports
import { Box, Button, Flex, Link, Text, Image } from '@chakra-ui/react';

// Assets

export default function Banner() {
	// Chakra Color Mode
	return (
		<Flex
			direction='column'
			bgImage={`url(${''})`}       // Usar bg como fondo
			bgColor="lightbranding.100"
			bgSize='cover'
			bgPosition="center"
			bgRepeat="no-repeat"
			mb='20px'
			py={{ base: '30px', md: '56px' }}
			px={{ base: '30px', md: '64px' }}
			borderRadius='30px'
			position="relative"
		>
			{/* Imagen en la esquina derecha */}
			<Box position="absolute" top="50%" right="0" transform="translateY(-50%)" display={{ base: 'none', md: 'block' }}>
				<Image src={''} alt="Banner Image" maxWidth="100%" />
			</Box>
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
				Histórico de análisis
			</Text>
			<Text
				fontSize='lg'
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
				Esta herramienta informa el estado y estructura actual  proporcionando visibilidad sobre cómo se implemento  y que recursos consumen las soluciones SAP ERP HCM existentes en su empresa . Nuestra solución cubre temas claves como la funcionalidad implementada, el grado de personalización, el número de interfaces y la huella de datos existente, todos los cuales son necesarios para evaluar adecuadamente la complejidad de un entorno productivo SAP ERP HCM existente y asi tomar mejores decisiones.

 
			</Text>
		</Flex>
	);
}
