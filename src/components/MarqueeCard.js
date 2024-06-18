const MarqueeCard = ({title, description}) => {
    return ( 
        <div className=" border border-[#3e2723] rounded-lg shadow-xl p-4 m-2 text-center">
            <h3 className="text-lg text-[#040310] mb-2">{title}</h3>
            <p className="text-base text-[#040310]">{description}</p>
        </div>
     );
}
 
export default MarqueeCard;