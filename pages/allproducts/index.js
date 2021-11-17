import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flex,
  Box,
  chakra,
  useColorModeValue,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import { shoeData } from "../../data/fakeJson";
import CallToActionWithIllustration from "../../components/Hero";
import Drawer from "../../components/Drawer";
import Link from "next/link";
export default function Index() {
  return (
    <motion.div
      exit={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <VStack spacing={0} align="stretch">
        <Box h="10px" bg="green.300"></Box>
        <Box h="10px" bg="blue.400"></Box>
      </VStack>
      <CallToActionWithIllustration />
      <VStack spacing={0} align="stretch">
        <Box h="10px" bg="blue.500"></Box>
        <Box h="10px" bg="green.300"></Box>
      </VStack>
      <Flex
        bg={useColorModeValue("blue.200", "blue.900")}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        {shoeData.map((shoe) => (
          <Link key={shoe.id} href={`/allproducts/${shoe.id}`} passHref={true}>
            <Flex
              cursor="pointer"
              direction="column"
              justifyContent="center"
              alignItems="center"
              w="sm"
              mx="auto"
              marginBottom="7"
            >
              <Box
                bg="gray.300"
                h={64}
                w="full"
                rounded="xl"
                shadow="xl"
                bgSize="cover"
                bgPos="center"
                style={{
                  backgroundImage: `url(${shoe.imgUrl})`,
                }}
              ></Box>

              <Box
                w={{ base: 56, md: 64 }}
                bg="gray.800"
                mt={-10}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
              >
                <chakra.h3
                  py={2}
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color="white"
                  letterSpacing={1}
                >
                  {shoe.name}
                </chakra.h3>

                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  py={2}
                  px={3}
                  bg="gray.700"
                >
                  <chakra.span fontWeight="bold" color="gray.200">
                    {shoe.price}
                  </chakra.span>
                  <chakra.button
                    bg="gray.800"
                    fontSize="xs"
                    fontWeight="bold"
                    color="white"
                    px={2}
                    py={1}
                    rounded="lg"
                    textTransform="uppercase"
                    _hover={{
                      bg: "gray.600",
                    }}
                    _focus={{
                      bg: "gray.600",
                      outline: "none",
                    }}
                  >
                    Add to cart
                  </chakra.button>
                </Flex>
              </Box>
            </Flex>
          </Link>
        ))}
      </Flex>
    </motion.div>
  );
}

export const getStaticProps = (context) => {
  return {
    props: {},
  };
};
