import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const partners = [
  {
    name: "Your Story",
    img: {
      src: "/images/your-story.svg",
      width: "25%",
      minWidth: "80px",
    },
  },
  {
    name: "T-Hub",
    img: {
      src: "/images/t-hub.svg",
      width: "30%",
      minWidth: "65px",
    },
  },
  {
    name: "Inevitable",
    img: {
      src: "/images/inevitable.svg",
      width: "80%",
      minWidth: "90px",
    },
  },
];

const Partners = () => {
  return (
    <Container sx={{ m: "4rem 0" }}>
      <Grid container sx={{ justifyContent: "space-between" }}>
        {partners.map((partner) => (
          <Grid
            item
            xs={4}
            key={partner.name}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src={partner.img.src}
              alt={partner.name}
              style={{
                width: partner.img.width,
                minWidth: partner.img.minWidth,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Partners;
