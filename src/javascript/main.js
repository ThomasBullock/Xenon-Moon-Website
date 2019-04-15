(function(global){
  // $('.support__page').hide()

  $starsHeight = $('.stars').height();
  console.log($starsHeight)
  $('.animation').height($starsHeight);


let message = 'Application is running!'

// console.log(message)
//   const returnTopBtn = {
//     el: document.getElementById('return-top'),
//     visible: false  
//   }

//   returnTopBtn.el.addEventListener('click', (e) => {
//     console.log('clicked fade');
//     fadeOut(returnTopBtn.el);
//   })
  
  
  // console.log(returnTopBtn);

	const state = {
    scrollY: 0
  }
    
  // const fadeIn = (el) => {
  //   el.velocity({"opacity": 1}, 
  //   {
  //     complete: function(elements, activeCall) {
  //         console.log("Finishing " + elements.length + " elements:", elements);
  //         returnTopBtn.visible = true;
  //     }
  //   })
  // }

  // const fadeOut = (el) => {
  //   el.velocity({"opacity": 0}, 
  //   {
  //     complete: function(elements, activeCall) {
  //         console.log("Finishing " + elements.length + " elements:", elements);
  //         returnTopBtn.visible = false;
  //     }
  //   })
  // }

  // window.addEventListener('scroll', function(e) {
  //   console.log(e);
  //   console.log(window.scrollY);
  //   state.scrollY = window.scrollY
  //   if(window.scrollY > 600 && !returnTopBtn.visible) {
  //     // returnTopBtn.style.display = 'block';
  //     fadeIn(returnTopBtn.el);

  //   } else if (window.scrollY < 600 && returnTopBtn.visible) {
  //     fadeOut(returnTopBtn.el);
  //     // returnTopBtn.style.display = 'none';

  //   }
  // })
	
}(window));