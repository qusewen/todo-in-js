const listBody = document.querySelector(".list__body");
const addBtn = document.querySelector(".add__button");
const textFild = document.querySelector(".add__text");


let fildValue = "";
let testArray = [];
let removeArray =[];
let newArray = [];
let flag = 0;

window.onload = loades();

function loades() {


  if (localStorage.getItem("todo")) {
    //есть ли у нас в локалсторадже что нибудь
    let localTodo = localStorage.getItem("todo").split(",");
    localTodo.map((e) => {
      let localDiv = document.createElement("div");
      localDiv.classList.add("card");
      localDiv.innerHTML = e;
      listBody.append(localDiv);
    });
  } else {
    // если вдруг там пусто
    let empty = document.createElement("p");
    empty.classList.add("empty");
    empty.innerHTML = "Добавьте хоть одну задачу";
    listBody.prepend(empty);
  }
}

const handleAdd = () => {
  let div = document.createElement("div");
  div.classList.add("card");
  fildValue = textFild.value;
  if (fildValue !== "") {
    div.innerHTML = `<p>${fildValue}</p>` + `<button class="remove">remove</button>`;
    testArray.push(`<p>${fildValue}</p> ` + `<button class="remove">remove</button>`);
    localStorage.getItem("todo")
      ? localStorage.setItem(
          "todo",
          localStorage.getItem("todo") + "," + testArray
        )
      : localStorage.setItem("todo", testArray);
    listBody.append(div);
    textFild.value = "";
  } else {
    
  }



};

addBtn.addEventListener("click", handleAdd);



const removeBtn = document.querySelectorAll(".remove");
const card = document.querySelectorAll('.card')
const removestList = document.querySelector('.removes')


        removeBtn.forEach(el => {
            el.addEventListener('click', function() {
                console.log(el)
                if(!el){
                    return;
                }else{
                    el.parentElement.remove();
                    removestList.append(el.parentElement)
                    console.log(el.parentElement.innerHTML)
                    removeArray.push(el.parentElement.innerHTML)
                    localStorage.setItem('remove', removeArray)
                    let rem = localStorage.getItem('remove').split(',');
                    let todos = localStorage.getItem('todo').split(',')
                   let test = rem.filter((item)=>{


                    console.log(newArray)
                }


        
            })
         })




