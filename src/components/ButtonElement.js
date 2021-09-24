import styled from "styled-components";

export const Button = styled.button`
    border-radius: 50px;
    background: #1b1442;
    white-space: nowrap;
    padding: 14px 48px;
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out
    z-index: 2;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #1b1485;
    }
`;
