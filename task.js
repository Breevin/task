var a;
        function expand(){
            var menu= document.querySelector('#menu');
            var plus= document.querySelector('#plus');
            var contain= document.querySelector('.container');

            
            
            if(a==0){
                menu.style.transform = 'scale(1.4)';
                plus.style.transform = 'rotate(360deg)';
                contain.style.border = 'transparent'
                return a = 1;
            }
            else{
                menu.style.transform = 'scale(0)';
                plus.style.transform = 'rotate(0deg)';
                contain.style.border ='#de4141 4px solid';
                contain.style.transition = '.4s'
                return a = 0;
            }
        }




// function expand(){
//     const menu = document.querySelector('#menu');
// const plus = document.querySelector('.fa-plus');
//     menu.style.transform = 'scale(1.4)';
//     plus.style.transform = 'rotate(360deg)';
// }