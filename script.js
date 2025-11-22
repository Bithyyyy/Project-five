const callBtns=document.querySelectorAll(".call-btn")
const historyList = document.getElementById("historyList");

callBtns.forEach((btn)=>{
    btn.addEventListener("click", function () {
        
        const time = new Date().toLocaleTimeString();
        const li = document.createElement("li");
        const number = btn.closest(".card").querySelector(".number").innerText

        const title = btn.closest(".card").querySelector(".national").innerText 
        
        console.log(btn.closest(".card"));
        const preCoin = Number(document.getElementById("coinCount").innerText) 
        if(preCoin > 0)
        {
            const reCoinCount = preCoin - 20;
            document.getElementById("coinCount").innerText = reCoinCount;
        }
        else
        {
            alert("You don't have enough coin")
            return ;
        }
        alert(`Calling ${title} ${number}`)
        li.innerHTML= `
        <div class="bg-gray-100 rounded p-4">
            <h1 class="font-bold">${title}</h1>
            <div class="flex gap-5">
                <p>${number}</p> 
            <span>${time}</span>   
            </div>
        </div>`
        historyList.appendChild(li);
    })
});

const hearts = document.querySelectorAll(".heart-btn")

hearts.forEach((heart)=>{
    heart.addEventListener("click",function(){
        const heartCount = Number(document.getElementById("heartCount").innerText)
        const curHeart = heartCount +1;
        document.getElementById("heartCount").innerText = curHeart

    })
})

const copies = document.querySelectorAll(".copy-btn")

copies.forEach((copy)=>{
    copy.addEventListener("click",function(){
        
        const number = copy.closest(".card").querySelector(".number").innerText

        navigator.clipboard.writeText(number)
        .then(()=>{
        const copyCount = Number(document.getElementById("copyCount").innerText)
        const curCount = copyCount + 1;
        document.getElementById("copyCount").innerText = curCount
        alert("Number Copied: " + number)

        })
    })
})

document.getElementById("clear-btn").addEventListener("click",function() {
    document.getElementById("historyList").innerHTML = "";
})




