import Link from 'next/link';
import styled from 'styled-components';

const Sidebar = styled.div`
	h1 {
		font-size: 18px;
		font-weight: 500;
		line-height: 18px;
		margin: 20px 0 10px;

		& > a {
			text-decoration: none;
			border-bottom: none;
			color: inherit;
		}
	}
`;

const SidebarSubtitle = styled.p`
	color: #888;
	font-size: 16px;
	line-height: 26px;
	margin-bottom: 26px;
`;

const ProfileImage = styled.img`
	display: inline-block;
	margin-bottom: 0;
	border-radius: 50%;
	background-clip: padding-box;
`;

const SocialNetworks = styled.div`
	margin-top: 30px;
	ul:after, ul:before {
		content: " ";
		display: table;
	}
	ul {
		&:after {
			clear: both;
		}
		list-style: none;
		padding: 0;
		margin: 10px 0;
		zoom: 1;

		& > li {

			background: #f4f4f4;
			float: left;
			margin-right: 5px;
			text-align: center;
			height: 24px;
			width: 24px;
			border-radius: 3px;

			& > a {
				border-bottom: 0;

				& > i {
					color: #606060;
					font-size: 14px;
					line-height: 24px;
				}
			}
		}
	}
`;

export default () => (
	<Sidebar>
		<header>
			<a href="/">
			<ProfileImage src="/static/images/057529c6627e5d77f9630a12aad8f8a0.jpg" width="75" height="75" alt="Profile picture of the author" />
			</a>
			<h1>
			<a href="/">
				Victor Nahuel Chaves
			</a>
			</h1>

			<SidebarSubtitle>Senior Software Engineer</SidebarSubtitle>
		</header>
		<footer>
			<SocialNetworks>
				<ul>
					<li>
						<a href="https://twitter.com/nchaves1986"><i className="fa fa-twitter" /></a>
					</li>
					<li>
						<a href="https://github.com/nahue"><i className="fa fa-github-alt" /></a>
					</li>
					<li>
						<a href="mailto:nahuel.chaves@gmail.com"><i className="fa fa-envelope-o" /></a>
					</li>
				</ul>
			</SocialNetworks>
		</footer>
	</Sidebar>
)
