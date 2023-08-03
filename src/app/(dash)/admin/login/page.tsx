"use client";
import IconButton from "@/src/components/button/IconButton";
import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log("Login clicked");
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm text-center">
        <h4 className="mb-12 mt-1 pb-1  text-xl font-semibold">
          欢迎来到女巫时代
        </h4>
        <form onSubmit={handleLogin}>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
              登陆
            </p>
          </div>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="邮箱"
          />
             
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="密码"
            />
           
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>记住密码</span>
            </label>
            <a
              className="text-purple-base hover:text-purple-dark hover:underline hover:underline-offset-4"
              href="#"
            >
              忘记密码?
            </a>
          </div>
          <div className="text-center">
            <button
              className="mt-4  px-4 py-2  text-white bg-purple-light  rounded hover:bg-purple-dark tracking-wider"
              type="submit"
            >
              登陆
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
