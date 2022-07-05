import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

const Description = ({ description }) => {
  return (
    <List disablePadding>
      {description.map(({ id, icon: Icon, text }) => (
        <ListItem key={id} disablePadding disableGutters>
          <ListItemIcon>
              <Icon sx={{ color: '#0B754E', fontSize: '32px' }} />
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
