import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Purchase.css';
import Footer from '../Shared/Footer/Footer';

const Purchase = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://salty-inlet-11821.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    const name = product.name;
    const onSubmit = data => {
        const dataInfo = {
            ...data,
            status: "pending",
            title: name
        }
        fetch('https://salty-inlet-11821.herokuapp.com/purcheases', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dataInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Purchase processed Successfully');
                    reset();
                }
            })
    };
    return (
        <Box>
            <Box>
                <Navigation></Navigation>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={6}>
                        <Box>
                            <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={user.displayName} {...register("name")} />
                                <input defaultValue={user.email} {...register("email", { required: true })} />
                                {errors.email && <span className="error">This field is required</span>}
                                <input placeholder="Address" defaultValue="" {...register("address")} />
                                <input placeholder="City" defaultValue="" {...register("city")} />
                                <input placeholder="Phone" defaultValue="" {...register("phone")} />
                                <input style={{ backgroundColor: 'teal', color: 'white' }} type="submit" />
                            </form>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={4} md={6}>

                    </Grid>
                </Grid>
            </Box>

            <Box>
                <Footer></Footer>
            </Box>
        </Box>
    );
};


export default Purchase;