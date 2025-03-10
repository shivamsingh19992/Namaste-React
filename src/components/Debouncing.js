import { useEffect, useState } from "react"

const Debounce=()=>{
    const [inputext,setInputText] = useState('');
    useEffect(() => {
        debugger;
        let timer;
         timer = setTimeout(()=>{
            console.log(inputext);
        },500)
      return () => clearTimeout(timer);
    }, [inputext])
    
    return(
        <div>
            <input type="text" onChange={e=>setInputText(e.target.value)}/>
        </div>
        
    )
}

const DebounceasSimpleJS =()=>{

    function callapi(){
        console.log('api call')
    }

    function debounceAsJsFunc(fn,delay)
    {
        let timer;
        return function(...args){
            clearTimeout(timer)
            //way 1
            setTimeout(() => {
                fn.apply(this,args);
            }, delay);
            //way 2
            setTimeout(()=>fn(...args),delay)
        }
    }

    J
    return(
        <div>
            <input type="text" onChange={e=>setInputText(e.target.value)}/>
        </div>
        
    )
}

export default Debounce;