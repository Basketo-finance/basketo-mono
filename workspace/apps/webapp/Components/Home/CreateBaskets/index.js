import {
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Steps from "../../Common/Steps";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiPaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import styles from "./CreateBaskets.module.css";

const PaymentsOutlinedIcon = ({ sx }) => (
  <MuiPaymentsOutlinedIcon sx={{ transform: "scaleX(-1)", ...sx }} />
);

const CreateBasketsDescription = () => {
  const points = [
    {
      id: 1,
      icon: GroupsOutlinedIcon,
      text: "Connect with fast growing community of Crypto adopters.",
    },
    {
      id: 2,
      icon: PaymentsOutlinedIcon,
      text: "Offer Investment strategies as products and monetize them.",
    },
    {
      id: 3,
      icon: HandymanOutlinedIcon,
      text: "Use our rich analytical tools to manage and plan investment strategies.",
    },
  ];

  return (
    <>
      <List disablePadding>
        {points.map(({ id, icon: Icon, text }) => (
          <ListItem key={id} disablePadding disableGutters>
            <ListItemIcon>
              <Icon sx={{ color: "#0B754E", fontSize: "32px" }} />
            </ListItemIcon>

            <ListItemText
              primary={text}
              primaryTypographyProps={{ fontSize: "inherit" }}
            />
          </ListItem>
        ))}
      </List>

      <p>
        Learn more about{" "}
        <a href="#" className={styles.link}>
          Basketo for DAOs and Pro-Investors
        </a>
        . You can also create{" "}
        <a href="#" className={styles.link}>
          Private Baskets
        </a>{" "}
        for personal asset management.
      </p>

      <Button
        variant="contained"
        sx={{ fontSize: "18px" }}
        startIcon={<AddCircleOutlineIcon sx={{ fontSize: "25px" }} />}
      >
        Create Basket
      </Button>
    </>
  );
};

const CreateBaskets = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Steps
        title="Create Baskets & Monetize them."
        description={<CreateBasketsDescription />}
        flexDirection="row-reverse"
        imgUrl="/images/create.png"
      />
    </Container>
  );
};

export default CreateBaskets;
