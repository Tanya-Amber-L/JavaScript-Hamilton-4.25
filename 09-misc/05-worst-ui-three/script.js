/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.getElementById("target");
    let result = []
    result.length = 4;
    target.innerHTML = result;
   
    
    
   //part_one
   let part_one = document.getElementById("part-one");
   let fix_one = document.getElementById('fix-part-one');
   let data_max = part_one.getAttribute("data-max");
   let data_min = part_one.getAttribute("data-min");

    let t = setInterval(()=>{
        if(part_one.value < data_max)
        {
            let x = parseInt(part_one.value) + 1;
            part_one.value = x;
        }
        else(part_one.value = data_min)
        
    }, 300)  

    fix_one.addEventListener("click", function() {
        clearInterval(t);
        result[0] =  "0" + String(part_one.value);
        target.innerHTML = result;
    })

    //part_two
    let part_two = document.getElementById("part-two");
    let fix_two = document.getElementById('fix-part-two');
    let data_max2 = part_two.getAttribute("data-max");
    let data_min2 = part_two.getAttribute("data-min");
 
     let t2 = setInterval(()=>{
         if(part_two.value < data_max2)
         {
             let x = parseInt(part_two.value) + 1;
             part_two.value = x;
         }
         else(part_two.value = data_min2)
         
     }, 300)  
 
     fix_two.addEventListener("click", function()
     {
         clearInterval(t2);
         if((String(part_two.value))< 10)
            {
                result[1] = `0${String(part_two.value)}`;
            }
         else
            {
                result[1] = String(part_two.value);
            }
         target.innerHTML = result;
 
     })
  
     //part_three
    let part_three = document.getElementById("part-three");
    let fix_three = document.getElementById('fix-part-three');
    let t3 = setInterval(()=>{
        if(part_three.value < data_max2)
        {
            let x = parseInt(part_three.value) + 1;
            part_three.value = x;
        }
        else(part_three.value = data_min2)
        
    }, 300)  
    fix_three.addEventListener("click", function()
     {
         clearInterval(t3);
         if((String(part_three.value ))< 10)
            {
                result[2] = `0${String(part_three.value)}`;
            }
         else
            {
                result[2] = String(part_three.value);
            }
         target.innerHTML = result;
 
     })

     //part_four
     let part_four = document.getElementById("part-four");
     let fix_four = document.getElementById('fix-part-four');
     let t4 = setInterval(()=>{
         if(part_four.value < data_max2)
         {
             let x = parseInt(part_four.value) + 1;
             part_four.value = x;
         }
         else(part_four.value = data_min2)
         
         
     }, 300)  
     fix_four.addEventListener("click", function()
      {
          clearInterval(t4);
          if((String(part_four.value)) < 10)
            {
                result[3] = `0${String(part_four.value)}`;
            }
         else
            {
                result[3] = String(part_four.value);
            }
          target.innerHTML = result;
      })

})();
