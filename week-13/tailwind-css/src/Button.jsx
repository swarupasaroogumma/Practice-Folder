export const Button = ({ disabled, children }) => {
    return (
      <span
         // Prevent clicks when disabled
        disabled={disabled} // Native button disable support
        className={` rounded-4Sxl  text-4xl px-32 py-8 text-white cursor-pointer ${disabled ? "bg-blue-200" :"bg-green-400"}
          
        `}
      >
        {children}
      </span>
    );
  };
  