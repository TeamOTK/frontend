import CM from './images/CM.png'
import './Character_Original_Page.css'

export default function CharacterOriginal({handleClickCharacter}) {
	
	return(
		<>
			<div className='OriginalList'>
				{/* map 함수 이용해 아이템 추가 */}
				<div className='OriginalItem' onClick={handleClickCharacter}>
						<div className='OriginalCharacter'>
							<img src={CM} className='OriginalCharacterImg'/>
							<div className='OriginalCharacterDesc'>
								<div className='NameInfo'>청명</div>
								<div className='PlatformInfo'>네이버웹툰</div>
								<div className='WebtoonInfo'>화산귀환</div>
							</div>
						</div>			
				</div>
			</div>
		</>
			
		
	)
}