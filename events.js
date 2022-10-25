const form = document.querySelector('.myForm');
const msg = document.querySelector('.msg');
const btn = document.querySelector('#submit-btn');
form?.addEventListener('submit', onSubmit);
btn?.addEventListener('mouseover', onMouseOver);
btn?.addEventListener('mouseout', onMouseOut)

function onSubmit(e){
    e.preventDefault();
    const uname = document.querySelector('#name');
    const email = document.querySelector('#email');
    
    if(uname.value==='' || email.value===''){
        msg.classList.add('error')
        msg.innerHTML='Please enter values in all fields.'
        setTimeout(()=>msg.remove(),3000);
    }
    else{
        console.log(uname.value,": ",email.value);
        uname.value = '';
        email.value = '';
    }
    
}

function onMouseOver(e){
    e.preventDefault();
    e.target.style = 'background-color:aliceblue; color:black; cursor:pointer' 
}

function onMouseOut(e){
    e.preventDefault();
    e.target.style = 'background-color:black; color:aliceblue;' 
}