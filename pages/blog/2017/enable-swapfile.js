/*
slug: enable-swapfile
name: Enable Swapfile in Debian based VM
date: July 24, 2017
*/
import React from 'react'
import styled from 'styled-components'
import Head from '../../../components/head'
import Layout from '../../../components/layout';

export default () => (
	<Layout>
		<Head>
			<title>Enable Swapfile in Debian based VM</title>
		</Head>
		<h1>Enable Swapfile in Debian based VM</h1>

		<pre dangerouslySetInnerHTML={{
			__html: `

		sudo dd if=/dev/zero of=/mnt/swapfile bs=1M count=2048
		sudo chown root:root /mnt/swapfile
		sudo chmod 600 /mnt/swapfile
		sudo mkswap /mnt/swapfile
		sudo swapon /mnt/swapfile
		echo "/mnt/swapfile swap swap defaults 0 0" | sudo tee -a /etc/fstab
		swapon -a

		`}} />

	</Layout>
)
