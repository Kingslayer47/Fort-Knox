var count = 1;
var animal_data = document.getElementById("animal_info");
var btn = document.getElementById("fetchBtn");

console.log('2nd Java script');

btn.addEventListener('click',function(){
    var vReq = new XMLHttpRequest();
    vReq.open('GET','https://learnwebcode.github.io/json-example/animals-' + count + '.json');

    vReq.onload = function(){
    var ourData = JSON.parse(vReq.responseText);
    //console.log(ourData);
    fun_call(ourData);
    };
    vReq.send();
    count++;

    if(count > 3)
    {
        btn.classList.add("hide-me");
    }
});

function fun_call(data){
    var str="";
    for(i=0;i<data.length;i++)
    {
        str += "<p>" + data[i].name + " is a "+data[i].species +".</p>";
    }
    animal_data.insertAdjacentHTML('beforeend',str);
}