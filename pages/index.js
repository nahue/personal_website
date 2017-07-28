import React from 'react';
import styled from 'styled-components';
import Head from '../components/head';
import Layout from '../components/layout';

const CVSection = styled.section`
  h2 { font-weight: bold; }
  li {
	  span {
		  font-weight: bold;
	  }
  }
`;

export default () => (
  <Layout>
		<Head title="Nahuel Chaves" />
		<h1>Experience</h1>

		<CVSection>
			<h2>Zentricx</h2>
			<ul>
				<li><span>Position:</span> DevOps</li>
				<li><span>Date:</span> May 2017 - Present</li>
				<li>
					<span>What i do:</span> Manage a multicloud environment (Azure and AWS). Also im
					involved in ASP.NET development for one of their clients.
				</li>
			</ul>
		</CVSection>

		<CVSection>
			<h2>Valley Works</h2>
			<ul>
				<li><span>Position:</span> Senior Software Engineer</li>
				<li><span>Date:</span> December 2014 - Present</li>
				<li>
					<span>What i do:</span> My main role is to develop apps in Python and Javascript,
					i like to use frameworks like Django or Flask with Python, and React with Javascript.
					Also i do a devops-like job, since i have a large experience managing linux servers,
					dns, mail and webservers.
				</li>
			</ul>
		</CVSection>

		<CVSection>
			<h2>CENT 11 - Tertiary College</h2>
			<ul>
				<li><span>Position:</span> C# Software Developer</li>
				<li><span>Date:</span> Jan 2014 - Dec 2016</li>
				<li>
					<span>What i did:</span>
					Developed a custom­-made CRM to manage employees, students and their educacional status.
				</li>
			</ul>
		</CVSection>

		<CVSection>
			<h2>TGI Social México</h2>
			<ul>
				<li><span>Position:</span> Web Developer</li>
				<li><span>Date:</span> Mar 2013 - Jan 2015</li>
				<li>
					<span>What i did:</span> Managed the website and offer consultant services to their clients.
				</li>
			</ul>
		</CVSection>

		<CVSection>
			<h2>ECGC & CIMA PRODUCCIONES</h2>
			<ul>
				<li><span>Position:</span> Web Developer</li>
				<li><span>Date:</span> Jan 2011 - Feb 2015</li>
				<li>
					<span>What i did:</span> Managed the website and offer consultant services to their clients.
				</li>
			</ul>
		</CVSection>

		<CVSection>
			<h2>Tierra del Fuego Government</h2>
			<ul>
				<li><span>Position:</span> Server Administration Department</li>
				<li><span>Date:</span> Sept 2009 - Present</li>
				<li>
					<span>What i do:</span>
					<ul>
						<li>User Support.</li>
						<li>Physical and Virtual Infraestructure Maintenance.</li>
						<li>LAN and MAN network planning and maintenance.</li>
					</ul>
				</li>
			</ul>
		</CVSection>

		<CVSection>
			<h2>Boot Computers</h2>
			<ul>
				<li><span>Position:</span> IT</li>
				<li><span>Date:</span> Jun 2008 - Nov 2008</li>
				<li>
					<span>What i did:</span> User support, sales, IT department.
				</li>
			</ul>
		</CVSection>

		<CVSection>
			<h2>Teknoisla</h2>
			<ul>
				<li><span>Position:</span> IT</li>
				<li><span>Date:</span> Feb 2007 - Dec 2008</li>
				<li>
					<span>What i did:</span> User support, sales, IT department.
				</li>
			</ul>
		</CVSection>

		<CVSection>
			<h2>Regi-Data</h2>
			<ul>
				<li><span>Position:</span> IT</li>
				<li><span>Date:</span> Nov 2005 - Feb 2007</li>
				<li>
					<span>What i did:</span> User support, sales, IT department.
				</li>
			</ul>
		</CVSection>

		<CVSection>
			<h2>AFIP - DGI Ushuaia</h2>
			<ul>
				<li><span>Position:</span> Intern - IT</li>
				<li><span>Date:</span> Jun 2003 - Oct 2003</li>
				<li>
					<span>What i did:</span> User support, IT department.
				</li>
			</ul>
		</CVSection>
	 </Layout>
);
