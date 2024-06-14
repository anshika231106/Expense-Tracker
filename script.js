const text=document.querySelector("#description");
const amt=document.querySelector("#amount");
const income=document.querySelector("#income");
const expense=document.querySelector("#expense");
const balance=document.querySelector("#balance");
const history=document.querySelector("ul");

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
    if(text.value===" " || amt.value===" ")
    {
        alert("Add a text and amount");
    }
    else{
        const list=document.createElement("li");
        list.innerHTML=text.value+amt.value;
        history.appendChild(list);
        updatevalues();

        text.value="";
        amt.value="";
    }
}

document.querySelector("form").addEventListener("submit",add);