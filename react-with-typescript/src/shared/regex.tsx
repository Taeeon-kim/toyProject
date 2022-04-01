//최대 15자리까지
export const IdCheck = (id:string) => {
  const idRegex = /^[0-9a-zA-Z]{1,15}$/g;
  return idRegex.test(id);
};

//영대문자숫자조합 8자리부터 15자리까지
export const PwCheck = (pwd:string) => {
  const PwRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])([a-zA-Z0-9]){8,15}$/g;
  return PwRegex.test(pwd);
};

export const NicknameCheck = (nickname:string)=>{
  const nicknameRegex = /^[0-9a-zA-Z가-힣]{1,15}$/g;
  return nicknameRegex.test(nickname);
}