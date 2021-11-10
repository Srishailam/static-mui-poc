import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  const {
    title,
    subTitle,
    amount,
    date,
    type
  } = props;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 2.5 }}>
          {title}
        </Typography>
        <Typography color="text.secondary">
          {subTitle}
        </Typography>
        <Typography variant="body1">
          {amount}
        </Typography>
        <Typography color="text.secondary">
          Due on: {date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{type}</Button>
      </CardActions>
    </Card>
  );
}
const paymentsData = [{
  title:'Premium Payment',
  subTitle:'premium amount due',
  date:'08/21/2021',
  type:'past due',
  amount:'$125'
},{
  title:'Premium Payment',
  subTitle:'premium amount due',
  type:'due',
  date:'08/21/2021',
  amount:'$125'
},{
  title:'Premium Payment',
  subTitle:'premium amount due',
  type:'scheduled',
  date:'08/21/2021',
  amount:'$125'
}];
const Payment = ({
  title,
  subTitle,
  amount,
  date,
  type
}) => {
 return (
   <div className="Payment">
     <div className="Title">{title}</div>
      <div className="PaymentInfo">
        <div className="SubTitle">{subTitle}</div>
        <div className="Amount">{amount}</div>
        <div className="Date">Due on {date}</div>
      </div>
     <div className="Type">{type}</div>
   </div>
 );
}
export const Payments = () => {
  return (
    <Box display="flex" justifyContent="space-between" margin="1rem 1rem" padding="1rem 1rem">
      {paymentsData.map(payment => <BasicCard key={payment.type} {...payment}/>)}
    </Box>
  )
}
