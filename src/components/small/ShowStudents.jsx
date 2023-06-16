// eslint-disable-next-line react/prop-types
const ShowStudents = ({ count, name }) => {
  return (
    <div className=" w-[280px] h-[130px] rounded-lg border border-[#7AA6C7]">
      <p className=" w-full text-center font-extrabold text-[38px] my-[21px]">{count}</p>
      <h1 className=" text-center text-[18px]">{name}</h1>
     
    </div>
  );
};

export default ShowStudents;
