import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './Pages.css'

export default function MainPage(){
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/character')
	}

	return(
		<div className='MainPageBackGround'>
			<div className='MainPageLargeTextSet'>
				<h1 className='MainPageLargeText'>현실 세계의 내가</h1>
				<h1 className='MainPageLargeText'>웹툰 속 세상에</h1>
				<h1 className='MainPageLargeText'>들어가게 되었다?!</h1>
			</div>
			<div className='MainPageSmallTextSet'>
				<h2 className='MainPageSmallText'>좋아하는 웹툰 등장 인물과 대화하고</h2>
				<h2 className='MainPageSmallText'>네컷 만화를 만들어보세요!</h2>
			</div>
			<Button variant='primary' className='StartButton' onClick={handleClick}>등장 인물 찾아보기</Button>
		</div>
	)
}