import React from 'react'
import { Container, Grid, Paper}  from '@material-ui/core/';
import  Post from '../components/Post/Post'

export default function Posts({list}) {
  return (
    <Container>
      <Grid container spacing={2}>
        {list.map(post =>(
          <Grid item key={post.id} xs={12} md={6} lg={4}>
            <Post post={post}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:5000/api/blog`)
  const data = await res.json()
  return {
    props: { list: data }, // will be passed to the page component as props
  }
}