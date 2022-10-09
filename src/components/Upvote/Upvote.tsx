import React, { useState } from "react";
import { Arrow, Container, Number } from "./Upvote.style";

function Upvote({ upvotes, id }: { upvotes: number; id: number }) {
  const [active, setActive] = useState(false);

  function handleClick(e: any) {
    e.preventDefault();
    setActive((prev) => !prev);
  }

  return (
    <Container onClick={handleClick} active={active ? true : false}>
      <Arrow
        src="https://www.reshot.com/preview-assets/icons/EUCMLYADT9/arrow-chevron-down-EUCMLYADT9.svg"
        alt="arrow"
        active={active ? true : false}
      />
      <Number active={active ? true : false}>{upvotes}</Number>
    </Container>
  );
}

export default Upvote;
