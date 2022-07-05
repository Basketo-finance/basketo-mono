import Link from "next/link";
import * as React from "react";
import Card from "@mui/material/Card";
import { Container, Button, Divider, CardActions, CardContent } from "@mui/material";
import { MyCard, MyH3 } from "./Hero.style";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mb: 2,
        height: "calc(100vh - 80px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MyCard>
        <CardContent>
          <MyH3 variant="h3" component="div">
            Invest in diversified crypto <br /> portfolios with{" "}
            <span style={{ textDecoration: "underline" }}>Basketo</span>
          </MyH3>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <svg className={styles.arrows}>
            <path className={styles.a1} d="M0 0 L30 32 L60 0"></path>
            <path className={styles.a2} d="M0 20 L30 52 L60 20"></path>
            <path className={styles.a3} d="M0 40 L30 72 L60 40"></path>
          </svg>
          <Link href="/explore">
            <a>
              <Button
                size="small"
                variant="contained"
                sx={{
                  fontSize: "18px",
                  margin: "1px auto",
                }}
                startIcon={
                  <ArrowCircleUpIcon
                    style={{ transform: "rotate(90deg)", fontSize: "25px" }}
                  />
                }
              >
                Explore Baskets
              </Button>
            </a>
          </Link>
        </CardActions>
      </MyCard>
    </Container>
  );
};

export default Hero;
