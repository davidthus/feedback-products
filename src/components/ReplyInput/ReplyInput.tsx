import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addReply } from "../../features/FeedbackSlice";
import {
  Container,
  ErrorText,
  Inputs,
  PostReply,
  TextArea,
} from "./ReplyInput.style";

function ReplyInput({
  feedbackId,
  commentId,
  user,
  setReplyOpen,
}: {
  feedbackId: number;
  commentId: number;
  user: object;
  setReplyOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      replyContent: "",
    },
  });

  return (
    <Container
      onSubmit={handleSubmit((data) => {
        dispatch(
          addReply({
            feedbackId,
            commentId,
            user,
            currentUser,
            content: data.replyContent,
          })
        );
        setReplyOpen(false);
      })}
    >
      <Inputs>
        <TextArea
          {...register("replyContent", {
            required: "This is a required field.",
          })}
          placeholder="Type your reply here"
        />
        <PostReply type="submit">Post Reply</PostReply>
      </Inputs>
      {errors.replyContent?.message && (
        <ErrorText>{errors.replyContent?.message}</ErrorText>
      )}
    </Container>
  );
}

export default ReplyInput;
