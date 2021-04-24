import Form from './components/Form/Form';
import React, { useState, useEffect } from 'react';

const redirectionform = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
        <Container maxWidth="lg">
          <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center"></Typography>
            <img className={classes.image} src={memories} alt="icon" height="60" />
          </AppBar>
          <Grow in>
            <Container>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
              <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={20} sm={7}>
                </Grid>
                <Grid item xs={20} sm={4}>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit"   fullWidth>Ajouter un Activitée</Button>
                  
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>
      );
    };
    export default redirectionform;
