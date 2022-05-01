import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function App () {
  const _date = new Date();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TODO App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
       <Container maxWidth="sm">
    
    <Card sx={{ minWidth: 275 , marginTop:15 }}>
    <CardHeader
      
        title="Add a Task"
        subheader={`${_date}`}
      />
      <CardContent>
        <Stack spacing = {2}>
      <TextField
          label="Title"
          id="Title-id"
          defaultValue="Enter a title"
          size="small"
          fullWidth
          autoFocus
        />
        <TextField
        multiline
          label="Description"
          id="Title-id"
          defaultValue="Enter a description"
          size="small"
          fullWidth
        
        />
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">ADD</Button>
      </CardActions>
    </Card>
    </Container>

    </div>
  );
}