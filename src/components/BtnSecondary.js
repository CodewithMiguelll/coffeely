const BtnSecondary = ({label}) => {
    return (
      <button className="border p-2 rounded-md bg-[#a1887f] text-[#fafafa] transition-all active:bg-[#7e655c] hover:bg-[#7e6f69]">
        {label}
      </button>
    );
}
 
export default BtnSecondary;