/*
	Code inspided by/borrowed from https://github.com/rauchg/blog
	Gracias Guillermo sos un crack!
*/

import React from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Link from 'next/link';
import { posts } from '../posts'
import withLayout from '../hoc/layout';

export default withLayout(() => (
	<div>
		<h1>Blog</h1>
		<div className="posts">
			{
				posts.map(({ id, date, title }) => (
					<Post
						id={id}
						key={id}
						date={date}
						title={title}
					/>
				))
			}
		</div>
	</div>
));

const Post = ({ id, date, title }) => (
  <div className="post">
    <span className="date">{ date }</span>
    <Link href={`/blog/${new Date(date).getFullYear()}/${id}`}><a>{ title }</a></Link>

    <style jsx>{`
      .post {
        margin-bottom: 10px;
      }
      .date {
        display: inline-block;
        width: 140px;
        text-align: right;
        margin-right: 30px;
        color: #999;
      }
      a {
        text-decoration: none;
      }
      @media (max-width: 500px) {
        .post {
          margin-bottom: 15px;
        }
        .date {
          display: block;
          width: inherit;
          text-align: inherit;
          font-size: 11px;
          color: #ccc;
          margin-bottom: 5px;
        }
      }
    `}</style>
  </div>
)
