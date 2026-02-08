let $Btnsignupwrapper=document.querySelector("#Btnsignupwrapper");
let $signupwrapperinputs=document.querySelectorAll("#signupwrapperinputs>div>input");
let $signupwrapper=document.document.querySelector("signupwrapper");
let $usernamewrapper=document.querySelector("usernamewrapper");
let $inputEmty=document.querySelector("inputEmty");

Btnsignupwrapper.addEventListener("click",()=>{
if(
    $signupwrapperinputs[0].value==""&&
    $signupwrapperinputs[1].value==""&&
    $signupwrapperinputs[2].value==""
){
    $inputEmty.classList.remove(hidden);
    $inputEmty.classList.add(flex);
    settimeout(()=>{
        $inputEmty.classList.remove(flex);
        $inputEmty.classList.add(hidden);
    },2000);
}else{
    $signupName=$signupwrapperinputs[0].value;
    $signupEmail=$signupwrapperinputs[1].value;
    $signupPassword=$signupwrapperinputs[2].value;

    const Newtask={
        username:$signupName,
        Email:$signupEmail,
        Password:$signupPassword
    };
fetch("",{
    method:"post",
    headers:{"content-type":"application/Json"},
    body:JSON.stringify(Newtask),
})
.then((res)=>{
    if(res.ok){
        return res.json();
    }
})
.then((task)=>{
    $usernamewrapper.innertext="Hi," +
    task.username;
$profile.classList.remove("flex");
$profile.classList.remove("hidden");
$profile.classList.add("block");

cookies.set("usernameSneaky",task.username,{expires:7});
cookies.set("passwordSneaky",task.username,{expires:7});
});
}
});

let Loginbtn = document.querySelector("#Loginbtn");
let Loginwrapper = document.querySelector("Loginwrapper");

Loginbtn.addEventListener("click",()=>{
    $signupwrapper.classList.remove("block");
    $signupwrapper.classList.add("hidden");
    $logInwrapper.classList.remove("hidden");
    $logInpwrapper.classList.add("block");
});

let signupFormBtn = document.querySelector("#signupFormBtn");

signupFormBtn.addEventListener("click",()=>{
    $logInwrapper.classList.remove("block");
    $logInwrapper.classList.add("hidden");
    $signupwrapper.classList.remove("hidden");
    $signuprapper.classList.remove("block");
});

let btnLogin = document.querySelector("#btnLogin");
let logInwrapperinputs = document.querySelectorAll("logInwrapperinputs>div>input");

btnLogin.addEventListener("click", ()=>{
    if(
       $logInwrapperinputs[0].value==""&&
       $logInwrapperinputs[1].value==""

    ){
        $inputEmty.classList.remove(hidden);
        $inputEmty.classList.add(flex);
        settimeout(()=>{
        $inputEmty.classList.remove(flex);
        $inputEmty.classList.add(hidden);
    },2000);
    }else{
        let emailLogin = $logInwrapperinputs[0].value;
        let passwordLogin = $logInwrapperinputs[1].value;

        fetch("",{
            method:"GET",
            headers:{"content-type" : "application/Json"},
        })
        .then((res)=>{
            if(res.ok){
                return res.json();
            }
        })
        .then((tasks)=>{
            tasks.map((val)=>{
                if(val.email==emailLogin && val.password==passwordLogin){
                    $usernamewrapper.innertext="Hi," + val.username;

                    $profile.classList.remove("flex");
                    $profile.classList.remove("hidden");
                    $profile.classList.add("block");

                    cookies.set("usernameSneaky",val.username,{expires:7});
                    cookies.set("passwordSneaky",val.password,{expires:7});
                }
            })
        })
    }
})