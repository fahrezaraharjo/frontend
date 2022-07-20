import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { logoutRoute } from "../../utils/APIRoutes";

export default function Logout() {
  const navigate = useNavigate();
  const handleClick = async () => {
    const id = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    )._id;
    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      localStorage.clear();
      navigate("/login");
    }
  };
  return (
    <Button onClick={handleClick}>
      Logout
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #202021;
  box-shadow: 0px 6px 18px -9px rgba(0, 0, 0, 0.75);
  transition: transform 120ms ease-in;
  cursor: pointer;
  border: none;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
  .card:hover {
    transform: scale(1.07);
}
`;
