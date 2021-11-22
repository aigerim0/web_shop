import React from 'react';
import {Grid} from "@material-ui/core";


import Product from "../Product";
import useStyles from './style'

const products = [
    {
        id: 1,
        name: 'Shoes',
        description: 'Running shoes.',
        price:'$5',
        image:'https://m.media-amazon.com/images/I/51q2t2DUpaL._AC_SL1001_.jpg'
    },
    {
        id: 2,
        name: 'Macbook',
        description: 'Apple macbook.',
        price:'$5',
        image:'https://helios-i.mashable.com/imagery/reviews/03y8gbj1mqCuexgXxFJ5vyX/hero-image.fill.size_1248x702.v1623391330.jpg'
    }

]

const Products = () => {
    const classes = useStyles()
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {
                    products.map((product) =>
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product}/>
                        </Grid>
                    )
                }
            </Grid>
        </main>
    );
};

export default Products;