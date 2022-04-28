import React from 'react';

const Login = (props)=> {
    return (<div>
        <label >Username:</label><input placeholder='UserName'
                        value={props.username}
                        onChange={props.handleUsername}
                      />
        <label >Password:</label>
            <input  placeholder='Password'
                        value={props.password}
                        onChange={props.handlePassword}
                    />
        <button onClick={props.submit}  type='button'>Log in</button>
        <label >{props.error}</label>
    </div>);
};

export default Login;

