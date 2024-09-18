const BtnPrimary = ({label}) => {
    return (
      <button className="border p-2 rounded-md bg-[#6d4c41] text-[#fafafa] transition-all hover:bg-[#63463d] active:bg-[#4d3128]">
        {label}
      </button>
    );
}
 
export default BtnPrimary;