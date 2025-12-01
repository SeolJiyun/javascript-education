const defaultProfile = {
    name: "Guest",
    age: 0,
    tags: []
};
// 수정 전
function updateProfile(profile, newInfo) {
    const updated = profile;   // <-- 신입 개발자의 실수
    updated.name = newInfo.name || updated.name;
    updated.age = newInfo.age ?? updated.age;
    updated.tags.push(...(newInfo.tags || []));

    return updated;
}
// 수정 후
// function updateProfile(profile, newInfo) {
//     const updated = {
//         ...profile,
//         tags: [...profile.tags]
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