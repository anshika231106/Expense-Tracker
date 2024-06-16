const text=document.querySelector("#description");
const amt=document.querySelector("#amount");
const income=document.querySelector("#income");
const expense=document.querySelector("#expense");
const balance=document.querySelector("#balance");
const history=document.querySelector("ul");

function remove(ID)
{
    const bal=Number(document.getElementById(ID).firstElementChild.innerHTML);
    
    if(bal>0)
    {
        balance.innerHTML=Number(balance.innerHTML)-Math.abs(bal);
        income.innerHTML=Number(income.innerHTML)-bal;
    }
    else{
        balance.innerHTML=Number(balance.innerHTML)+Math.abs(bal);
        expense.innerHTML=Number(expense.innerHTML)+bal;
    }

    const del=document.getElementById(ID);
    del.parentNode.removeChild(del);

}

function updatevalues()
{
    if(amt.value<0)
    {
        let prevex=Number(expense.innerHTML);
        expense.innerHTML=prevex+Math.abs(amt.value);
        balance.innerHTML=Number(balance.innerHTML)-Math.abs(amt.value);
    }
    else{
        let previn=Number(income.innerHTML);
        income.innerHTML=previn+Math.abs(amt.value);
        balance.innerHTML=Number(balance.innerHTML)+Math.abs(amt.value);    
    }
}

function add(e)
{
    e.preventDefault();
    if(text.value==="" || amt.value==="")
    {
        alert("Add a text and amount");
    }
    else{
        const list=document.createElement("li");
        list.classList.add(amt.value<0?"minus":"plus");
        var ID=(Math.floor(Math.random()*100000));
        list.setAttribute("id",ID);
        list.innerHTML=text.value+"<span>"+amt.value+"</span><button class='delete-btn' onclick='remove("+ID+")'>X</button>";
        history.appendChild(list);
        updatevalues();

        text.value="";
        amt.value="";
    }
}

document.querySelector("form").addEventListener("submit",add);