import React from "react";
import { useForm } from "react-hook-form";
import { user } from "../../App";
import { useAppDispatch } from "../../app/hooks";
import { addComment } from "../../features/FeedbackSlice";
import {
  BottomWrapper,
  CharactersLeft,
  Container,
  ErrorText,
  Heading,
  PostComment,
  Textarea,
  TextAreaWrapper,
} from "./Input.style";

function Input({ id, author }: { id: number; author: user }) {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      commentContent: "",
    },
  });

  return (
    <Container
      onSubmit={handleSubmit((data) => {
        dispatch(
          addComment({ id: id, user: author, content: data.commentContent })
        );
        reset();
      })}
    >
      <Heading>Add Comment</Heading>
      <TextAreaWrapper>
        {errors.commentContent && (
          <ErrorText>{errors.commentContent?.message}</ErrorText>
        )}
        <Textarea
          {...register("commentContent", {
            required: "You must fill out this comment field first.",
            maxLength: {
              value: 250,
              message: "Maximum comment length is 250",
            },
            minLength: {
              value: 10,
              message: "Minimum comment length is 10",
            },
          })}
          placeholder="Write a comment"
        />
      </TextAreaWrapper>
      <BottomWrapper>
        <CharactersLeft>
          {250 - watch().commentContent.length} characters left
        </CharactersLeft>
        <PostComment type="submit">Post Comment</PostComment>
      </BottomWrapper>
    </Container>
  );
}

export default Input;
