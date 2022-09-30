const userText = document.getElementById("userText");
const btn = document.querySelectorAll(".btn");
const noOfwords = document.getElementById("noOfwords");
const noOfChar = document.getElementById("noOfChar");
const noOfsen = document.getElementById("noOfsen");
const readingTime = document.getElementById("readingTime");
const whiteSpace = document.getElementById("whiteSpace");

btn.forEach(element => {
    if (userText.value == ""){
        element.classList.add("disable")
    }
    element.addEventListener('click', (e) => {
        if(e.target.textContent === "Clear All"){
            userText.value = "";
            textDetails()
        } else if(e.target.textContent === "Copy"){
            userText.select();
            document.execCommand("Copy")
        } else if(e.target.textContent === "UpperCase"){
            userText.style.textTransform = "uppercase";
        } else if(e.target.textContent === "LowerCase"){
            userText.style.textTransform = "lowercase";
        } else{
            let textArr = userText.value.split(" ");
            textArr = textArr.filter((elem)=>{
                if(elem !== ""){
                    return elem
                }
            })
            userText.value = textArr.join(" ");
            textDetails()
        }
    })
});

    userText.addEventListener("keyup", () =>{
        textDetails()
    })
function textDetails(){
    if(userText.value==""){
        btn.forEach(element => {
            element.classList.add("disable")
        });
    }else{
        btn.forEach(element => {
            element.classList.remove("disable")
        });
    }
    let textArr = userText.value.split(" ");
    whiteSpace.textContent = textArr.length - 1;
            textArr = textArr.filter((elem)=>{
                if(elem !== ""){
                    return elem
                }
            })
            noOfChar.textContent=userText.value.length;
            noOfwords.textContent = textArr.length;

            let arr = userText.value.split(".");
            noOfsen.textContent = arr.length - 1;

            let totalsec = 60/275 * textArr.length;
            let min = Math.floor(totalsec / 60);
            let sec = Math.floor(totalsec % 60);
            min = min<10?`0${min}`: min;
            sec = sec<10?`0${sec}`: sec;
            console.log(min, sec);
            readingTime.textContent = `${min} min ${sec} sec`
}