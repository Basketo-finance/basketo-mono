import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const Description = ({ description }) => {
  return (
    <List disablePadding>
      {description.map(({ id, icon: Icon, text }) => (
        <ListItem key={id} disablePadding disableGutters>
          <ListItemIcon>
              <Icon color='primary' />
          </ListItemIcon>
          <ListItemText
            primary={text}
            primaryTypographyProps={{ fontSize: "inherit" }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default Description;
