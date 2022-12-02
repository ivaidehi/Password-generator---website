const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWYZ"
const lowerAlpha = "abcdefghijklmnopqrstuvwxyz"
const nums = "0123456789"
const symb = "!@#$^&*~_-:;<>?/"


const getupperAlpha=()=>{
      return upperAlpha[Math.floor(Math.random()*upperAlpha.length)]
}

const getlowerAlpha=()=>{
      return lowerAlpha[Math.floor(Math.random()*lowerAlpha.length)]
}

const getnums=()=>{
      return nums[Math.floor(Math.random()*nums.length)]
}

const getsymb=()=>{
      return symb[Math.floor(Math.random()*symb.length)]
}

const generatePw=()=>{
      let Pw =""
      for (let i = 0; i < 9; i++) {
           Pw += selectorPw()
      }
      password.innerText = Pw     
}

const selectorPw=()=>{
      let arrPw = []
      if(ul.checked) {
            arrPw.push(getupperAlpha())
      }
      if (ll.checked){
            arrPw.push(getlowerAlpha())
      }
      if (n.checked){
            arrPw.push(getnums())
      }
      if (sy.checked){
            arrPw.push(getsymb())
      }
      if(ul.checked || ll.checked || n.checked || sy.checked == false){
            arrPw.push("")
      }
      return arrPw[Math.floor(Math.random()*arrPw.length)]
}

generatePwBtn.addEventListener("click", generatePw)