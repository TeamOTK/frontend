import { BsJustify } from "react-icons/bs";
import './MainHeader.css'

export default function MainHeader(){
	return(
		<header>
			<div className='header'>
				<BsJustify size={52} style={{marginLeft:'10px'}}/>	
			</div>
		</header>
	)
}