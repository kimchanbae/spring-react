import React, {useEffect, useRef, useState} from "react";
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from "axios";
import Model from "/src/common/js/model";

function User(){
	const [data, setData] = useState([]);
	const [rowCount, setRowCount] = useState('');
	const inputRef = useRef();

	/* 검색조건 셋팅 객체 생성 */	
	const [searchParames, setSearchParames] = useState({
		id:"",
		name:""
	});
	const {id, name} = searchParames;

	const [searchKeyword] = useSearchParams();		/* 입력된 검색 키원드 객체 */

	useEffect(() => {
		searchParames.id = searchKeyword.get("id");
		searchParames.name = searchKeyword.get("name");

		search();

		inputRef.current.focus();	/* 검색조건 아이디 포커스 */
  	}, [])

	/* 검색조건 조회 */
	const search = () => {
		axios.post("http://localhost:9000/api/user", searchParames)
		.then(res => {
			setRowCount(res.data.length);
			setData(res.data);
		});
	}

	const [searchStstus, setSearchStatus] = useState(false);
	/* 검색 버튼 클릭 */
	const searchClick = () => {
		search();

		setSearchStatus(true);
	}

	/* 검색조건 입려폼 수정시 */	
	const onChange = (e) => {
		const {id, value} = e.target;
		
		setSearchParames({
			...searchParames,
			[e.target.id]: e.target.value
		})
	}
	
	/*모달*/
	const [open, setOpen] = useState(false);
	const [userData, setUserData] = useState([]);
	function model(userId){
		/*모달 오픈*/
		setOpen(true);
		
		let userData = {"id":userId};
		
		axios.post("http://localhost:9000/api/user/view", userData)
		.then(res => {
			setUserData(res.data);
		});
	}

	/*상세*/
	const navigate = useNavigate();
	const [keyword, setKeyword] = useState({id:"", name:""});
	const detail = (userId, file_seq) => {
		if(searchStstus){
			keyword.id = searchParames.id;
			keyword.name = searchParames.name;
		}

		if(!searchStstus){
			if(searchKeyword.get("id") == null){keyword.id = ""}else{keyword.id = searchKeyword.get("id")};
			if(searchKeyword.get("name") == null){keyword.name = ""}else{keyword.name = searchKeyword.get("name")};
		}

		/*상세 페이지 이동 state 파라미터 셋팅*/
		navigate('/user/view', {state : {id:userId, file_seq:file_seq, searchKeyword:keyword}});
	}

	const [isHoverd, setIsHoverd] = useState(false);	/* 마우스 오버시,벗어났을때 객체 */
	const [TooltipIdx, setTooltipIdx] = useState();		/* 마우스 오버시 키값 객체 */
	/* 마우스 오버시 */
	const handleMouseEnter = (seq) => {
		setIsHoverd(true);
		setTooltipIdx(seq);
	}
	/* 마우스 벗어났을때 */
	const handleMouseLeave = () => {
		setIsHoverd(false);
	}

	return (
		<header className="App-header">
			<div className="title"><ul><li>사용자 정보</li><li className="grd-count">총건수:{rowCount}건</li></ul></div>
			<form name="schForm" className="sch-form">
				<div className="sch-div">
					<ul>
						<li>
							<div className="sch-left">
								<ul>
									<li>아이디<input ref={inputRef} type="text" id="id" value={searchParames.id} onChange={onChange} /></li>
									<li>이름<input type="text" id="name" value={searchParames.name} onChange={onChange} /></li>
								</ul>
							</div>
						</li>
						<li>
							<div className="sch-btn">
								<button type="button" onClick={searchClick}>검색</button>
							</div>
						</li>
					</ul>
				</div>
			</form>
			<div className="container mx-auto grid grid-cols-7 sm:grid-cols-7 md:grid-cols-10 gap-4">
				{data.map((v, idx) =>  
					<div className="w-full min-w-0">
						<p className="mt-1">1</p>
						<p>2</p>
					</div>
				)}
			</div>

			<div className="btn-grp">
				<ul>
					<li><button onClick={() => detail('')}>등록</button></li>
				</ul>
			</div>
			
			<Model isOpen={open} onClose={() => setOpen(false)}>
				<h3>사용자 정보</h3>	
				<div className="det-div">
					<ul><li className="det-header">아이디</li><li className="det-cont">{userData.id}</li></ul>
					<ul><li className="det-header">이름</li><li className="det-cont">{userData.name}</li></ul>
					<ul><li className="det-header">내용</li><li className="det-cont">{userData.comment}</li></ul>
					<ul><li className="det-header">첨부파일</li><li className="det-cont">{userData.file_name}</li></ul>
				</div>
			</Model>
		</header>
  	);
}

export default User;