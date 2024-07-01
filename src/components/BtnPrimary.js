import {motion} from 'framer-motion';

const BtnPrimary = ({label}) => {
    return ( 
        <motion.button 
        initial={{

        }}
        animate={{
            
        }}
         className="border p-2 rounded-md bg-[#6d4c41] text-[#fafafa] transition-all active:bg-[#4d3128] hover:translate-y-1 active:translate-y-2">{label}</motion.button>
     );
}
 
export default BtnPrimary;