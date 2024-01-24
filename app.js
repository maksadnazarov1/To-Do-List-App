const inputBox= document.getElementById("giris");
const listcontent = document.getElementById("listcontainer");

function calistir(){
    if(inputBox.value ==''){
        alert("Bu alan boş bırakılamaz....");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listcontent.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
listcontent.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){

        e.target.classList.toggle("checked");
        saveData();


    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listcontent.innerHTML)
}

function showTask(){
    listcontent.innerHTML=localStorage.getItem("data");
}

showTask();