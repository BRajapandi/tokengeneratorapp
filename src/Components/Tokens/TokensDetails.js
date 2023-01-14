import {Button, Container, Grid, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import GeneratedTokens from './GeneratedToken'
import './index.css'
const init ={
    bCount:"",
    bTokenPrefix:"",
    bRowCount:"",
    rCount:"",
    rTokenPrefix:"",
    rRowCount:"",
}

function TokensDetails() {

   const [tokensDetails, setTokensDetails] = useState(init);
    const [blueTokens,setBlueTokens] = useState([]);
    const [redTokens,setRedTokens] = useState([]);
    const [rowCount,setRowCount] = useState({blueRowCount:0,redRowCount:0});
    const [error,setError] = useState({bCountErr:"",bRCountErr:"",rCountErr:"",rRCountErr:""})

    const CalculateTokents=(e)=>{
        let bluearray=[];
        let redArray=[];
        let valid = true;
      
        if(tokensDetails.bCount === ""){
          valid=false;
          setError(e=>({...e,bCountErr:"This field was mantatory"}))
        }else if(tokensDetails.bRowCount === ""){
          valid=false;
          setError(e=>({...e,bRCountErr:"This field was mantatory"}))
        }else if(tokensDetails.rCount === ""){
          valid=false;
          setError(e=>({...e,rCountErr:"This field was mantatory"}))
        }else if(tokensDetails.rRowCount === ""){
          valid=false;
          setError(e=>({...e,rRCountErr:"This field was mantatory"}))
        }


        if(valid){
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
    }

    const handleChange =(e)=>{
        let id = e.target.id;
        let value = e.target.value;
        const regex = /^[0-9\b]+$/;

        if(id === "blueCount"){
          if(regex.test(value) ||value ===""){
            setTokensDetails(e=>({...e,bCount:value}));
            setError(e=>({...e,bCountErr:""}))
          }else{
            setError(e=>({...e,bCountErr:"Enter a number only"}))
          }
        }
        if(id === "blueTPrefix"){
            setTokensDetails(e=>({...e,bTokenPrefix:value}));
        }
        if(id === "blueRowCount"){
           if(regex.test(value) ||value ===""){
            if(value > 10){
              setError(e=>({...e,bRCountErr:"10 Count only allowed per row"}))
            }else{
            setTokensDetails(e=>({...e,bRowCount:value}));
            setError(e=>({...e,bRCountErr:""}))
            }
          }else{
            setError(e=>({...e,bRCountErr:"Enter a number only"}))
          }
            
        }
        if(id === "redCount"){
           if(regex.test(value) ||value ===""){
            setTokensDetails(e=>({...e,rCount:value}));
            setError(e=>({...e,rCountErr:""}))
          }else{
            setError(e=>({...e,rCountErr:"Enter a number only"}))
          }
            
        }
        if(id === "redTPrefix"){
            setTokensDetails(e=>({...e,rTokenPrefix:value}));
        }
        if(id === "redRowCount"){
          if(regex.test(value) ||value ===""){
            if(value > 10){
              setError(e=>({...e,rRCountErr:"10 Count only allowed per row"}))
            }else{
            setTokensDetails(e=>({...e,rRowCount:value}));
            setError(e=>({...e,rRCountErr:""}))
            }
          }else{
            setError(e=>({...e,rRCountErr:"Enter a number only"}))
          }
            
        }
    }

    const ClearAllDetails =()=>{
      setTokensDetails(init);
      setRedTokens([]);
      setBlueTokens([]);
      setRowCount({blueRowCount:0,redRowCount:0});
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
            <Grid item xs={12} md={4} sx={{bgcolor: '#fff',}}>
              <Typography variant='h4' sx={{textAlign:'center',marginTop:'30px'}} className="TokensDetailStyle">Tokens Details</Typography>
              <Stack className="inputStack" spacing={1}>
              <Typography variant='h6' sx={{color:'#4682B4'}}>Blue Token</Typography>
              <TextField
                id="blueCount" onChange={handleChange}
                label="Token Count"
                value={tokensDetails.bCount}
                helperText={error.bCountErr}
                variant="standard"
                error={error.bCountErr ===""?false:true}
                inputProps={{ maxLength: 3 }}
              />
              <TextField
                id="blueTPrefix"onChange={handleChange}
                label="Token Prefix"
                value={tokensDetails.bTokenPrefix}
                // helperText="Some important text"
                variant="standard"
                inputProps={{ maxLength: 2 }}
              />
              <TextField
                id="blueRowCount"onChange={handleChange}
                label="Row Count"
                value={tokensDetails.bRowCount}
                helperText={error.bRCountErr}
                error={error.bRCountErr ===""?false:true}
                variant="standard"
              />
              </Stack>

             <Stack  className="inputStack" spacing={1}>
              <Typography variant='h6' sx={{color:'#DC143C'}}>Red Token</Typography>
              <TextField
               id="redCount" onChange={handleChange}
                label="Token Count"
                value={tokensDetails.rCount}
                helperText={error.rCountErr}
                error={error.rCountErr ===""?false:true}
                variant="standard"
                inputProps={{ maxLength: 3 }}
              />
              <TextField
               id="redTPrefix"onChange={handleChange}
                label="Token Prefix"
                inputProps={{ maxLength: 2}}
                value={tokensDetails.rTokenPrefix}
                // helperText="Some important text"
                variant="standard"
              />
              <TextField
                id="redRowCount" onChange={handleChange}
                label="Row Count"
                value={tokensDetails.rRowCount}
                helperText={error.rRCountErr}
                error={error.rRCountErr ===""?false:true}
                variant="standard"
              />
              </Stack>
              <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} className="inputStack">
                <Button variant="outlined" onClick={ClearAllDetails}>Clear</Button>
                <Button variant="contained" onClick={CalculateTokents}>Submit</Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={8} sx={{ bgcolor: '#f3b8c4',}} className='GeneratedTokenStyle'> 
            <GeneratedTokens blueTokens={blueTokens} redTokens={redTokens} rowCount={rowCount}/>
            </Grid>
          </Grid>
          </Stack>
      </Container>
  )
}

export default TokensDetails