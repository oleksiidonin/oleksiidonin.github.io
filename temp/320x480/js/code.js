// ======================================================================== Build

// dom objects
var o = {};
// img buffers
var b = {};

// Global variables - make timelines accessible
var iclp;
var framelp;

var policylink = "";

const settings = {
  w: 320,
  h: 480,
  assets: [
    {
      format: "jpg",
      type: "class",
      cors: false,
      src: "bg bg2",
    },
    /*
    {
      format: "png",
      type: "class",
      cors: false,
      src: "f1 f2 f3 icon cta",
    },
   */
    {
      format: "otf",
      type: "font",
      fontName: "DIN_Next_Arabic_Bold",
      src: "DIN_Next_Arabic_Bold",
    },
    
  ],
};

async function sendLead(data, authToken) {
  try {
    const response = await fetch(
      "https://automotive-leads.ami.cz/api/rest/v2/lead",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-auth-token": authToken,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Success:", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

/// FORM HANDLE

//trigger started
document.getElementById("submit_btn").addEventListener("click", function (e) {
  e.stopPropagation();
  trackandCTA();
});

var inputField = document.getElementsByClassName("input_field");

for (index = 0; index < inputField.length; ++index) {
  inputField[index].addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

function trackandCTA() {
  var emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z&Agrave;\-&yuml;\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var textRegex = /^[\p{L}\s-]{2,30}$/u;
  var phoneRegex = /^(\+)?([ 0-9()-]){9,14}$/g;

  //error text
  var error_text = document.getElementById("error_text");
  var error_email = document.getElementById("error_email");
  var error_phone = document.getElementById("error_phone");
  var error_psc = document.getElementById("error_psc");

  //get data
  var your_name = document.getElementById("your_name").value;
  var your_phone = document.getElementById("your_phone").value;
  var your_city = document.getElementById("your_city").value;
  var your_age_group = "";
  var check_boxes_data = "";

  if (!your_name.match(textRegex)) {
    nameOk = false;
    error_text.classList.remove("hide");
    document.getElementById("your_name").classList.add("has_error");
    hideError();
    return false;
  } else {
    nameOk = true;
  }

  if (!your_phone.match(phoneRegex)) {
    console.log("phone error");
    phoneOk = false;
    error_phone.classList.remove("hide");
    document.getElementById("your_phone").classList.add("has_error");
    hideError();
    return false;
  } else {
    phoneOk = true;
  }

  if (your_city === "") {
    console.log("psc error");
    pscOk = false;
    error_psc.classList.remove("hide");
    document.getElementById("your_city").classList.add("has_error");
    hideError();
    return false;
  } else {
    pscOk = true;
  }

  function hideError() {
    setTimeout(() => {
      error_text.classList.add("hide");
      error_email.classList.add("hide");
      error_phone.classList.add("hide");
      error_psc.classList.add("hide");

      document.getElementById("your_name").classList.remove("has_error");
      document.getElementById("your_phone").classList.remove("has_error");
      document.getElementById("your_city").classList.remove("has_error");
    }, 1500);
  }


  //check
  if (nameOk && phoneOk && pscOk) {
    trackValues(your_name, your_phone, your_city);
    finishedFunction();

    document.getElementById("submit_btn").classList.add("noevent");

    setTimeout(() => {
      gsap.to(".frame2", 0.5, { x: -settings.w, opacity: 0 });
      gsap.to(".bg2", 0.5, {
        x: 0,
        opacity: 1,
        onComplete: () => {
          wrapper.addEventListener("click", clickThrough);

          gsap.to(".btn", 0.5, {
            scale: 1.1,
            repeat: -1,
            yoyo: true,
            transformOrigin: "center bottom",
          });
        },
      });
    }, 300);
  }
}

function consentCheck() {
  var checkBox = document.getElementById("consent");
}

function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}
/// END FORM HANDLE

function init(event) {
  gsap.set(".frame2, .bg2", { x: settings.w });

  gsap.to(".wrapper", { opacity: 1 });

  iclp = gsap.timeline({ repeat: -1, yoyo: true, paused: true });
  iclp.to(".icon", { scale: 1.1, repeat: -1, yoyo: true, transformOrigin: "center bottom", duration: 0.4, ease: "sine.inOut" });

  gsap.to(".try_again_btn", 0.5, { x: -5, repeat: -1, yoyo: true });

  gsap
    .timeline({
      onComplete: () => {
        iclp.play();
      },
    })
    .from(".icon", 0.6, { y: 50, opacity: 0, ease: "power2.out" }, "-=0.3");


  document.querySelector(".try_again_btn").addEventListener("click", function () {
    gsap.to(".frame1", 0.5, { x: 0, opacity: 1 });
    gsap.to(".frame2", 0.5, {
      x: settings.w,
      opacity: 1,
      onComplete: () => {
        gsap.to(".icon", {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(2)",
          onComplete: () => {
            iclp.play();
          },
        });
      },
    });
  });

  document.querySelector(".frame1").addEventListener("click", function () {
    gsap.to(".frame1", {
            x: -settings.w,
            duration: 0.5,
            ease: "back.out(1)",
          });
          gsap.to(".frame2", {
            x: 0,
            duration: 0.5,
            ease: "back.out(1)",
            onComplete: () => {
              
            },
          });
  });
}
/*
window.addEventListener("load", () => {
  init();
});
*/

EskimiDef.load().then(() => {
  init();
});
