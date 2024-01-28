import R from './ROBOT.png'
import { BsCursorFill } from "react-icons/bs";
import './Chat.css'

export default function Search(){
	return(
		<>
			<div className="ChatLog">
				<div className="AiChat">
					<img src={R} width={60}/>
					<div className='AiChatBox'>
						<div className='AiName'>검색 로봇</div>
						<div className='AiText'>안녕하세요. 웹툰에 관련된 질문을 해주세요</div>
					</div>
				</div>
				<div className="UserChat">
					<div className='UserText'>못생긴 주인공이 잘생겨지는 웹툰이 뭐였지?</div>
				</div>
				<div className="AiChat">
					<img src={R} width={60}/>
					<div className='AiChatBox'>
						<div className='AiName'>검색 로봇</div>
						<div className='AiText'>외모지상주의, 내 ID는 강남 미인이 있습니다.</div>
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