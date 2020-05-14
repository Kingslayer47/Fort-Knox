console.log('Ajax demo')

var fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click',buttonClickListener);

function buttonClickListener(){
    console.log("You have clicked");

    const xhr = new XMLHttpRequest();
    //Open the object
    xhr.open('GET','sample.txt',true); // True for asynchronous

    xhr.onprogress = function(){
        console.log("Data retrieval is in progress");
    }
    xhr.onreadystatechange = function(){ // ready state code values in xhr
        console.log('ready state is: ',xhr.readyState);
    }
    xhr.onload = function(){
        console.log(this.response);
    }
    
    xhr.send();

    console.log('done');
}