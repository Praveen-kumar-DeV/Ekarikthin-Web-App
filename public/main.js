

const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");
const motp=document.getElementById("motp");
const name = document.getElementById("email").value;
const emailInput = document.getElementById("email");
const codeInput = document.getElementById("code");




nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
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
  
  //form.reset();
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
     motp.innerHTML=`<p style="color:red;">OTP sent to :</p>`+email;
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
    paymode:paymode,otp:otp,};
     
      

    const data  = await axios.post( "/register",regform);
      

      console.log(data,"working......");
      const Cregis=data.data.data;
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
      const res=document.getElementById('confirm');
      const non=document.getElementById('background');
      non.style.display='none';
         res.innerHTML=JSON.stringify(Cregis);
         console.log(Cregis);
         

    }
    }

 catch (err) {
        console.log(err,"error.....code...")
        const errCode = err.response.data.code;
        Toastify({
          text:errCode,
          duration: 3000,
          
          newWindow: true,
          close: true,
          gravity: "top", 
          position: "right", 
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #ff0000, #ff4122)",
          },
          onClick: function(){} // Callback after click
        }).showToast();
       
      }
}