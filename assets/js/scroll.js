window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  if(scrollTop >0 ){
      document.querySelector(".nav").style.transform = "translateY(-50px)"
  }else{
    document.querySelector(".nav").style.transform = "translateY(0px)"
  }
});


// addEventListener("event-type", ()=>{})