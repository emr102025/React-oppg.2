/* eslint-disable no-unused-vars */
import { useState } from "react";
import cookie from "/cookie.png";

export default function CookieClicker() {
  return (
    <>
      <h1>CookieClicker</h1>
      <button>
        <img src={cookie} alt="An animated happy cookie with arms and legs" />
      </button>
    </>
  );
}
