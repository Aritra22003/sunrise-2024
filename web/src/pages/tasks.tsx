import React, { useEffect, useState } from 'react';
import { initializeTasks, getActiveTasks, completeTask, getCompletedTasks } from '@/modules/taskManager';
import { Container, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
  },
});

const TaskManager = () => {
  const [activeTasks, setActiveTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    initializeTasks();
    setActiveTasks(getActiveTasks());
    setCompletedTasks(getCompletedTasks());
  }, []);

  const handleCompleteTask = (title: string) => {
    completeTask(title);
    setActiveTasks(getActiveTasks());
    setCompletedTasks(getCompletedTasks());
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Typography variant="h4" gutterBottom>Task Manager</Typography>
        
        <Typography variant="h6" gutterBottom>Active Tasks</Typography>
        <List>
          {activeTasks.map(task => (
            <ListItem key={task.id} button onClick={() => handleCompleteTask(task.title)}>
              <ListItemText primary={task.title} secondary={task.description} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" gutterBottom>Completed Tasks</Typography>
        <List>
          {completedTasks.map(task => (
            <ListItem key={task.id}>
              <ListItemText primary={task.title} secondary={task.description} />
            </ListItem>
          ))}
        </List>

        <Button variant="contained" color="primary" onClick={() => console.log("Add create task logic here")}>Create Task</Button>
      </Container>
    </ThemeProvider>
  );
};

export default TaskManager;
