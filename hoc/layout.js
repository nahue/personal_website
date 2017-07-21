import { Row, Col } from 'react-flexa';
import Sidebar from '../components/sidebar';

const Layout = (InnerComponent) => {
	return (props) => (
		<Row justifyContent="center" gutter={{ xs: 1, lg: 2 }} style={{
			maxWidth: 1000,
			marginLeft: 'auto',
			marginRight: 'auto',
			marginTop: 20
		}}>
			<Col md={3} xs={12}>
				<Sidebar />
			</Col>
			<Col md={9} xs={12}>
				<div className='root'>
					<InnerComponent {...props} />
				</div>
			</Col>
		</Row>
  );
};

export default Layout;
