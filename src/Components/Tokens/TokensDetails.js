import {Button, Container, Grid, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import GeneratedTokens from './GeneratedToken'
import './index.css'
const init ={
    bCount:0,
    bTokenPrefix:"",
    bRowCount:3,
    rCount:0,
    rTokenPrefix:"",
    rRowCount:3,
}

function TokensDetails() {

   const [tokensDetails, setTokensDetails] =useState(init);
    const [blueTokens,setBlueTokens] = useState([]);
    const [redTokens,setRedTokens] = useState([]);
    const [rowCount,setRowCount] = useState({blueRowCount:0,redRowCount:0});

    const CalculateTokents=(e)=>{
        let bluearray=[];
        let redArray=[];
         for(let i =1; i<=tokensDetails.bCount; i++){
            let token = tokensDetails.bTokenPrefix+i;
            bluearray.push(token);

        }
        for(let j =1; j<=tokensDetails.rCount; j++){
            let token = tokensDetails.rTokenPrefix+j;
            redArray.push(token);
        }
        setBlueTokens(bluearray);
        setRedTokens(redArray);
        if(tokensDetails.bRowCount){
          let rSize = 12/tokensDetails.bRowCount
          setRowCount(e =>({...e,blueRowCount:rSize}))
        }
        if(tokensDetails.rRowCount){
          let rSize = 12/tokensDetails.rRowCount
          setRowCount(e=>({...e,redRowCount:rSize}))
        }
        
    }

    const handleChange =(e)=>{
        let id = e.target.id;
        let value = e.target.value;

        if(id === "blueCount"){
            setTokensDetails(e=>({...e,bCount:value}));
        }
        if(id === "blueTPrefix"){
            setTokensDetails(e=>({...e,bTokenPrefix:value}));
        }
        if(id === "blueRowCount"){
            setTokensDetails(e=>({...e,bRowCount:value}));
        }
        if(id === "redCount"){
            setTokensDetails(e=>({...e,rCount:value}));
        }
        if(id === "redTPrefix"){
            setTokensDetails(e=>({...e,rTokenPrefix:value}));
        }
        if(id === "redRowCount"){
            setTokensDetails(e=>({...e,rRowCount:value}));
        }
    }

  return (
      <Container maxWidth="lg">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ height: '100vh' }}
          
        >
          <Grid container  sx={{ height: '93vh' }} className="gridContainer">
            <Grid item xs={12} sm={6} md={4} sx={{bgcolor: '#fff',}}>
              <Typography variant='h4' sx={{textAlign:'center',marginTop:'30px'}}>Tokens Details</Typography>
              <Stack spacing={1} className="inputStack">
              <Typography variant='h6' sx={{color:'#4682B4'}}>Blue Token</Typography>
              <TextField
                id="blueCount" onChange={handleChange}
                label="Token Count"
                // helperText="Some important text"
                variant="standard"
              />
              <br />
              <TextField
                id="blueTPrefix"onChange={handleChange}
                label="Token Prefix"
                // helperText="Some important text"
                variant="standard"
                inputProps={{ maxLength: 2 }}
              />
              <br />
              <TextField
                id="blueRowCount"onChange={handleChange}
                label="Row Count"
                defaultValue={3}
                // helperText="Some important text"
                variant="standard"
              />
              </Stack>

             <Stack spacing={1} className="inputStack">
              <Typography variant='h6' sx={{color:'#DC143C'}}>Red Token</Typography>
              <TextField
               id="redCount" onChange={handleChange}
                label="Token Count"
                // helperText="Some important text"
                variant="standard"
              />
              <br />
              <TextField
               id="redTPrefix"onChange={handleChange}
                label="Token Prefix"
                inputProps={{ maxLength: 2}}
                // helperText="Some important text"
                variant="standard"
              />
              <br />
              <TextField
                id="redRowCount" onChange={handleChange}
                label="Row Count"
                defaultValue={3}
                // helperText="Some important text"
                variant="standard"
              />
              </Stack>
              <Stack direction="row" justifyContent="space-between" alignItems="center"  spacing={1} className="inputStack">
                <Button variant="outlined">Clear</Button>
                <Button variant="contained" onClick={CalculateTokents}>Submit</Button>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={8} sx={{ bgcolor: '#f3b8c4',}} className='GeneratedTokenStyle'> 
            <GeneratedTokens blueTokens={blueTokens} redTokens={redTokens} rowCount={rowCount}/>
            </Grid>
          </Grid>
          </Stack>
      </Container>
  )
}

export default TokensDetails