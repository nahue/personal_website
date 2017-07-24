import React from 'react'
import styled from 'styled-components'
import Head from '../../../components/head'
import withLayout from '../../../hoc/layout';

export default withLayout(() => (
	<div>
		<Head>
			<title>Attach EBS Disk to AWS EC2 Instance</title>
		</Head>
		<h1>Attach EBS Disk to AWS EC2 Instance</h1>

		<pre dangerouslySetInnerHTML={{
			__html: `

		lsblk
		sudo file -s /dev/xvdb
		sudo mkfs -t ext4 /dev/xvdb

		# Get device id
		ls -lah /dev/disk/by-uuid/

		# Add to /etc/fstab
		UUID=copyuidhere       /home/web/public_html   ext4    defaults,nofail        0       2

		cd /home/web
		chown www-data:www-data public_html

		`}} />

	</div>
))
