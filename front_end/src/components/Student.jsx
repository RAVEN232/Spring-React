import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper ,Button} from '@mui/material';
import axios from 'axios';

export default function Student() {
  const paperStyle = {
    padding: '50px 20px', 
    margin: '20px auto', 
    width: 600 
  };
  const buttonWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px' // Adjust margin as needed
  };
  const [name,setName] = useState('')
  const [adress,setAdress]= useState('')

  const handleClick=(e)=>{
    e.preventDefault()
    const student = {name,adress}
    console.log(student)
    axios.post('http://localhost:8080/student/add', student, {
    headers: {
        'Content-Type': 'application/json'
    }
    })
    .then(response => {
    console.log('New student added!');
    })
    .catch(error => {
    console.error('Error adding new student:', error);
    });
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1>Add Student</h1>
          <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth 
          value={name} 
          onChange={(e)=>setName(e.target.value)}
        />
          <TextField id="standard-basic" label="Student Address" variant="standard" fullWidth
          value={adress} 
          onChange={(e)=>setAdress(e.target.value)}
          />
          <Box style={buttonWrapperStyle}> 
            <Button variant="contained" onClick={handleClick}>Submit</Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
