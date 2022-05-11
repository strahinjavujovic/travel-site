

function prikazi() {
  
    document.querySelector('.menu-slider').classList.toggle("show");
 
  }
function search() {
   
    document.querySelector('.search-slider').classList.toggle("showsearch");
};

var swiper = new Swiper(".home-slider", {
    loop:true, 
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  window.onscroll = () => {

    if(window.scrollY>0){
      document.querySelector('.header').classList.add('skrol');
    }
    else if(window.scrollY==0){
      document.querySelector('.header').classList.remove('skrol');
    }
  }



  var swiper = new Swiper(".products", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
      1260: {
        slidesPerView: 4,
      },
    },
  });
  function zvezde(){
    let niz=document.getElementsByClassName('stars');
    var i=0;
    for(i;i<niz.length;i++){
    
      var b=niz[i].getAttribute('value');
     
      var c=5-b;
      var j=0,k=0;
      for(j;j<b;j++){
       
        var el = document.createElement('div');
        el.innerHTML=`<i class="fas fa-star"></i>`;
        niz[i].appendChild(el);
      
        
      }
      for(k;k<c;k++){
        var l = document.createElement("div");  
        l.innerHTML=`<i class="far fa-star"></i>`;
        niz[i].appendChild(l);
     
      }
    }
  }
  var swiper = new Swiper(".client", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
     600: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  
  var swiper = new Swiper(".posts", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
     600: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".logos", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
     600: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });