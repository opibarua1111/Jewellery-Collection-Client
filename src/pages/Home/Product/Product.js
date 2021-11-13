import { Card, CardContent, CardHeader, CardMedia, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { _id, name, description, img, price } = props.product;
    return (
        <Card>
            <CardHeader
                title={name}
            />
            <CardMedia
                component="img"
                height="194"
                image={img}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    $ {price}
                </Typography>
                <Link to={`/purchase/${_id}`}>
                    <Button variant="contained">Purchase Now</Button>
                </Link>
            </CardContent>
        </Card>
    );
};

export default Product;