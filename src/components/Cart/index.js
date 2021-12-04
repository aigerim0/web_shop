import React from 'react';
import {Container, Typography, Button, Grid} from "@material-ui/core";

import useStyles from './style'

const Cart = ({ cart }) => {
    const isEmpty = !cart.line_items.length

    const classes = useStyles()
    const EmptyCart = () => {
        return <Typography variant="subtitle1">
            You are no item in your shopping cart, start addin some!
        </Typography>
    }
    const FilledCart = () => {
        return <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>{item.name}</div>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h4'>
                    Subtotal: {cart.subtotal.formatted_width_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size='large' type='button' variant='contained'
                            color='secondary'>
                        Empty Cart
                    </Button>
                    <Button className={classes.checkoutButton} size='large' type='button' variant='contained'
                            color='primary'>
                        Checkout Cart
                    </Button>
                </div>
            </div>
        </>
    }
    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant='h3'>Your Shopping Cart</Typography>
            {
                isEmpty ?
                    <EmptyCart/> :
                    <FilledCart/>
            }
        </Container>
    );
};

export default Cart;