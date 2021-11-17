import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Text,
  Flex,
  chakra,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { shoeData } from "../../data/fakeJson";

export const getStaticPaths = async () => {
  const paths = shoeData.map((shoe) => {
    return {
      params: { id: shoe.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const filtered = shoeData.filter((s) => {
    return s.id.toString() === id;
  });
  const foundItem = filtered[0];
  return {
    props: { foundItem },
  };
};

export default function Product({ foundItem }) {
  console.log(foundItem);
  return (
    <motion.div
      exit={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Box p={{ sm: 2, md: 6, lg: 12 }}>
        <Flex
          borderRadius="10"
          bg={useColorModeValue("#ccdbeb", "gray.600")}
          p={10}
          w="full"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            maxW="xl"
            mx="auto"
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
          >
            <Box px={4} py={2}>
              <chakra.h1
                color={useColorModeValue("gray.800", "white")}
                fontWeight="bold"
                fontSize="3xl"
                textTransform="uppercase"
              >
                {foundItem.name}
              </chakra.h1>
              <chakra.p
                mt={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                {foundItem.description}
              </chakra.p>
            </Box>

            <Image
              h={48}
              w="full"
              fit="cover"
              mt={2}
              src={foundItem.imgUrl}
              alt="NIKE AIR"
            />

            <Flex
              alignItems="center"
              justifyContent="space-between"
              px={4}
              py={2}
              bg="gray.900"
              roundedBottom="lg"
            >
              <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                {foundItem.price}
              </chakra.h1>
              <chakra.button
                px={2}
                py={1}
                bg="white"
                fontSize="xs"
                color="gray.900"
                fontWeight="bold"
                rounded="lg"
                textTransform="uppercase"
                _hover={{
                  bg: "gray.200",
                }}
                _focus={{
                  bg: "gray.400",
                }}
              >
                Add to cart
              </chakra.button>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Link href="/allproducts" passHref={true}>
        <Box
          marginTop="2"
          marginBottom={{ sm: 4, lg: "10" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button>Back</Button>
        </Box>
      </Link>
    </motion.div>
  );
}
