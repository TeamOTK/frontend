import CM from './images/CM.png'
import { BsCursorFill } from "react-icons/bs";
import './Chat.css'

import SubHeader from './Header/SubHeader';
import ChatHeader from './Header/ChatHeader';

export default function Chat(){
	return(
		<>
			<SubHeader name='청명'/>
			<ChatHeader content='원작의 청명과 재밌게 대화해보세요!'/>
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