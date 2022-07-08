import {
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link
} from "@mui/material";
import Steps from "../Steps/Steps";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiPaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import { useTheme } from "@mui/system";

const PaymentsOutlinedIcon = ( props ) => (
  <MuiPaymentsOutlinedIcon style={{ transform: "scaleX(-1)"}} {...props} />
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
              <Icon />
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
        <Link href="#">
          Basketo for DAOs and Pro-Investors
        </Link>
        . You can also create{" "}
        <Link href="#">
          Private Baskets
        </Link>{" "}
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
  const {palette:{mode}} = useTheme();
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Steps
        title="Create Baskets & Monetize them."
        description={<CreateBasketsDescription />}
        flexDirection="row-reverse"
        imgUrl={`/images${mode=='dark'?'D':''}/create.png`}
      />
    </Container>
  );
};

export default CreateBaskets;
