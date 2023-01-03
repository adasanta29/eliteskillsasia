import { motion } from "framer-motion";
import '../team-modal/Team-modal.css';
import { coaches } from '../../constants/data'
import { Backdrop } from "@mui/material";

const dropIn = {
    hidden: {
        y: "-100vh"
    },

    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },

    exit: {
        y: "100vh",
        opacity: 0,
    }
};

const Team_Modal = ({ isOpen, handleClose, text }) => {
    return (
        <Backdrop sx={{ color: '#ca1a1f', zIndex: (theme) => theme.zIndex.drawer + 1}} open={isOpen} onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="team__modal red-gradient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="modalContainer">
                    {text}
                </div>

                <button onClick={handleClose} className="teambtn">
                    Close
                </button>
            </motion.div>
        </Backdrop>
    );
};

export default Team_Modal;