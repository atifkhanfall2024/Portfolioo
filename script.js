  function home(){
    var t1 = gsap.timeline({
      scrollTrigger:{
        trigger:"#main" , 
      //  markers:true ,
        scrub:2 ,
       // pin:true ,
        start:"top top",
        end:"top 20%"
      }
    }) 
    t1.from("#image",{
      scale:1.2 ,
      stagger:.1 ,
      duration:3 ,
    } , "hello")
    t1.from("#home",{
      scale:1 ,
      width:0 ,
      duration:3 ,
    } , "hello")
    t1.to("#overlay",{
      scale:1 ,
      opacity:0 ,
      duration:1 ,
    } , "hello")
    t1.to(" #overlay #image",{
      scale:1 ,
      rotate:180,
      opacity:0 ,
      duration:1 ,
      delay:1 ,
    } , "hello")
  }
  home()
  function About(){
    var t2 = gsap.timeline({
      scrollTrigger:{
        trigger:"#Aboutus" , 
      //  markers:true ,
        scrub:4 ,
       // pin:true ,
        start:"top 20%",
        end:"top 50%"
      }
    }) 
    t2.from("#card" , {
      scale:1.2,
      duration:1 ,
      opacity:0 ,
      y:50 ,
      left:"-40%",
      top:"10%"
    
    } , "id")
    t2.from("#abouttext" , {
    scale:1.1,
    opacity: 0 ,
      duration:1 ,
    
    } , "id")
    t2.to("#abouttext" , {
      scale:1,
      opacity: 1,
        duration:1 ,
      
      } , "id")
      t2.from("#skills" , {
        scale:1.2,
        duration:1 ,
        opacity:0 ,
        y:50 ,
        right:"-50%",
        top:"10%"
      
      } , "id")
  }
 About()

  function projects(){
    var t3 = gsap.timeline({
      scrollTrigger:{
        trigger:"#projects" , 
       // markers:true ,
        scrub:4 ,
       // pin:true ,
        start:"top 40%",
        end:"top 50%"
      }
    }) 
    t3.to("#pcards" ,{
  
      
    
      
  
    })
   
    t3.from("#pcards" ,{
      scale:1.1,
      opacity:1 ,
      duration:2,
      opacity:0 ,
      
  
    })
  }
  projects()

  function Contact(){
    var t4 = gsap.timeline({
      scrollTrigger:{
        trigger:"#contact" , 
       // markers:true ,
        scrub:4 ,
       // pin:true ,
        start:"top 40%",
        end:"top 50%"
      }
    }) 
  
  
    t4.from("#left" , {
      opacity:0 ,
      scale:1.3 ,
      x:30 ,
      y:50 ,
      duration:1.5 ,
  
    })
    t4.from("#right" , {
      opacity:0 ,
      scale:1.2,
      stagger:.1,
     right:"-50%",
      duration:1.5 ,
  
    })
  }
  Contact()
var t6 = gsap.timeline({


  scrollTrigger:{
    trigger:"#map" , 
   // markers:true ,
    scrub:4 ,
   // pin:true ,
    start:"top 40%",
    end:"top 50%"
  }
 
  })
  t6.to("#map" , {
    scale:1.1 ,
    duration:1.5 ,
  })
      
  const complete = document.querySelector("#complete")
  let count =0;
     setInterval(()=>{
     
     if(count<20){
      count++ 
  complete.innerHTML = count
    }
     } ,300)
     const completes = document.querySelector("#carddd")
     let counts =0;
        setInterval(()=>{
        
        if(counts<30){
         counts++ 
     completes.innerHTML = counts
       }
        } ,300)

