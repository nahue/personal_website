/*
	Code inspided by/borrowed from https://github.com/rauchg/blog
	Gracias Guillermo sos un crack!
*/

import React from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Link from 'next/link';
import { posts } from '../posts';
import preval from 'preval.macro';
import Layout from '../components/layout';


const blog_pages = preval`
	const fs = require('fs');
	const path = require('path');
	const result = [];
	const blog_path = __dirname + '/blog';

	const blog_pages = fs.readdirSync(blog_path)
		.filter(file => {
			return fs
				.lstatSync(path.join(blog_path,file))
				.isDirectory()
		});

	blog_pages.forEach(function(directory) {

		const pages = fs.readdirSync(blog_path + '/' + directory);
		console.log(pages);
		pages.forEach((page) => {
			const data = fs.readFileSync(blog_path + '/' + directory + '/' + page, 'utf8');
			const lines = data.split('\\n');
			const slug = lines[1].split(':')[1].trim();
			const name = lines[2].split(':')[1].trim();
			const date = lines[3].split(':')[1].trim();
			result.push({
				slug,
				name,
				date
			});
		})
	});
	module.exports = result;
`

export default () => (
	<Layout>
		<h1>Blog</h1>
		<div className="posts">
			{
				blog_pages.map((page) => (
					<Post
						key={blog_pages.indexOf(page)}
						slug={page.slug}
						name={page.name}
						date={page.date}
					/>
				))
			}
		</div>
	</Layout>
);

const Post = ({ slug, name, date }) => (
  <div className="post">
    <span className="date">{ date }</span>
    <Link href={`/blog/${new Date(date).getFullYear()}/${slug}`}><a>{ name }</a></Link>

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
