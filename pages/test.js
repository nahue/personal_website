//const fs = require('fs');
//const path = require('path')

// const blog_path = __dirname + '/blog';
/*
const blog_pages = fs.readdirSync(blog_path)
	.filter(file => {
		return fs
			.lstatSync(path.join(blog_path,file))
			.isDirectory()
	});

blog_pages.forEach(function(directory) {

	const pages = fs.readdirSync(blog_path + '/' + directory)
	pages.forEach((page) => {
		console.log(directory + '/' + page)

	})
});
*/

//const blog_pages = JSON.parse(fs.readFileSync('../posts.json', 'utf8')).posts;
//console.log(blog_pages);
