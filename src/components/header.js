import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";

import SunIcon from "./icons/sunIcon";
import MoonIcon from "./icons/moonIcon";

import { Navbar, Text, Card, Radio } from "@nextui-org/react";
import styles from "./navigation.module.css";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme("light");
  const [icon, setIcon] = useState(<MoonIcon size={20} fill="currentColor" />);

  const collapseItems = ["", "About", "Transactions"];
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setIcon(
      theme === "light" ? (
        <MoonIcon size={20} fill="currentColor" />
      ) : (
        <SunIcon size={20} fill="currentColor" />
      )
    );
  };

  return (
    <header className="flex items-center justify-between">
      <Navbar
        isBordered
        css={{
          $$navbarBackgroundColor: "transparent",
          $$navbarBlurBackgroundColor: "transparent",
        }}
      >
        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Blockus
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="primary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/transactions">Transactions</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          {/* <Navbar.Item hideIn="xs">
            <Button auto onPress={toggleTheme}>
              {icon}
            </Button>
          </Navbar.Item> */}
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>

        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={`/${item}`}
              >
                {item === "" ? "Home" : ""}
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
