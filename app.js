let form = document.forms.subscribe
let inp = form.querySelectorAll('input')

form.onsubmit = (event) =>{
    event.preventDefault();
    let reds = [];
    for(let elem of inp){
        if(elem.value.length === 0){
            reds.push(1)
            elem.style.border = '3px solid red'
        }else if(elem.value.length > 0){
            elem.style.border = '3px solid rgb(77, 255, 77)'
        }
    }
    if(reds.length !== 0){
    }else{
        submit()
    }

}

function submit() {
    let userdata = {}
    let fm = new FormData(form)

    fm.forEach((value, key)=>{

        userdata[key] = value
    })
    console.log(userdata);
}