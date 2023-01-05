export default function PageNav(props) {
  const { crnPage, setCurrentPage, currentpage } = props;
  return (
    <li>
      <button
        onClick={() => {
          setCurrentPage(crnPage);
        }}
        className={
          crnPage === currentpage
            ? "text-black bg-green-600 border-[#343434] hover:text-black z-10 py-2 px-3 leading-tight text-black bg-gray border border-gray-300 hover:bg-gray-100  "
            : "text-black h-[40px] bg-green-600 border-[#343434] hover:text-[#5CBB5C] z-10 px-3 leading-tight text-black bg-gray border border-gray-300 hover:bg-gray-100 "
        }
      >
        {crnPage}
      </button>
    </li>

  );
}