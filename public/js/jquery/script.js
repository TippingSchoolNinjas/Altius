$(function(){
$("#vegas").vegas({
  delay:4000,
  slides:[
    { src:'/images/BN 1.jpg' },
    { src:'/images/BN 2.jpg' },
    { src:'/images/BN 4.jpg'},
    { src:'/images/BN 5.jpg'}
  ],
  transition : 'zoomOut'
});
})


var arr = ['Consistency in performance, greater comfort and safety.',
           'Designed to replicate the best natural grass fields.',
           'Delivering a twelve-month season, rain or shine',
           'Fast pitches, true ball roll and increased player safety.'];
var index = 1;
setInterval(function() {
    document.getElementById("vegas-text").innerHTML = arr[index];
    console.log(Date.now())
    // document.getElementById("a1").innerHTML = arr[index];
    index += 1;
    if (index == arr.length)
        index = 0
    
}, 5000);