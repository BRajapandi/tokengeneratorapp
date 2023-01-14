import { Grid, Typography } from '@mui/material'
import React from 'react'
import Token from '../Token/Token'
import './index.css'

function GeneratedTokens({blueTokens,redTokens,rowCount}) {
  return (
    <>
    <Typography variant='h4' sx={{textAlign:'center',marginTop:'30px'}}>Generated Tokens</Typography>
    <Typography variant='h6' >Blue Tokens</Typography>
     <Grid container>
                {blueTokens.length >0 ? blueTokens.map((e,index)=>(
                    <Grid item xs={rowCount.blueRowCount} key={index} className="generatedTokenGrid"> 
                        <Token prefix={e} color="blue"/>
                    </Grid>
                )):<Grid item xs={12} className="NoTokenStyle">No Blue Token</Grid>}
    </Grid>
    <br />
    <Typography variant='h6'>Red Tokens</Typography>
    <Grid container>
                {redTokens.length >0 ? redTokens.map((e,index)=>(
                    <Grid item xs={rowCount.redRowCount} key={index} className="generatedTokenGrid"> 
                        <Token prefix={e} color="red"/>
                    </Grid>
                )):<Grid item xs={12} className="NoTokenStyle">No Red Token</Grid>}
    </Grid>
    </>
  )
}

export default GeneratedTokens