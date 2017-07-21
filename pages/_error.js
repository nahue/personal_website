import React from 'react'
import styled from 'styled-components'

const ErrorContainer = styled.div`
	width: 100%;
	height: 100%;
	color: white;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	.img {
		background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/four.gif");
		background-size: cover;
		background-position: center;
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
	}

	.text {
		background-image: radial-gradient(50% 50%, ellipse closest-corner, rgba(0, 0, 0, 0) 1%, #000000 100%);
		width: 100%;
		height: 100%;
		text-align: center;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		h1 {
			color: white;
			font-size: 30px;
			padding-top: 330px;
			/*background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/logo-white.png");*/
			background-repeat: no-repeat;
			background-position: center 120px;
		}
		h2 {
			color: white;
		}
	}
`;

export default class Error extends React.Component {
	static getInitialProps({ res, jsonPageRes }) {
		const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null)
		return { statusCode }
	}

	render() {
		return (
			<ErrorContainer>
				<div className='img'></div>
				<div className='text'>
					<h1>Subject: Fire</h1>
					<h2>{
						this.props.statusCode
							? `An error ${this.props.statusCode} occurred on server`
							: 'An error occurred on client'
					}</h2>
				</div>
			</ErrorContainer>
		)
	}
}
