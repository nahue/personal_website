/*const fs = require('fs');
const path = require('path')

const blog_path = __dirname + '/blog';

const blog_pages = fs.readdirSync(blog_path)
	.filter(file => {
		return fs
			.lstatSync(path.join(blog_path,file))
			.isDirectory()
	});

const result = []
blog_pages.forEach(function(directory) {

	const pages = fs.readdirSync(blog_path + '/' + directory)
	pages.forEach((page) => {
		const data = fs.readFileSync('./blog/' + directory + '/' + page, 'utf8');
		var lines = data.split("\n");
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

console.log(result);

*/
//const blog_pages = JSON.parse(fs.readFileSync('../posts.json', 'utf8')).posts;
//console.log(blog_pages);
