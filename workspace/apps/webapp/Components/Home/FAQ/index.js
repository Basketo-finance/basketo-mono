import * as React from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:nth-of-type(1)": {
    borderRadius: "15px 15px 0 0",
  },
  "&:last-child": {
    borderRadius: "0 0 15px 15px",
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const faqs = [
  {
    id: 1,
    que: "What is Basketo?",
    ans: "Basketois user friendly investment interface that builds well researched and diversified crypto portfolios for investors. Its primary objective is to increase the probability of portfolio success and control risk by allocating funds to promising crypto projects spread across different crypto industries, themes and ideas.",
  },
  {
    id: 2,
    que: "How does Basketohelp investors make the right investment decision?",
    ans: "There are close to 10,000 crypto assets listed on various crypto exchanges. Picking the right set of cryptos isn’t easy, unless you have a reliable fiduciary friend by your side. At Basketo, we believe, well-researched diversified investing for the long term is the way forward to creating wealth peacefully. The engine behind Basketoacts as a reliable fiduciary that collates complex crypto data, analyses it in view of the current market trends, past performance and valuation, and finally prepares ready-to-invest diversified crypto baskets that match an individual’s risk appetite, budget and investment philosophy.",
  },
  {
    id: 3,
    que: "How do I track the performance of the baskets I purchased?",
    ans: "Once the baskets are bought, they are saved under “My portfolios” section of the dashboard. Investors will get real-time updates of their investment performance like overall Portfolio P/L, crypto-wise P/L, latest prevailing prices etc.",
  },
  {
    id: 4,
    que: "Is there any fee to buy baskets?",
    ans: "Its free for now, Enjoy the services",
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Container sx={{ mt: 6, mb: 6 }}>
        <Typography
          color={"secondary.dark"}
          sx={{
            mb: { xs: "1rem", sm: "1.5rem" },
            letterSpacing: "3px",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          FAQs
        </Typography>
        <div>
          {faqs.map((faq) => (
            <Accordion
              expanded={expanded === `panel + ${faq.id}`}
              onChange={handleChange(`panel + ${faq.id}`)}
              key={faq.id}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>{faq.que}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.ans}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Container>
    </>
  );
}
