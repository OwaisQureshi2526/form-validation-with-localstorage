showData()
function saveData() {
var fname,uname,city,state;

fname = document.getElementById("fname").value
uname = document.getElementById("uname").value
city = document.getElementById("city").value
state = document.getElementById("state").value

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.uname==uname}))
{
  alert("duplicate data");
}
else
{
  user_records.push({
  "fname":fname,
  "uname":uname,
  "city":city,
  "state":state
})
localStorage.setItem("users",JSON.stringify(user_records));
}
showData();
}

function showData()
{
  document.getElementById("showUsers").innerHTML="";
  let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_records)
  {
    for(let i=0;i<user_records.length;i++)
    {
      let addDiv=document.createElement('div');
  addDiv.className="row";
  addDiv.style.textAlign = "center"
  addDiv.innerHTML='  <div class="col">'+user_records[i].fname+'</div><div class="col">'+user_records[i].uname+'</div><div class="col">'+user_records[i].city+'</div><div class="col">'+user_records[i].state+'</div>';
  document.getElementById("showUsers").appendChild(addDiv);

    }
  }
  }






