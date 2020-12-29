import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


const RoomJoinPage = (props) => {
    // this.state or useState

    return (
        <Grid container spacing={1} alignItems="center">
            <Grid item xs={12}>
                <Typography variant="h4" component="h4">
                    Join a Room
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                error="error"
                label="Code"
                placeholder="Enter a Room Code"
                value={0} // cannot be empty
                helperText={0} // cannot be empty
                variant="outlined"
                />
            </Grid>
        </Grid>
    )
}

export default RoomJoinPage