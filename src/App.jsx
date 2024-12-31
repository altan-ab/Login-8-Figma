const App = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Sol Alt Yeşil Çizgi */}
      <img
        src="/images/Ellipse-1.svg"
        alt="Sol Alt Yeşil Organik Çizgisel"
        className="absolute bottom-[-10px] left-[-20px] z-[-20]"
      />

      {/* Sağ Üst Yeşil Çizgi */}
      <img
        src="/images/Ellipse-2.svg"
        alt="Sağ Üst Yeşil Organik Çizgisel"
        className="absolute top-[-90px] right-0 z-[-20]"
      />

      {/* Login Kartı */}
      <div className="bg-white shadow-2xl rounded-[21px] w-1/4 p-8">
        <h1 className="color-[#02B94B] text-5xl font-semibold text-green-600 text-left mb-6 tracking-widest text-left">
          LOGIN
        </h1>

        {/* Form */}
        <form className="space-y-4 z-10">
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </form>

        {/* Login Button */}
        <button
          type="submit"
          className="w-1/2 mt-6 py-2 bg-[#02B94B] text-white  font-bold text-lg rounded-md hover:bg-green-700 transition z-10"
        >
          LOGIN
        </button>

        {/* OR Bölümü */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-3 text-gray-800 text-lg">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Sosyal Medya İconları */}
        <div className="flex justify-center items-center space-x-16 z-10">
          <img
            src="/images/image-1.png"
            alt="Google"
            className="cursor-pointer"
          />
          <img
            src="/images/image-2.png"
            alt="Facebook"
            className="cursor-pointer"
          />
        </div>

        {/* Footer --> Forgot Password ve Register */}
        <footer className="flex justify-between text-sm mt-4 text-green-600 z-10">
          <a href="#" className="hover:underline z-10">
            Forgot password
          </a>
          <a href="#" className="hover:underline z-10">
            Register
          </a>
        </footer>
      </div>
    </div>
  )
}
export default App
