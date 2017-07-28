import Link from 'next/link';
import Head from 'next/head';
import { Row, Col } from 'react-flexa';
import Sidebar from './sidebar';
import styled from 'styled-components';
import Menu from 'react-burger-menu/lib/menus/push';

const showSettings = (event) => {
	event.preventDefault();
}
const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#ffffff',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const StyledMenu = styled(Menu)`
	a { color: white }
`;

const Page = styled.div`
	@media (max-width: 78rem) {
		padding-top: 80px;
		padding-left: 10px;
		padding-right: 10px;
	}
`;

export default ({ children, title = 'This is the default title' }) => (
	<div>
		<Head>
			<title>{ title }</title>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" />
			<style>{`
				body, html {
					padding:0; margin: 0;
				}
				* { overflow-wrap: break-word; }
			`}</style>
		</Head>
		<div id="container">
			<StyledMenu styles={styles} pageWrapId={ "page" } outerContainerId={ "container" }>
				<li><Link href="/">Experience</Link></li>
				<li><Link href="/blog">Blog</Link></li>
			</StyledMenu>
			<Page id="page">
				<Row justifyContent="center" gutter={{ xs: 1, lg: 2 }} style={{
					maxWidth: 1000,
					marginLeft: 'auto',
					marginRight: 'auto',
					paddingTop: 30
				}}>

					<Col md={3} xs={12}>

						<Sidebar />
					</Col>
					<Col md={9} xs={12}>
						<div className='root'>
							{ children }
						</div>
					</Col>
				</Row>
			</Page>
		</div>
	</div>
)
