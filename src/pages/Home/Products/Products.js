import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const { products } = useProducts();
    console.log(products)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h4" color="text.secondary" sx={{ my: 4 }}>
                    Our Products
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3, mx: 'auto' }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.slice(0, 6).map(product => <Grid container item xs={4} sm={4} md={4} >
                            <Product
                                key={product._id}
                                product={product}>
                            </Product>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;