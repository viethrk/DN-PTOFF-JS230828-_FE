import { Button, Input } from "@mui/material";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../api/auth.api";

const Login = (props) => {
  const navigate = useNavigate();

  const usernameRef = useRef();
  const passwordRef = useRef();
  const login = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const loginRes = await auth(username, password);

    if (!loginRes) {
      return;
    }

    localStorage.setItem("token", loginRes.access_token);

    navigate("/product");
  };
  return (
    <Root>
      <div>
        <label>User name</label>
        <input ref={usernameRef} />
      </div>
      <div>
        <label>Password</label>
        <input ref={passwordRef} />
      </div>
      <Button onClick={login}>Login</Button>
    </Root>
  );
};

const Root = styled.div`
  label {
    margin-right: 15px;
  }
`;

export default Login;
