import Link from "next/link";

import { Container, Text, Row, Col } from "@nextui-org/react";
import styles from "./navigation.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container
      component="footer"
      style={{
        borderTop: "1px solid #ccc",
        padding: "2rem",
        position: "absolute",
        bottom: "0",
        width: "100%",
      }}
    >
      <Row justify="center">
        <Col span={12}>
          <p style={{ textAlign: "center", marginBottom: "1rem" }}>
            Copyright © {currentYear}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
