const inputValue = document.getElementById("inputText")
const addButton = document.getElementById("addButton")
const delButton = document.getElementById("delButton")
const outputText = document.getElementById("outputText")
function addText(){
  const newDiv = document.createElement("div")
  newDiv.textContent = inputValue.value
    outputText.appendChild(newDiv) 

}
function delText(){
const array=outputText.children;
for(let i = 0; i < array.length; i++){
  if(array[i].textContent === inputValue.value){
    array[i].remove()
  }
}
  
}
addButton.addEventListener("click", addText)
delButton.addEventListener("click", delText)
