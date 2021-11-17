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

import { BsInstagram, BsTwitter } from "react-icons/bs";
export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      h="12vh"
      borderBottom="1px solid black"
      flexGrow="1"
    >
      <Link href="/" passHref={true}>
        <Icon
          cursor="pointer"
          marginLeft="14"
          as={GiConverseShoe}
          w={10}
          h={10}
          color="blue.500"
        />
      </Link>

      <Spacer />
      <HStack spacing="20px" marginRight="12">
        <Button onClick={toggleColorMode}>
          {colorMode === "dark" && <HiSun />}
          {colorMode === "light" && <HiMoon />}
        </Button>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <Link href="/newproducts" passHref={true}>
              <MenuItem>New Products</MenuItem>
            </Link>
            <Link href="/allproducts" passHref={true}>
              <MenuItem>All Products</MenuItem>
            </Link>
            <Link href="/" passHref={true}>
              <MenuItem>Home</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}
