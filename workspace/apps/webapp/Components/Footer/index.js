import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import styles from "./Footer.module.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Paper } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '@mui/material';

const socialLinks = [
  { title: "telegram", url: "https://t.me/basketofinance", icon: TelegramIcon },
  { title: "instagram", url: "https://www.instagram.com/basketo.finance/", icon: InstagramIcon },
  { title: "linkedin", url: "https://www.linkedin.com/company/basketo-finance", icon: LinkedInIcon },
  { title: "twitter", url: "https://twitter.com/0xBasketo", icon: TwitterIcon },
];

const quickLinks = [
  // { title: "Careers", url: "/careers" },
  { title: "About us", url: "https://in.linkedin.com/company/basketo-finance" },
  // { title: "Pricing", url: "/pricing" },
  // { title: "Help and Support", url: "/support" },
];

const Footer = () => {
   
  const currentTheme = useTheme();

  const handleThemeToggle = ()=>{
    if(typeof window !== 'undefined'){
      window.document.dispatchEvent(
        new CustomEvent("modeChange",{
          detail:{to:currentTheme.palette.mode==='dark' ? 'light' : 'dark'}
        }));
    }
  } 

  return (
    <Paper variant='section' color='secondary' sx={{ padding:'30px 20px'}} >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="div"
              sx={{ fontFamily: "Work Sans", mb: 2, fontSize: "2rem" }}
            >
              Basketo <span style={{fontWeight:'300'}}>finance</span>{" "}&#8482;
            </Typography>

            <div className={styles.address}>
              No.11, 2nd floor, 80 FT Road
              <br />
              4th Block, S.T Bed
              <br />
              Hyderabad - 560034
              <br />
            </div>
            <a href="mailto:company@basketo.finance">
              <Button variant="contained" sx={{ mb: 2 }}>
                Contact
              </Button>
            </a>

            <div className={styles.social}>
              {socialLinks.map(({ title, url, icon: Icon }) => (
                <a
                  key={ title }
                  href={ url }
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: '1rem' }}
                >
                  <Icon sx={{ fontSize: '2rem' }} />
                </a>
              ))}
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className={styles["quick-links"]}>
              <Typography
                variant="h6"
                sx={{
                  color: "#949494",
                  fontSize: "0.925rem",
                  letterSpacing: "0.2rem",
                }}
              >
                QUICK LINKS
              </Typography>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.title}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
        </Grid>
        <Button variant='outlined' onClick={handleThemeToggle}
        startIcon={currentTheme.palette.mode==='dark'? <LightModeIcon/> : <DarkModeIcon/>} >
        {currentTheme.palette.mode==='dark'? "Light Mode" : "Dark Mode"}
        </Button>
      </Container>
    </Paper>
  );
};

export default Footer;
