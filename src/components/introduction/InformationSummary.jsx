const InformationSummary = ({ item }) => {
  return (
    <div
      className="
        bg-gradient-to-r from-blue-600 to-blue-700 
        text-white text-center rounded-lg shadow-md 
        mx-1 sm:mx-2 my-5 sm:my-5 py-3 sm:py-4 w-50 sm:w-50
        transform transition-all duration-500 ease-in-out
        hover:scale-105 hover:shadow-xl
        opacity-0 translate-y-4 animate-fadeInUp
      "
      style={{ animationDelay: `${item.id * 0.2}s` }}
    >
      <div className="flex flex-col justify-center items-center">
        <p className="text-[14px] xxs:text-[16px] sm:text-[20px] font-semibold">
          {item.description}
        </p>
        <p className="text-[8px] xxs:text-[9px] sm:text-[14px] font-normal px-1 sm:px-2 text-wrap">
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default InformationSummary;
