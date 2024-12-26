import {
	Flex,
	useColorModeValue,
	SimpleGrid,
	Tabs,
	TabPanels,
	TabPanel
} from '@chakra-ui/react';
import React from 'react';
import Banner from './components/Banner';
/* import Agricola from '@/assets/img/companies/agricola.jpg';
import GDV from '@/assets/img/companies/gobernacion-del-valle.png';
import Mineros from '@/assets/img/companies/mineros.png';
import Publicar from '@/assets/img/companies/publicar.jpg';
import Mansarovar from '@/assets/img/companies/logo-mansarovar-energy.webp';
import SKC from '@/assets/img/companies/skc.webp'; */
/* import Avatar1 from '@/assets/img/avatars/avatar1.png';
import Avatar2 from '@/assets/img/avatars/avatar2.png';
import Avatar3 from '@/assets/img/avatars/avatar3.png';
import Avatar4 from '@/assets/img/avatars/avatar4.png'; */
import CompaniesGrid from './components/Companies';

export default function DashboardCompanies() {
	let panelExample = (
		<SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap="20px">
			<CompaniesGrid
				name="Smurfit Kappa"
				author="Smurfit Kappa es una compañía especializada en soluciones logísticas e industriales. Ofrece una gama de servicios que incluyen maquinaria de alta tecnología."
				bidders={[]}
				image={''}
				isActive={true}
			/>
			<CompaniesGrid
				name="Agrícola"
				author="Agrícola es una empresa líder en el sector agroindustrial, especializada en la producción y exportación de productos agrícolas de alta calidad."
				bidders={[]}
				image={''}
				isActive={false}
			/>
			<CompaniesGrid
				name="Gobernación del Valle"
				author="La Gobernación del Valle es una entidad gubernamental dedicada a la administración pública y al desarrollo regional en el departamento del Valle del Cauca. "
				bidders={[]}
				image={''}
				isActive={false}
			/>
			<CompaniesGrid
				name="Mineros"
				author="Mineros es una destacada empresa minera que se especializa en la extracción de minerales como oro y plata. "
				bidders={[]}
				image={''}
				isActive={false}
			/>
			<CompaniesGrid
				name="Publicar"
				author="Publicar es una empresa de publicidad y marketing que ofrece soluciones en medios impresos y digitales."
				bidders={[]}
				image={''}
				isActive={false}
			/>
			<CompaniesGrid
				name="Mansarovar Energy"
				author="Mansarovar Energy es una empresa de exploración y producción de petróleo y gas. "
				bidders={[]}
				image={''}
				isActive={false}
			/>
		</SimpleGrid>
	);
	return (
		<Flex direction='column' pt={{ sm: '125px', lg: '75px' }}>
			<Banner />
			<Tabs variant='soft-rounded' colorScheme='brandTabs'>
				<TabPanels>
					<TabPanel px='0px'>{panelExample}</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	);
}
