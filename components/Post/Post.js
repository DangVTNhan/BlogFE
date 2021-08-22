import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, IconButton, MoreVertIcon, Avatar, CardContent, Typography, CardActions, CardMedia} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));


export default function Post( { post } ) {
  const classes = useStyles();
  const [point, setPoint] = useState(post.upVotes)


  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          title={post.title}
          subheader={post.updateAt}
        />

        <CardMedia
          className={classes.media}
          image="/images/SolidLogo.png"
          title="Default Logo"
        />
        
        <CardContent>
          <Typography variant="body2" color="primary" component="p">
            {post.Desciption}
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          
          <IconButton onClick={() => {
            let newPoint = point + 1;
            setPoint(newPoint)
          }} aria-label="up vote">
            <ThumbUpAltOutlinedIcon />
            <span>{point}</span>
          </IconButton>
          
        </CardActions>
      </Card>
    </div>
  )
}
