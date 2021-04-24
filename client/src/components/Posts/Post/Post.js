import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import expanded from 'react-expand-animated';
import handleExpandClick from '@material-ui/core/Collapse';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';



const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          ?
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      
      title={moment(post.createdAt).fromNow()}
      subheader={post.Gouvernorat}
      
    />

      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />

    <CardContent>

<Typography paragraph className={classes.categorie} >
  #{post.categorie}
  </Typography>

      <Typography variant="body2" color="textSecondary" component="p">
        <Typography>Interval D'age:</Typography>
      {post.intervaleage.map((intervaleage) => `${intervaleage} `)}
      </Typography>
      <Typography>ville:</Typography>

      <Typography paragraph className={classes.vile} >
        {post.vile}
        </Typography>

    

    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
      <Typography paragraph><h5>Titre</h5></Typography>

      <Typography paragraph className={classes.Titre} >
        {post.Titre}
        </Typography>


<Typography paragraph><h5>Description</h5></Typography>

<Typography paragraph className={classes.description} >
        {post.description}
        </Typography>


        <Typography paragraph><h5>Contact</h5></Typography>
        <Typography paragraph className={classes.email} gutterBottom variant="h9" component="h1" >
        {post.email}        </Typography>
        <Typography paragraph className={classes.tel } >
        {post.tel }
        </Typography>

        
        <Typography>
        </Typography>
      </CardContent>
    </Collapse>
    <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>

  </Card>
  );
};

export default Post;
