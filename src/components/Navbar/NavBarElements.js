import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #1b1442;
  height: 90px;
  display: flex;
  justify-content: space-between;
  padding: 0.6rem calc((100vw - 1000px) / 6);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;
export const NavLink = styled.a`
  color: #fff;
  display: flex;
  text-decoration: none;
  align-items: center;
  padding: 0px 1.8rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.4rem;

  &:hover {
    color: #ffe347;
  }
`;

export const MobileIcon = styled.div``;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -99px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
