import React, { useState } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

function BackToTop() {
  const [movetoTop, setMovetoTop] = useState(false);
  const move = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setMovetoTop(true);
    } else {
      setMovetoTop(false);
    }
  }
  );
  return (
    <>
      <div>
        {movetoTop ? (
          <button
            onClick={move}
            className="btn btn_top position-fixed bottom-0 end-0 mb-4 me-4 fc_white"
          >
            <IoMdArrowRoundUp />
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default BackToTop;
