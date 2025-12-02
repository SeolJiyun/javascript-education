const defaultProfile = {
    name: "Guest",
    age: 0,
    tags: []
};
// 수정 전
function updateProfile(profile, newInfo) {
    //------------------------------------------------------------
    const updated = profile;   // <-- 신입 개발자의 실수. 수정해야 할 부분
    //------------------------------------------------------------

    //문법 참고-------------------------------------------------------------------
    updated.name = newInfo.name || updated.name;    
    //|| (OR 연산자). newInfo.name이 “falsy(거짓 같은 값)”이면 updated.name을 넣어라.
    //falsy 값(거짓 취급되는 값), "" (빈문자열), 0, null, undefined, false, NaN
    //최근에는 잘 쓰지 않고, ??널리시 연산을 대신 사용한다. 실제로 사용자가 0이나 빈값을 넣는 경우도 있지 않겠는가? 그런 경우에는 통과 될 수 있다.
    //----------------------------------------------------------------------
    
    //문법 참고-------------------------------------------------------------------
    updated.age = newInfo.age ?? updated.age;
    // \?? (Null 병합 연산자). newInfo.name이 newInfo.name이 null 또는 undefined일 때만 updated.name을 사용해라.
    // 나머지는 모두 “있는 값”으로 인정. OR에서는 숫자 0이 false로 처리되는 것과 차이가 있다.
    // ----------------------------------------------------------------------

    //문법 참고--------------------------------------------------------------
    updated.tags.push(...(newInfo.tags || []));
    // 1) newInfo.tags || []
    // 사용자가 tags를 입력했다면 그걸 쓰고, 없다면 빈배열[]을 사용해라.
    // 2) ...newInfo.tags
    // 스프레드(...) 배열을 펼쳐서 전딜하겠다.
    // 3) updated.tags.push(...something);
    // push(...items) 여러 개의 값을 배열에 한 번에 추가해라.
    // 전체 뜻: 새로 들어온 tags가 있으면 그 안의 요소들을 updated.tags에 하나씩 추가해라. 없으면 추가하지 마라.
    //---------------------------------------------------------------------


    return updated;
}
// 수정 후
// function updateProfile(profile, newInfo) {
//     const updated = {
//         ...profile,                  //'객체 스프레드: { ...profile }' 문법. "profile에 있는 속성들을 전부 펼쳐서(copy) 새로운 객체를 만들어라."라는 뜻.
//         tags: [...profile.tags]      //'배열 스프레드: [...profile.tags]'문법. "profile.tags 안에 들어 있는 요소들을 그대로 펼쳐서 새 배열을 만들어라."라는 뜻.
//     };

//     updated.name = newInfo.name ?? updated.name;
//     updated.age = newInfo.age ?? updated.age;
//     updated.tags.push(...(newInfo.tags || []));

//     return updated;
// }

// 사용자A -------------------------------------------
const userA = { ...defaultProfile };
// 사용자A의 name, tags 업데이트. 원래 userA 정보는 그대로 남기고 싶어요.
const updatedA = updateProfile(userA, { name: "yunS", tags: ["dev"] });

// 사용자B -------------------------------------------
const userB = { ...defaultProfile };
// 사용자B의 age 업데이트. 원래 userB 정보는 그대로 남기고 싶어요.
const updatedB = updateProfile(userB, { age: 29 });

if (userA === updatedA && userB === updatedB) {
    console.log("[A] ❌ 원본 유지 실패");
    console.log("[B] ❌ 원본 유지 실패");
    screenLog.classList.add("fail");
} else {
    console.log("[A] ✅ 원본 유지 성공");
    console.log("[B] ✅ 원본 유지 성공");
    screenLog.classList.add("success");
}