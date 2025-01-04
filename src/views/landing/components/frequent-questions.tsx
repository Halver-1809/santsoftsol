import {
  Box,
  Heading,
  Text,
  Icon,
  Stack,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { FiHelpCircle, FiShield, FiCheckCircle, FiArchive, FiCloud } from 'react-icons/fi';

interface FAQItemProps {
  icon: React.ElementType;
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ icon, question, answer }) => {
  const bgCard = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <AccordionItem border="none">
      <h2>
        <AccordionButton
          _hover={{ bg: useColorModeValue('gray.50', 'gray.600') }}
          _expanded={{
            bg: useColorModeValue('#B3F200', 'lightbranding.100'),
            boxShadow: 'lg',
          }}
          transition="all 0.3s ease"
          py={4}
        >
          <Stack direction="row" spacing={4} align="center" flex="1" textAlign="left">
            <Icon as={icon} boxSize={6} color="lightbranding.500" transition="transform 0.3s" _hover={{ transform: 'scale(1.2)' }} />
            <Heading size="sm" color={textColor}>
              {question}
            </Heading>
          </Stack>
          <AccordionIcon transition="transform 0.3s" />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} color={textColor} transition="all 0.4s ease" bg={bgCard} px={4}>
        <Text>{answer}</Text>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default function FAQSection() {
  return (
    <Box maxW="6xl" mx="auto" px={[4, 6]} py={[12, 20]} id="questions">
      <Box textAlign="center" mb={12}>
        <Text
          fontSize="lg"
          fontWeight="bold"
          color="darkbrading.500"
          bg="lightbranding.50"
          display="inline-block"
          py="2px"
          px={3}
          borderRadius="full"
          mb={4}
        >
          Find answers
        </Text>
        <Heading as="h1" size="xl" mb={4}>
          Frequently Asked Questions
        </Heading>
        <Text fontSize="lg" color="gray.500">
          Resolve your doubts about migrating to Salesforce Cloud.
        </Text>
      </Box>

      <Accordion allowMultiple>
        <FAQItem
          icon={FiArchive}
          question="What data can be migrated to Salesforce?"
          answer="Salesforce allows migration of key data such as contacts, opportunities, accounts, and cases. Additionally, you can transfer historical records and important customer and sales details. Custom objects, like specific fields or tailored business processes, can also be migrated and adapted to the new platform. However, elements such as complex integration processes or specific customizations may require additional configurations post-migration."
        />

        <FAQItem
          icon={FiCloud}
          question="Will I still be able to use the functionalities of my current system after migrating to Salesforce?"
          answer="Yes. Salesforce offers a comprehensive platform with advanced CRM, marketing automation, and customer management functionalities, but it is also flexible and compatible with existing systems. Integrating Salesforce with other systems allows you to continue using previous tools while benefiting from the improvements and automatic updates offered by the cloud."
        />

        <FAQItem
          icon={FiShield}
          question="Is it safe to migrate data to Salesforce?"
          answer="Yes. Salesforce uses advanced security technologies to protect all migrated data. With data encryption, multi-factor authentication, and detailed access controls, Salesforce ensures that sensitive information, such as customer and financial data, is protected at all times. It also complies with global data protection regulations, such as GDPR, ensuring your information is handled in accordance with the strictest standards."
        />

        <FAQItem
          icon={FiCheckCircle}
          question="How does Salesforce ensure compliance with tax and labor regulations?"
          answer="Salesforce is designed to stay updated with international tax and labor regulations. Through its configuration tools, you can adapt Salesforce to local regulations and generate reports to help meet tax and labor obligations in real time, reducing the risk of errors and ensuring compliance across all jurisdictions where you operate."
        />

        <FAQItem
          icon={FiHelpCircle}
          question="What happens to historical data when migrating to Salesforce?"
          answer="During migration to Salesforce, historical data can be transferred securely. All previous records, such as opportunities, accounts, and cases, can be harmonized with new configurations and workflows, ensuring that all information remains organized and accessible. Salesforce provides integration and synchronization tools to ensure no relevant data is lost during migration."
        />
      </Accordion>
    </Box>
  );
}
