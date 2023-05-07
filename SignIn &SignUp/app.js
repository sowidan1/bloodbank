const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
  container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
  container.classList.remove("sign-up-mode2");
});

function CheckMe() {
  var username = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var r1 = document.getElementById("doner").checked;
  var r2 = document.getElementById("patient").checked;



  if (username == 'admin' && pass == '12345') {
    
        window.location.href='home.html';
  // else if (username != null && pass != null && r1==1) 
  //   window.location.href="check.html";
    
  // 
}}

function CheckMeReg() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  var r1 = document.getElementById("doner").checked;
  var r2 = document.getElementById("patient").checked;
  if (username != null && email != null && pass != null && r1 == true) {
    window.location.href='UserForm.html';
  } else if (username != null && email != null && pass != null && r2 == true) {
    window.location.href='patientReg.html';
  } else {
    alert("errror");
  }
}




        var objPeople = [
            {
                username: "admin",
                password: "123"
            },
            {
                username: "doner",
                password: "123"
            },
            {
                username: "pat",
                password: "123"
            }
        ]

        function getInfo() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            
          
            for (var i = 0; i < objPeople.length; i++) {

              
                if (username == objPeople[i].username && password == objPeople[i].password) {
                  if(username=='admin'){
                    window.location.href='home.html';
                  }else if (username=='doner'){
                    window.location.href='DonationReq.html';
                  
                  }else if(username=='pat'){
                    window.location.href='bloodReq.html';
                  
                  }
                }
              }
              
              }


