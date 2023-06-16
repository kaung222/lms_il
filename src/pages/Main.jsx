import Button from "../components/small/Button";
import { BsArrowRight, BsSearch } from "react-icons/bs";
import ShowStudents from "../components/small/ShowStudents";
import logo from "../assets/Edu+.png";
import kid from "../assets/kid.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";

const Main = () => {
  console.log(window.innerWidth);
  return (
    <div className="hero px-[120px]">
    <div className='  pt-[33px]'>

        
      <div className=" z-10 flex items-center w-full justify-between">
        <img src={logo} alt="" className="w-[100px] h-[47px]" />
        <div className="flex items-center justify-center gap-5">
          <p>Home</p>
          <p>Courses</p>
          <p>Contact</p>
          <p>FAQs</p>
        </div>
        <div className="flex gap-3">
          <Button text="Sign In" />
          <Button text="Sign Up" />
        </div>
      </div>
      <div className=" py-[50px]  flex items-center justify-between w-full">
        <div className=" w-1/2 ">
          <h2 className="text-[54px] my-5">Welcome to the EdTech Platform!</h2>
          <p className=" text-slate-500 text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            officia minima nostrum fuga praesentium impedit, sapiente recusandae
            harum numquam ut molestias nihil ducimus voluptate! Vel sapiente
            dicta accusantium aspernatur, repellendus nulla ipsa reprehenderit
            sunt ut voluptate tenetur quibusdam corrupti aperiam fuga beatae
            eligendi voluptas minima?
          </p>
          <div className=" bg-slate-100 w-[456px] h-[48px] flex rounded-full my-5 px-5 items-center justify-between">
            <BsSearch className="text-xl" />
            <input
              type="text"
              className="p-2 border-none outline-none w-full bg-slate-100 "
            />
            <select className=" mr-4 rounded-full bg-blue-300">
              <option value="" selected>
                Category
              </option>
              <option value="">English</option>
              <option value="">Technology</option>
              <option value="">Cooking</option>
            </select>
            <button className=" rounded-full bg-blue-300 p-2">
              <BsArrowRight />
            </button>
          </div>
          <div className="flex items-center justify-start gap-5">
            <button className="w-[150px] h-[48px]">
              <img src={google} alt="" />
            </button>
            <button className="w-[150px] h-[48px]">
              <img src={apple} alt="" />
            </button>
          </div>
        </div>
        <img src={kid} alt="" className=" w-[300px] h-[400px] mt-7" />
      </div>
    </div>
      <div className="cards -mb-10 flex items-center justify-center gap-5">
        <ShowStudents name="Students" count="900k" />
        <ShowStudents name="Courses" count="150" />
        <ShowStudents name="Classes" count="70" />
        <ShowStudents name="Teachers" count="500" />
      </div>
    </div>
  );
};

export default Main;
