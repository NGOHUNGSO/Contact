const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

var btn = document.getElementById('btn');
btn.addEventListener('click',function(e){
  e.preventDefault()

  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var phone = document.getElementById('phone');
  var question = document.getElementById('question');
  var body = 'Họ và tên: ' +name + '<br/> email: ' + email 
  + '<br/> Số điện thoại: ' + phone + '<br/> Câu hỏi: ' + question;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "tccovid2022@gmail.com",
    Password : "B3FF38423FFF523DD106FE5528A82C88AB95",
    To : 'tccovid2022@gmail.com',
    From : email,
    Subject : phone,
    Body : question
}).then(
  message => alert(message)
);
})