const butoaneMici = document.querySelectorAll(".button")

const butonMare1 = document.querySelector(".button-lg")

const butonMare2 = document.querySelector(".button-lg2")

const toateButoanele = [...butoaneMici, butonMare1, butonMare2]

const ecran = document.querySelector(".ecran")

const operatoriMatematici = ["C","%","/","-","+","X","=","."]

let operator = ""
let numarUnu = ""
let numarDoi = ""


const calcule = {
   "+" : (a,b) => a + b,
   "-" : (a,b) => a - b,
   "/" : (a,b) => a / b,
   "X" : (a,b) => a * b,
}

const resetCalculator = () => {
        operator = ""
        numarUnu = ""
        numarDoi = ""
        ecran.innerText = "0"
}

toateButoanele.forEach(buton => {
  buton.addEventListener("click" , () => {
    if(operatoriMatematici.includes(buton.innerText)){
      if(buton.innerText === '.'){


        if(numarDoi){ 
            if(numarDoi.includes("."))
            return 
            numarDoi = numarDoi + "."
            }else{
              if(numarUnu.includes(".")) 
              return
              numarUnu = numarUnu + '.'
              
       }
       ecran.innerText = numarUnu + operator + numarDoi
       return
  
  }

  if(buton.innerText === "-" ){
    operator = "-" + numarUnu
    numarDoi = ""
    return
  }
  


      if(buton.innerText === "C"){
        
        ecran.innerText = "0"
        return resetCalculator
      }

      if(buton.innerText === "%"){
        if(ecran.innerText === numarUnu){
        operator = ""
        numarUnu = ""
        numarDoi = ""
        ecran.innerText = "0"
        return
        }  

        if(numarDoi){
          numarDoi = (numarUnu * numarDoi) / 100
          ecran.innerText = numarUnu + operator + numarDoi
          return
        }
      }

      if(buton.innerText === "="){
        if(!numarDoi)
        return 
        const functiaPentruCalcul = calcule[operator]
        const rezultat = functiaPentruCalcul(Number(numarUnu),Number(numarDoi))
        ecran.innerText = rezultat

        operator = ""
        numarDoi = ""
        numarUnu = rezultat
        return
      }

      if(operator && numarDoi){
        const functiaPentruCalcul = calcule[operator]
        const rezultat = functiaPentruCalcul(Number(numarUnu),Number(numarDoi))
        ecran.innerText = rezultat + buton.innerText
        operator = buton.innerText
        numarUnu = rezultat
        numarDoi = ""

      }


      operator = buton.innerText
      ecran.innerText = numarUnu + operator + numarDoi
    
    }else{

        if(ecran.innerText === "0"){
          numarUnu = buton.innerText
          ecran.innerText = numarUnu
          return
        }

        if(operator){
          numarDoi = numarDoi + buton.innerText
        }

        else{
          numarUnu = numarUnu + buton.innerText
        }

        ecran.innerText = numarUnu + operator + numarDoi

      }

  })
  
})

// const solution = (sentence, wordsArr) => {
    // const splitSentence = sentence.split(" ")
    // const sortedSentence = splitSentence.map((cuvant)=> cuvant.split("").sort().join(""))
    // console.log(sortedSentence)

    
    // wordsArr.forEach((cuvant)=>{

    // })
  // }


  // test your solution
  // solution('dvvd  pddp', ['ddvv', 'dvcd', 'vvdd', 'pdpd'])
//   // ['ddvv', 'vvdd', 'pddp']

//   solution('laser space', ['lazing', 'lazy', 'lacer'])
//   // []
//   solution('We will eat tenderising meat at Rivera with no regally plate because there is none',
//     ['administration', 'ingredients', 'admit', 'beat', 'arrive', 'blood', 'door', 'each', 'on', 'economic', 'gallery', 'edge', 'three', 'drop'])
//   // ['ingredients', 'arrive', 'on', 'gallery', 'three']



// const button = document.getElementById("play")
// const circle = document.getElementById("circle")

// button.addEventListener("click",()=>{
//     circle.classList.add("animated")
// })

// circle.addEventListener("click",()=>{
//     circle.classList.remove("animated")
// })


// const myArray = [1,2,3,4,5,6,7,8,9,10]

// const suma = myArray.reduce((acc,numar)=>{
    // console.log(acc,numar)
    // return acc + numar
// },0)

// console.log(suma)


// function ultimalitera(nume){
   
//     const stringLength = nume.length;
//     console.log( nume.charAt(stringLength -1));
//     return ultimalitera === "n"
// }
//  ultimalitera("Aiden")   

// function perimetru(L,l){
//     return 2*(L+l)
// }
// console.log(perimetru(5,7))


// function minutes(a){
//     return a * 60
// }

// console.log(minutes(5))

// const min = a=> a*60


// console.log(min(5))

// function numere(a,b){
 
//   return a + b

// }
// console.log(numere(7,9))

// for(let i = 1; i < 9; i++){
//     console.log(i)
// }
// const human = {
//     nume : "Elena",
//     ocupatie : "designer"


// }

// human.hobby = "muzica"
// console.log(human)

// function fibonacci(number){
//     let n1 = 0, n2 = 1, nextTerm;
    

//     for (let i = 1; i <= number; i++){
//         console.log(n1);
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//     }

    
// }
// console.log(fibonacci(13))