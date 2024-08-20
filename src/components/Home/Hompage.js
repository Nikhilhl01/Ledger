import React from "react";
import { toast } from "sonner";

const Hompage = () => {
  return (
    <center>
      <h1>Hiii</h1>
      <p>it is home page</p>
      <button onClick={() => toast.info("Hello it is a toast from sooner")}>
        Toaster
      </button>
    </center>
  );
};

export default Hompage;
