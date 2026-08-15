import { useEffect } from "react";




function Loader({className ='',variant = ''}) {
  
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, []);
  return (
  
      <div className={`${className} ${variant} `}>
                    
      </div>
 
  );
}

export default Loader;
