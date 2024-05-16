import React, { useState } from "react";

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Thực hiện xác thực tại đây
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
  };
  const handleBackToLogin = () => {
    setShowRegister(false);
  };
  return (
    <div className=" mt-20 border-2 border-solid rounded-lg text-white bg-[#000033] mx-auto w-96 border-[#081229] p-6">
      <div className="w-80  ">
        <h2 className="text-2xl text-center items-center font-bold mb-4">
          {showRegister ? "Đăng kí" : "Đăng nhập"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block">Tài khoản:</label>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="border-2 border-red-600 rounded-md px-3 py-2 w-72 text-black h-8"
            />
          </div>
          <div className="mb-4">
            <label className="block">Mật khẩu:</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="border-2 border-red-600 rounded-md px-3 py-2 text-black w-72 h-8"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="flex text-center justify-center">
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800"
              >
                {showRegister ? "Register" : "Login"}
              </button>
            </div>

            <div className="text-center ml-8">
              {showRegister && (
                <button
                  type="button"
                  onClick={handleBackToLogin}
                  className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-800"
                >
                  Quay lại
                </button>
              )}
            </div>
          </div>
        </form>
        {!showRegister && (
          <p
            className="text-center mt-4 text-blue-500 cursor-pointer"
            onClick={handleRegisterClick}
          >
            Bạn chưa có tài khoản? Đăng kí
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
