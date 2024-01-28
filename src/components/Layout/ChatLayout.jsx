import { Outlet } from 'react-router-dom';

import SubHeader from '../Header/SubHeader';

export default function ChatLayout(){
	return(
		<div style={{height:'92%'}}>
			<SubHeader/>
			<Outlet />
		</div>
	)
}