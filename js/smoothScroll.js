const smoothScrollElems=document.querySelectorAll('a[href^="#"]:not( a[href="#"])');

    smoothScrollElems.forEach((elem)=>{
        elem.addEventListener('click',(event)=>{
            event.preventDefault();
            const id=elem.getAttribute('href').substring(1);
            document.getElementById(id).scrollIntoView({
                behavior:'smooth'
            });
        });
    });
