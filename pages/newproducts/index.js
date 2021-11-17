import React from "react";
import { Box, Link, chakra, Flex, Text, Heading } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
function Card() {
  return (
    <motion.div
      exit={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Flex
        bg="black"
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        borderRadius="10"
        marginTop="5"
        marginBottom="5"
      >
        <Box
          bg="black"
          mx={{ lg: 2 }}
          display={{ lg: "flex" }}
          maxW={{ lg: "5xl" }}
          shadow={{ lg: "lg" }}
          rounded={{ lg: "lg" }}
        >
          <Box w={{ lg: "50%" }}>
            <Box
              h={{ base: 64, lg: "full" }}
              rounded={{ lg: "lg" }}
              bgSize="cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')",
              }}
            ></Box>
          </Box>

          <Box
            py={12}
            px={6}
            maxW={{ base: "xl", lg: "5xl" }}
            w={{ lg: "50%" }}
          >
            <chakra.h2
              fontSize={{ base: "2xl", md: "3xl" }}
              bg="black"
              fontWeight="bold"
            >
              <chakra.span bg="black" color="white">
                Jordan 1 High OG
              </chakra.span>
            </chakra.h2>
            <chakra.p mt={4} bg="#black" color="white">
              <Text>
                Ground your style in Flight with the Air Jordan 1 Mid, the
                sneaker of endless possibilities. Fresh as ever, this special
                edition of the famous mid-top shoe delivers nonstop comfort for
                anyone who cant get enough of the heritage classic.
              </Text>
            </chakra.p>

            <Box mt={8}>
              <Link
                bg="gray.900"
                color="gray.100"
                px={5}
                py={3}
                fontWeight="semibold"
                rounded="lg"
                _hover={{ bg: "gray.800" }}
              >
                Buy Now
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Flex
        bg="black"
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        borderRadius="10"
        marginTop="5"
        marginBottom="5"
      >
        <Box
          bg="black"
          mx={{ lg: 2 }}
          display={{ lg: "flex" }}
          maxW={{ lg: "5xl" }}
          shadow={{ lg: "lg" }}
          rounded={{ lg: "lg" }}
        >
          <Box w={{ lg: "50%" }}>
            <Box
              h={{ base: 64, lg: "full" }}
              rounded={{ lg: "lg" }}
              bgSize="cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2912&q=80')",
              }}
            ></Box>
          </Box>

          <Box
            py={12}
            px={6}
            maxW={{ base: "xl", lg: "5xl" }}
            w={{ lg: "50%" }}
          >
            <chakra.h2
              fontSize={{ base: "2xl", md: "3xl" }}
              bg="black"
              fontWeight="bold"
            >
              <chakra.span bg="black" color="white">
                Air Force 1 Carhartt
              </chakra.span>
            </chakra.h2>
            <chakra.p mt={4} bg="#black" color="white">
              <Text>
                The Air Force is a range of athletic shoes made by Nike that
                began with the Air Force 1 and went on to include the Air Force
                2, Air Force 3, Air Force STS, Air Force 5, Air Force XXV and
                Air Force 09. The Air Force 1 was created by designer Bruce
                Kilgore and was the first basketball shoe to use the Nike Air
                technology. The shoe is offered in low, mid and high-top styles.
              </Text>
            </chakra.p>

            <Box mt={8}>
              <Link
                bg="gray.900"
                color="gray.100"
                px={5}
                py={3}
                fontWeight="semibold"
                rounded="lg"
                _hover={{ bg: "gray.800" }}
              >
                Buy Now
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>
    </motion.div>
  );
}

export default function Index() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box d="flex" justifyContent="center" alignItems="center" h="20">
        <Heading as="h1">New Products</Heading>
      </Box>

      <Card />
    </Box>
  );
}
