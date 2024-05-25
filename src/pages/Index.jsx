import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="brand.800" color="white" padding={4} align="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#home" color="white">Home</Link>
          <Link href="#about" color="white">About</Link>
          <Link href="#contact" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content Area */}
      <Container maxW="container.md" mt={10}>
        <VStack spacing={8} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">First Blog Post</Heading>
            <Text mt={4}>This is the content of the first blog post. It's a great place to share your thoughts and ideas.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Second Blog Post</Heading>
            <Text mt={4}>This is the content of the second blog post. Continue sharing your amazing stories and experiences.</Text>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={4} mt={10}>
        <Container maxW="container.md">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 My Blog. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="https://twitter.com" isExternal>
                <FaTwitter />
              </Link>
              <Link href="https://github.com" isExternal>
                <FaGithub />
              </Link>
              <Link href="https://linkedin.com" isExternal>
                <FaLinkedin />
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;