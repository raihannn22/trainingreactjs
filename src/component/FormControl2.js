import React, {useState} from 'react'
function FormControl2() {
    
    const [name, setName] = useState("") 
    const [password, setPassword] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        console.log(name);
        console.log(password);
        if(name == "raihan" && password == "123"){
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
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <p>password</p>
        <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">submit</button>
    </form>
    </div>
  )
}

export default FormControl2