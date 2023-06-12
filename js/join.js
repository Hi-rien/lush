
function checkid() {
  const form = document.join_form

  const reg_exp = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9]).{6,10}$")
  const match = reg_exp.exec(form.ID.value)

  if (match == null) {
    alert('아이디는 6-10자의 영문자,숫자 조합으로 작성해주세요')
    return false
  } else {
    alert('사용 가능한 아이디 입니다.')
    return false
  }

}


function validataForm() {
  const form = document.join_form

  const reg_exp = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9]).{6,10}$")
  const match = reg_exp.exec(form.ID.value)

  if (match == null) {
    alert('아이디는 6-10자의 영문자,숫자 조합으로 작성해주세요')
    return false
  }

  const reg_exp2 = new RegExp("^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,12}$")
  const match2 = reg_exp2.exec(form.PW.value)

  if (match2 == null) {
    alert('비밀번호는 8-12자의 영문자,숫자,특수기호 조합으로 작성해주세요')
    return false
  }

  const pw = join_form.PW.value
  const pw2 = join_form.PW2.value

  if (pw != pw2) {
    alert('비밀번호가 일치하지 않습니다.')
    return false
  }

  const mail = join_form.EMAIL.value

  if (mail == null || mail == "") {
    alert('이메일을 입력하세요')
    return false
  }
}