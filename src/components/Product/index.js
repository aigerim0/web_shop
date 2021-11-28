import React from 'react';
import {Card,CardMedia, CardContent,CardActions,Typography,IconButton} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";

import useStyles from './style'

const Product = ({ product }) => {
    const classes = useStyles()
    console.log(product)
    return <div>
        qwert
    </div>

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media}  title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" >
                        {product.price.formatted_with_symbol}
                    </Typography>

                </div>
                <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color='textSecondary'/>

            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Card">
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Product;