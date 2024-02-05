import CM from './images/CM.png'
import './Character_Fiction_Page.css'

export default function CharacterFicion({handleClickCharacter}) {
	
	return(
		<>
			<div className='FictionList'>
				{/* map 함수 이용해 아이템 추가 */}
				<div className='FictionItem' onClick={handleClickCharacter}>
						<div className='FictionCharacter'>
							<img src={CM} className='FictionCharacterImg'/>
							<div className='CharacterDesc'>
								<div className='NameInfo'>청명</div>
								<div className='PlatformInfo'>네이버웹툰</div>
								<div className='WebtoonInfo'>화산귀환</div>
							</div>
						</div>
						<div className='SubFictionList'>
							<div className='SubFictionItem'>청명이 화산파에 입문을 거절당하고 개방의 거지가 되어 홍대광의 부하가 되어 대화하는 상황</div>
							<div className='SubFictionItem'>청명이 화산이 아니라 종남의 제자로 들어가 이송백의 후배가 되어 대화하는 상황 </div>
						</div>
					
				</div>
			</div>
		</>
			
		
	)
}