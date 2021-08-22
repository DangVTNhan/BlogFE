import React from 'react'

export default function post({ postDetail}) {
  return (
    <div>
      <h1>{postDetail.updateAt}</h1>
    </div>
  )
}

export async function getStaticPaths(){
  return{
    fallback: 'blocking',
    paths:[
      {
        params:{
          slug: "dev-op"
        },
      },
      {
        params: {
          slug: "fe-for-be"
        }
      }
    ]
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug
  const res = await fetch(`http://localhost:5000/api/blog/${slug}`)
  const data = await res.json()
  return {
    props: { postDetail: data }, // will be passed to the page component as props
  }
}