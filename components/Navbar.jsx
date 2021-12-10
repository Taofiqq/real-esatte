import Link from "next/link";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => {
  return (
    <ChakraProvider>
      <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box fontSize="xl" color="blue.400" fontWeight="bold">
          <Link href="/" paddingLeft="0">
            Realtor
          </Link>
        </Box>
        <Spacer />

        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              variant="outlined"
              color="red.400"
              icon={<FcMenu />}
            />
            <MenuList>
              <Link href="/" passHref>
                <MenuItem icon={<FcHome />}>Home</MenuItem>
              </Link>
              <Link href="/search" passHref>
                <MenuItem icon={<BsSearch />}>Search</MenuItem>
              </Link>
              <Link href="/search?purpose=for-sale" passHref>
                <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
              </Link>
              <Link href="/search?purpose=for-rent" passHref>
                <MenuItem icon={<FiKey />}>Rent</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Navbar;