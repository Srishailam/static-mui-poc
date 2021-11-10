import React from 'react'
import Typography from '@mui/material/Typography';
export const SubHeader = ({text}) => {
  return (
    <Typography className="SubHeader" variant="h5">
      {text}
    </Typography>
  )
}
