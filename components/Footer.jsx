import React from "react";
import Link from "next/link";
import {
  Box,
  Text,
  Flex,
  Image,
  Icon,
  HStack,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { HiMoon, HiSun } from "react-icons/hi";
import { GiConverseShoe } from "react-icons/gi";
import {
  ChevronDownIcon,
  HamburgerIcon,
  EditIcon,
  RepeatIcon,
  ExternalLinkIcon,
  AddIcon,
} from "@chakra-ui/icons";

import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
export default function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="8vh"
      borderBottom="1px solid black"
      flexGrow="1"
      bg="gray.900"
    >
      <HStack spacing="20px" marginRight="12">
        <Link href="https://www.instagram.com/samson_brody/" passHref={true}>
          <Icon
            cursor="pointer"
            as={BsInstagram}
            w={5}
            h={5}
            color="green.400"
          />
        </Link>
        <Link href="https://twitter.com/samson_brody" passHref={true}>
          <Icon cursor="pointer" as={BsTwitter} w={5} h={5} color="blue.600" />
        </Link>
        <Link href="https://github.com/samsonbrody" passHref={true}>
          <Icon cursor="pointer" as={BsGithub} w={5} h={5} color="red.600" />
        </Link>
      </HStack>
    </Box>
  );
}
