import { useNavigate } from 'react-router-dom';

import './Pages.css'
import CM from './images/CM.png'
import { BsSearch } from "react-icons/bs";


export default function CharacterPage(){
	const navigate = useNavigate();

	const handleClickSearch= () => {
		navigate('/page/search')
	}

	const handleClickCharacter = () => {
		navigate('/page/situation')
	}

	return(
		<div className='MainPageBackGround'>
			<div className='CharacterLargeTextSet'>
				<h2 className='MainPageLargeText'>웹툰 등장 인물과 대화해보세요!</h2>
				<BsSearch size={30} style={{marginLeft:'1%'}} onClick={handleClickSearch}/>
			</div>
			<div className='CharacterList'>
				{/* map 함수 이용해 아이템 추가 */}
				<div className='CharacterItem' onClick={handleClickCharacter}>
					<img src={CM} className='CharacterImg'/>
					<div className='CharacterDesc'>
						<h3 style={{fontWeight:"bold"}}>청명</h3>
						<div>네이버웹툰 화산귀환</div>
						<h2 style={{fontWeight:"bold"}}>"쫄리면 뒈지시던가"</h2>
					</div>
				</div>
			</div>
		</div>
	)
}