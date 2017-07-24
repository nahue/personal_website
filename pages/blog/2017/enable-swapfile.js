import React from 'react'
import styled from 'styled-components'
import Head from '../../../components/head'
import withLayout from '../../../hoc/layout';

export default withLayout(() => (
	<div>
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

	</div>
))
