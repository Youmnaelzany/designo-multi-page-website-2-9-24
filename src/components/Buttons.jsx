export default function MyButton({ children, ...props }) {
  return (
    <button
      type="button"
      className="btn w-[9.5rem] h-[3.5rem] rounded-[0.5rem] bg-white text-[#333136] text-[0.9375rem] font-medium tracking-[0.0625rem] uppercase cursor-pointer hover:bg-[#FFAD9B] hover:text-white transition-colors duration-300 ease-in outline-none border-none"
      {...props}
    >
      {children}
    </button>
  );
}
