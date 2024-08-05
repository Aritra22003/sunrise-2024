import React, { useEffect, useState } from 'react';
import { initializeTasks, getActiveTasks, completeTask, getCompletedTasks, createTask, updateTask, deleteTask } from '@/modules/taskManager';
import { Container, Typography, Button, List, ListItem, ListItemText, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
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
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newTaskGroup, setNewTaskGroup] = useState(1);
  const [newTaskPersona, setNewTaskPersona] = useState('');

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

  const handleCreateTask = () => {
    createTask(newTaskTitle, newTaskDescription, newTaskPersona, newTaskGroup);
    setActiveTasks(getActiveTasks());
    setOpenCreateDialog(false);
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

        <Button variant="contained" color="primary" onClick={() => setOpenCreateDialog(true)}>Create Task</Button>

        <Dialog open={openCreateDialog} onClose={() => setOpenCreateDialog(false)}>
          <DialogTitle>Create a New Task</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fill in the details of the new task.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Task Title"
              fullWidth
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Task Description"
              fullWidth
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Task Group"
              fullWidth
              type="number"
              value={newTaskGroup}
              onChange={(e) => setNewTaskGroup(Number(e.target.value))}
            />
            <TextField
              margin="dense"
              label="Task Persona"
              fullWidth
              value={newTaskPersona}
              onChange={(e) => setNewTaskPersona(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenCreateDialog(false)} color="primary">Cancel</Button>
            <Button onClick={handleCreateTask} color="primary">Create</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
};

export default TaskManager;
