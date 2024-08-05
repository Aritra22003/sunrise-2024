import React from 'react';
import { List, ListItem, ListItemText, Drawer, Divider } from '@mui/material';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button component={Link} href="/">
          <ListItemText primary="Home" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} href="/tasks">
          <ListItemText primary="Tasks" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
