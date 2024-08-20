import { useEffect } from "react";

const Notfound = () => {
  useEffect(() => {
    function handleOnBeforeUnlode(beforeunload) {
      beforeunload.preventDefault();
    }
    window.addEventListener("beforeunload", handleOnBeforeUnlode, {
      capture: true,
    });
  });
  return <div>404 Not found</div>;
};

export default Notfound;
