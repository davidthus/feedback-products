import React, { useState } from "react";
import { Arrow, Container, Number } from "./Upvote.style";

function Upvote({
  upvotes,
  id,
  roadmap,
}: {
  upvotes: number;
  id: number;
  roadmap?: boolean;
}) {
  const [active, setActive] = useState(false);

  function handleClick(e: any) {
    e.preventDefault();
    setActive((prev) => !prev);
  }

  return (
    <Container
      onClick={handleClick}
      active={active ? true : false}
      roadmap={roadmap ? true : false}
    >
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
