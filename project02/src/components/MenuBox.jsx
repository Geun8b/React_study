// 지금은 그냥 jsx 파일
// -> 컴포넌트화 필수요소 3가지

// 1. 파일명과 같은 함수
function MenuBox({name, temp, price}){
    

    // 2. return문
    return(
        <div style = {{border : '3px solid pink', padding : '3%'}}>
            <h2>{temp} {name}</h2>
            <p>{price}원</p>
        </div>

        /* 실습문제
        팀원을 소개하는 컴포넌트를 생성하자
        1. components 폴더에 'MemberBox'라는 파일을 생성하고 컴포넌트화
        2. 본인의 팀원 수대로 해당 컴포넌트를 App에 작성하고
        3. props를 통해 각 팀원의 정보를 작성
            * 팀 이름, 팀원 이름, 혈액형
            * 이 때, 팀 이름은 teamName 이라는 변수 안에 내용을 저장해서 보내 줄것
        4. 디자인은 자유롭게
        */
    )
}


// 3. export문
export default MenuBox