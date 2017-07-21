import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Row, Col } from 'react-flexa';
import Sidebar from '../components/sidebar';

export default class MyDocument extends Document {
	render () {
		const sheet = new ServerStyleSheet()
		const main = sheet.collectStyles(<Main />)
		const styleTags = sheet.getStyleElement()
		return (
			<html>
				<Head>
					<title>My page</title>
					{styleTags}
					<link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" type="text/css"/>
					<script src="https://use.fontawesome.com/bb69b38731.js"></script>
					<link rel="stylesheet" href="https://cdnjs.com/libraries/10up-sanitize.css" />
					<link rel="stylesheet" type="text/css" href="/static/global.css" />
				</Head>
				<body>

					{main}

					<NextScript />
				</body>
			</html>
		)
	}
}
