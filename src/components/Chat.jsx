import CM from './CM.png'
import { BsCursorFill } from "react-icons/bs";
import './Chat.css'

export default function Chat(){
	return(
		<>
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
					<div className='InputBoxText'>메세지를 입력하세요</div>
					<BsCursorFill size={24} style={{color:'black'}}/>
				</div>
				
			</div>
			
		</>
	)
}