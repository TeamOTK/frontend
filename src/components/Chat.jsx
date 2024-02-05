import { useNavigate } from 'react-router-dom';

import CM from './images/CM.png'
import { BsCursorFill } from "react-icons/bs";
import './Chat.css'
import { BsChevronLeft } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import SubHeader from './Header/SubHeader';
import ChatHeader from './Header/ChatHeader';

export default function Chat(){
	const navigate = useNavigate();
	const handleClickSearch= () => {
		navigate('/page/search')
	}

	const onClickButton = () => {
		navigate(-1);
	}
	return(
		<>
			<div className='ChattingHeader'>
				<BsChevronLeft size={25} onClick={onClickButton}/>
				<h2 className="text">청명</h2>
				<BsSearch size={30} style={{marginRight:'3%',fontWeight:'bold'}} onClick={handleClickSearch}/>
			</div>
			<ChatHeader content='원작의 청명과 재밌게 대화해보세요! (상황에서 넘어올시 변경되도록 할 예정)'/>
			<div className="ChatLog">
				<div className="AiChat">
					<img src={CM} width={60}/>
					<div className='AiChatBox'>
						<div className='AiName'>청명</div>
						<div className='AiText'>안녕, 오랜만이네</div>
					</div>
				</div>
				<div className="UserChat">
					<div className='UserText'>종남파랑 대결 어땠어? 이겼어?</div>
				</div>
				<div className="AiChat">
					<img src={CM} width={60}/>
					<div className='AiChatBox'>
						<div className='AiName'>청명</div>
						<div className='AiText'>안녕, 오랜만이네</div>
					</div>
				</div>
			</div>
			<div className='d-flex justify-content-center' style={{height:'6%'}}>
				<div className="InputBox">
					<input type='text'className='InputBoxText' placeholder='메세지를 입력하세요'></input>
					<BsCursorFill size={24} style={{color:'black'}}/>
				</div>
				
			</div>
			
		</>
	)
}