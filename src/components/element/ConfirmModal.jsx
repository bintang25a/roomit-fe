import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function useConfirmDialog() {
   const [show, setShow] = useState(false);
   const [message, setMessage] = useState("Aku adalah kapal laut");
   const [success, setSuccess] = useState(false);
   const [resolver, setResolver] = useState(null);

   const confirm = (msg, scs) => {
      setMessage(msg);
      setSuccess(scs);
      setShow(true);

      return new Promise((resolve) => {
         setResolver(() => resolve);
      });
   };

   const handleClick = () => {
      setShow(false);
      if (resolver) resolver(true);
   };

   const ConfirmDialog = () =>
      show ? (
         <div className="confirm-overlay">
            <div className="confirm-box">
               {success ? (
                  <div className="logo success">
                     <FaCheckCircle />
                  </div>
               ) : success == false ? (
                  <div className="logo failed">
                     <FaTimesCircle />
                  </div>
               ) : null}
               <p>{message}</p>
               <div className="confirm-buttons">
                  <button className="save" onClick={handleClick}>
                     Okay
                  </button>
               </div>
            </div>
         </div>
      ) : null;

   return { confirm, ConfirmDialog };
}
