import img from "./assets/image/avatar-jessica.jpeg";
import "./App.css";

function App() {
  return (
    <>
      <div className="container bg-[#141414ff] flex flex-col items-center content-center w-full max-w-[1440px]">
        <div className="main bg-[#1f1f1fff] mt-20 mb-20 mx-auto flex flex-col items-center rounded-xl w-77">
          <img
            src={img}
            alt="profile"
            className="img rounded-t-full rounded-b-full pt-5 p-5 w-40 m-2"
          />
          <div className="head  text-2xl font-medium text-[#ffff]">Jessica Randall</div>
          <div className="title font-normal text-sm text-[#c5f82aff] pt-1 pb-4">
          London, United Kingdom</div>
          <div className="message text-[#ffff] text-sm mb-6 mt-3">"Front-end developer and avid reader."</div>
          <div className="content text-[#ffff] font-bold bg-[#333333ff] w-70 h-10 text-center content-center rounded-lg mb-4 text-sm hover:bg-[#c5f82aff] hover:text-black cursor-pointer">GitHub</div>
          <div className="content text-[#ffff] font-bold bg-[#333333ff] w-70 h-10 text-center content-center rounded-lg mb-4 text-sm hover:bg-[#c5f82aff] hover:text-black cursor-pointer">Frontend Mentor</div>
          <div className="content text-[#ffff] font-bold bg-[#333333ff] w-70 h-10 text-center content-center rounded-lg mb-4 text-sm hover:bg-[#c5f82aff] hover:text-black cursor-pointer">LinkedIn</div>
          <div className="content text-[#ffff] font-bold bg-[#333333ff] w-70 h-10 text-center content-center rounded-lg mb-4 text-sm hover:bg-[#c5f82aff] hover:text-black cursor-pointer">Twitter</div>
          <div className="content text-[#ffff] font-bold bg-[#333333ff] w-70 h-10 text-center content-center rounded-lg mb-10 text-sm hover:bg-[#c5f82aff] hover:text-black cursor-pointer">Instagram</div>
        </div>
      </div>
    </>
  );
}

export default App;
