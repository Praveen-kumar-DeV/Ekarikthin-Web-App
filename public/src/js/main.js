const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");
const motp=document.getElementById("motp");
const name = document.getElementById("email").value;
const emailInput = document.getElementById("email");
const codeInput = document.getElementById("code");

var state=0;


nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
     
   var c=  validate();
   
  if(c){

    changeStep("next");
    ++state;}
    
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

 

  Sendata();
  
  
});

function changeStep(btn) {
    const email = emailInput.value;
   
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
    

    if(index===2){
     //alert("OTP was sent to your mail....!");
     motp.innerHTML=`<p style="color:red;"> 6 DIGIT OTP sent to :</p>`+email;
     const eventCode=codeInput.value;
     
   
      axios.post("/otp", {
        email: email,
       
      });

     
     
   
    }

  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
  

}







async function Sendata(){

  try {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const eventCode = document.getElementById("code").value;
    const phone = document.getElementById("phone").value;
    const college = document.getElementById("college").value;
    const category = document.getElementById("category").value;
    const cost = document.getElementById("cost").value;
    const event = document.getElementById("Event").value;
    const paymode = document.getElementById("paymode").value;
    const otp = document.getElementById("otp").value;
    

    
  const regform= {name:name,email:email,phone:phone,event:event,eventCode:eventCode,college:college,category:category,cost:cost,
    paymentMode:paymode,otp:otp,};
     
      

    const data  = await axios.post( "/register",regform)
                             
      

     
      const user=data.data.data;


    if (data.data.success) {
      Toastify({
        text:"You have successfully registered for the event",
        duration: 3000,
        
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #3FCE06, #ff4122)",
        },
        onClick: function(){
         


        } // Callback after click
      }).showToast();

    
        console.log("here goes the problem....");
        window.location.href ='/onlinePayment?tokenId='+user.tokenId;
         
      

      
       
       
          /*  const temp=`
            <div class="note"><div class="cards">
             YOUR TOKEN ID WITH YOU FOR THE CONFORMATION OF YOUR PAYMENT
            CLICK ON HOME TO RETURN TO HOME PAGE OR PAGE WILL AUTOMATICALLY REDIRECTED TO HOME PAGE WITH IN 30 SECONDS
        </div></div>
            <div class="container">
            <div class="card" >
        
                <p ">NAME : ${user.name}</p>
                <p>EVENT : ${user.event}</p>
                <p style="color:red;">TOKEN ID : ${user.tokenId}</p>
                <p>EMAIL : ${user.email}</p>
                <p>CATEGORY : ${user.category}</p>
                <p>COST : ${user.cost}</p>
                <p>PAYMENT MODE : ${user.paymentMode}</p>
            </div>
            <div id='Paycontainer'>
                <img src="./pay.jpeg">
        </div>
        </div>
        
        <p id = "result"><b> The page will redirect  to HOME PAGE after delay of <span id="counter">30 </span>seconds</b></p>
           <button class="btn" onclick = "window.location.href ='/'; ">Click to Redirect to Tutorials Point</button>
          
        
        `;
        
        const res=document.getElementById('confirm');
        //document.body.style.backgroundImage=imageUrl ;
        const non=document.getElementById('background');
        non.style.display='none';
        res.innerHTML=temp;
        redirect();
        
        
        
        
                 
                 function redirect () {
                  setInterval(myURL, 1000);
                  var result = document.getElementById("result");
                 // result.innerHTML = "";
               }
         
               function myURL() {
                var div = document.querySelector("#counter");
                    var count = div.textContent * 1 - 1;
                    div.textContent = count;
                    if (count <= 0) {
                        //window.location.replace("https://example.com");
                        document.location.href = '/';
                    }
                 
               }
        */
        
  
       
      
    }
         

    }
    

 catch (err) {
        console.log(err,"error.....code...")
     const errCode = err.response.data.message;
        Toastify({
          text:errCode,
          duration: 3000,
          
          newWindow: true,
          close: true,
          gravity: "top", 
          position: "right", 
          stopOnFocus: true, 
          style: {
            background: "linear-gradient(to right, #ff0000, #ff4122)",
          },
          onClick: function(){}
        }).showToast();
       
      }
}

function validate(){
  let id = (id) => document.getElementById(id);
  
  let name= id("name"),
  email = id("email"),
  phone = id("phone");
  
  if( engine(name, 0, "Name cannot be blank")&&engine(email, 1, "Email cannot be blank")&&engine(phone, 2, "Phone cannot be blank"))
  { 
    return true;
  }
 return false;

}
let engine = (id, serial, message) => {

  let classes = (classes) => document.getElementsByClassName(classes);
  let errorMsg = classes("error");
  var phoneno = /^\d{10}$/;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (id.value.trim() ==="")
      { 
  
    errorMsg[serial].innerHTML = message;
    //id.style.border = "2px solid red";
    return false;
    
      }
      else if (id.name==="email")
      {  if (!(id.value.match(mailformat)))
        {
        console.log(id.name);
          errorMsg[serial].innerHTML = 'INVALID EMAIL ADDRESS';
      //  id.style.border = "2px solid red";
 return false;
 
        }
       else {
 errorMsg[serial].innerHTML = "";
 //id.style.border = "2px solid green";
  return true;
 
 
 }
 }
     else if (id.name==="phone")
          {  if (!(id.value.match(phoneno)))
            {
            console.log(id.name);
              errorMsg[serial].innerHTML = 'INCORRECT PHONE NUMBER';
            //id.style.border = "2px solid red";
    return false;

            }
           else {
    errorMsg[serial].innerHTML = "";
    //id.style.border = "2px solid green";
      return true;
  
  
  }
  }

   
else {
    errorMsg[serial].innerHTML = "";
    //id.style.border = "2px solid green";
    return true

    // icons
  
  }
};






window.location.href ='/admin/ot?tokenId='+user.tokenId;
/* const res=document.getElementById('confirm');

 const temp=`<div id="container">
 <div id="card" >

     <p ">NAME : ${user.name}</p>
     <p>EVENT : ${user.event}</p>
     <p>TOKEN ID : ${user.tokenId}</p>
     <p>EMAIL : ${user.email}</p>
     <p>CATEGORY : ${user.category}</p>
     <p>COST : ${user.cost}</p>
     <p>PAYMENT MODE : ${user.paymentMode}</p>
 </div>
</div>

<p id = "result"></p>
<button class="btn" onclick = "window.location.href ='/'">Click to Redirect to Home Page</button>

`;
 const non=document.getElementById('background');
 non.style.display='none';
    res.innerHTML=temp;
    
    redirect();
    function redirect () {
     setTimeout(myURL, 5000);
     var result = document.getElementById("result");
     result.innerHTML = "<b> The page will redirect  to HOME PAGE after delay of 30 seconds";
  }

  function myURL() {
   var div = document.querySelector("#counter");
   var count = div.textContent * 1 - 1;
   div.textContent = count;
   if (count <= 0) {
       document.location.href = '/';
   }

  }

*/