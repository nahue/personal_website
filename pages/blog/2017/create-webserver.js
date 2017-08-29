/*
slug: create-webserver
name: Create Webserver in AWS using Ubuntu
date: July 17, 2017
*/

import React from 'react'
import styled from 'styled-components'
import Head from '../../../components/head'
import Layout from '../../../components/layout';


export default () => (
	<Layout>
		<Head>
			<title>Create Webserver in AWS using Ubuntu</title>
		</Head>
		<h1>Create Webserver</h1>

		<p>This is originally intended as notes to myself... but who knows! it may be of help to someone else :)</p>

		<pre dangerouslySetInnerHTML={{
			__html: `

		sudo apt-get update
		sudo apt-get install language-pack-es apache2

		adduser --shell=/bin/false web

		chown root:web /home/web/
		chmod 755 /home/web/

		cd /home/web
		mkdir .ssh
		cd .ssh
		ssh-keygen -t rsa -f web

		touch authorized_keys
		cat web.pub > authorized_keys
		cd ..
		ssh-keygen -A
		chmod go-w /home/web/
		chown -R web:web .ssh/
		chmod 755 .ssh/
		chmod 755 .ssh/web
		chmod 600 .ssh/authorized_keys
		usermod -g www-data web
		mkdir /home/web/public_html
		chown -R www-data:www-data /home/web/public_html
		cp /var/www/html/index.html /home/web/public_html/
		chmod -R 775 /home/web/public_html

		`}} />

		Edit /etc/ssh/sshd_config

		<pre dangerouslySetInnerHTML={{
			__html: `
		#Subsystem sftp /usr/lib/openssh/sftp-server
		Subsystem sftp internal-sftp
		Match User web
			ChrootDirectory %h
			ForceCommand internal-sftp
			X11Forwarding no
			AllowTCPForwarding no

		/etc/init.d/ssh restart

		`}} />

		Edit /etc/apache2/sites-enabled/000-default.conf

		<pre dangerouslySetInnerHTML={{
			__html: `

		DocumentRoot /home/web/public_html

		&lt;Directory /home/web/public_html/&gt;
			Options FollowSymLinks
			AllowOverride All
			Require all granted
		&lt;/Directory&gt;

		`}} />
	</Layout>
)
