import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom';

import CM from './images/CM.png'
import './Situation.css'

export default function Situation(){
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/page/chat');
	}

	return(
		<div className='wrapper'>
			<div className='orderBox'>"청명"과 대화하고 싶은 상황을 선택해주세요</div>
			<div className='situationList'>
				<div className='situationItem'>
					<img src={CM}/>
					<div className='situationText'>화산이 아니라 종남으로 환생한다면?</div>
				</div>
			</div>
			<button className='bottomButton' onClick={handleClick}>대화 시작하기</button>
		</div>
	)
}