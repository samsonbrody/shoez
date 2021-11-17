import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from "@chakra-ui/react";

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={"4xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 24, md: 22 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Shoe Shopping{" "}
          <Text as={"span"} color={"blue.400"}>
            The Easy Way
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Our mission is to provide access to the world’s most coveted items in
          the smartest way possible. Buy and sell the hottest sneakers, apparel,
          electronics, collectibles, trading cards and accessories.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"blue"}
            bg={"blue.400"}
            _hover={{ bg: "blue.200" }}
          >
            Get started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={"full"}></Flex>
      </Stack>
    </Container>
  );
}
