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
     
   var c=  validate(),k;
  
  if(c){
    if(state<1){
    changeStep("next");
    ++state;}
    else{
      k=vali2date();
      if(k){
        
        changeStep("next");
        state=0;
      }
     

    }
  
  }

 
    
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
     motp.innerHTML=`<p style="color:red;"> 6 DIGIT OTP sent to :</p>`+email+`<p style="color:white;">Please check your spam folder if you have not received the OTP.</p>`;
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

    
        
        window.location.href ='/onlinePayment?tokenId='+user.tokenId;
         
      

      
       
        
  
       
      
    }
         

    }
    

 catch (err) {
        console.log(err)
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

function vali2date(){
  let id = (id) => document.getElementById(id);
  
  let category= id("category"),
  event = id("Event"),
  cost = id("cost"),
  paymode = id("paymode");
  
  if( engine(category, 3, "Category cannot be blank")&&engine(event, 4, "Event cannot be blank")&&engine(cost, 5, "Select the Event again")&&engine(paymode, 6, "Select the Event again"))
  { 
    return true;
  }
 return false;

}


let engine = (id, serial, message) => {

  let classes = (classes) => document.getElementsByClassName(classes);
  let errorMsg = classes("error");
  var phoneno = /^[6789][0-9]{9}$/;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var nameformat=/^[A-Za-z_\s]{3,30}$/;
  if (id.value.trim() ==="")
      { 
  
    errorMsg[serial].innerHTML = message;
   
    return false;
    
      }

      else if (id.name==="name")
      {  if (!(id.value.match(nameformat)))
        {
        
          errorMsg[serial].innerHTML = 'INVALID NAME';
     
 return false;
 
        }
       else {
 errorMsg[serial].innerHTML = "";
 
  return true;
 
 
 }
 }
      else if (id.name==="email")
      {  if (!(id.value.match(mailformat)))
        {
       
          errorMsg[serial].innerHTML = 'INVALID EMAIL ADDRESS';
     
 return false;
 
        }
       else {
 errorMsg[serial].innerHTML = "";
 
  return true;
 
 
 }
 }
     else if (id.name==="phone")
          {  if (!(id.value.match(phoneno)))
            {
           
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





