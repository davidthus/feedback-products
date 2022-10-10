import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { upvote } from "../../features/FeedbackSlice";
import { Arrow, Container, Number } from "./Upvote.style";

function Upvote({
  upvotes,
  id,
  roadmap,
  upvoted,
}: {
  upvotes: number;
  id: number;
  roadmap?: boolean;
  upvoted: boolean;
}) {
  const dispatch = useAppDispatch();

  function handleClick(e: any) {
    e.preventDefault();

    dispatch(upvote({ id: id }));
  }

  return (
    <Container
      onClick={handleClick}
      active={upvoted ? true : false}
      roadmap={roadmap ? true : false}
    >
      <Arrow
        src="https://www.reshot.com/preview-assets/icons/EUCMLYADT9/arrow-chevron-down-EUCMLYADT9.svg"
        alt="arrow"
        active={upvoted ? true : false}
      />
      <Number active={upvoted ? true : false}>{upvotes}</Number>
    </Container>
  );
}

export default Upvote;
