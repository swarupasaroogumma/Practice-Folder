export const Input = ({  onClick,type,placeholder }) => {
    return (
      <span onClick={onClick} // Prevent clicks when disabled
        // Native button disable support
        className={` p-8  rounded-2xl text-4xl px-2 py-2 text-white cursor-pointer bg-blue-500`}
       
      >
    <   input type={type} placeholder={placeholder} className="bg-blue-500 outline-none p-4"/>
      </span>
    );
  };
  