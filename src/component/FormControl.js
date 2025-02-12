import React, {useRef} from 'react'
function FormControl() {
    
    const name = useRef(null);
    const password = useRef(null);
    const submit = (e)=>{
        e.preventDefault();
        console.log(name.current.value);
        console.log(password.current.value);
        if(name.current.value == "raihan" && password.current.value == "123"){
            alert("succes Login");
        }else{
            alert("Login Failed!!")
        }
    }

    // const [name2, setName2] = use
  return (
    <div>FormControl
    <form onSubmit={submit}>
        <p>nama</p>
        <input type="text" ref={name}/>
        <p>password</p>
        <input type="password" ref={password}/>
        <button type="submit">submit</button>
    </form>
    </div>
  )
}

export default FormControl