let content = document.getElementById('content');
let subjects = document.getElementById('subject');
let navoption = document.getElementById('nav-options');
let fabars = document.getElementById('fabars');

fabars.onclick = function()
{
    if(navoption.style.display==='flex')
        {
            navoption.style.display='none';
        }
    
        else{
            navoption.style.display='flex';
        }
}


content.onclick= function (){
    if(subjects.style.display==='none')
    {
        subjects.style.display='flex';
        subjects.style.flexDirection='column';
    }

    else{
        subjects.style.display='none';
        navoption.style.display='none';
    }
}





// let math = document.getElementById('math');
// let mathbox = document.getElementById('math-box');
let reas = document.getElementById('reas');
let reasbox = document.getElementById('reas-box');

// math.onclick= function () {
//     if(mathbox.style.display==='none')
//     {   
//         mathbox.style.display='grid';
//         subjects.style.display='none';
//         reasbox.style.display='none';
//     }

//     else{
//         mathbox.style.display='none';
//         reasbox.style.display='none';
//         subjects.style.display='none';
//     }
// }

reas.onclick= function () {
    if(reasbox.style.display==='none')
    {  
        reasbox.style.display='grid';
        subjects.style.display='none';
        // mathbox.style.display='none';
        navoption.style.display='none';
    }

    else{
        // mathbox.style.display='none';
        reasbox.style.display='none';
        subjects.style.display='none';
        navoption.style.display='none';
    }
}

