import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  AddFeedbackButton,
  AddIcon,
  BottomWrapper,
  ButtonsWrapper,
  Cancel,
  CancelWrapper,
  Container,
  ErrorText,
  Group,
  GroupDescription,
  GroupHeading,
  GroupInput,
  GroupTextArea,
  MainHeading,
  TopWrapper,
} from "./AddFeedback.style";

import React from "react";
import Select from "react-select";
import { useAppDispatch } from "../../app/hooks";
import { addFeedback } from "../../features/FeedbackSlice";

export const categoryOptions = [
  { value: "ux", label: "UX" },
  { value: "ui", label: "UI" },
  { value: "enhancement", label: "Enhancement" },
  { value: "feature", label: "Feature" },
  { value: "bug", label: "Bug" },
];

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    fontSize: "1rem",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    height: "2.5rem",
    width: "100%",
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    fontWeight: "500",
    fontSize: "1.1rem",
  }),
};

function AddFeedback() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      category: { value: "ux", label: "UX" },
      description: "",
    },
  });

  return (
    <Container>
      <TopWrapper>
        <AddIcon src="/assets/addIcon.svg" alt="add icon" />
      </TopWrapper>
      <BottomWrapper
        onSubmit={handleSubmit((data) => {
          dispatch(
            addFeedback({
              title: data.title,
              description: data.description,
              category: data.category.value,
            })
          );
          navigate("/");
        })}
      >
        <MainHeading>Create New Feedback</MainHeading>
        <Group>
          <GroupHeading>Feedback Title</GroupHeading>
          <GroupDescription htmlFor="title">
            Add a short, descriptive heading
          </GroupDescription>
          {errors.title?.message && (
            <ErrorText role="alert">{errors.title?.message}</ErrorText>
          )}
          <GroupInput
            {...register("title", {
              required: "This is a required field.",
              minLength: {
                value: 5,
                message: "The minimum length of this field is 5 characters.",
              },
            })}
          />
        </Group>
        <Group>
          <GroupHeading>Category</GroupHeading>
          <GroupDescription htmlFor="category">
            Choose a category for your feedback
          </GroupDescription>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                defaultValue={categoryOptions[0]}
                options={categoryOptions}
                styles={customStyles}
                isSearchable={false}
              />
            )}
          />
        </Group>
        <Group>
          <GroupHeading>Feedback Detail</GroupHeading>
          <GroupDescription htmlFor="description">
            Include any specific comments about what should we improved, added
            etc.
          </GroupDescription>
          {errors.description?.message && (
            <ErrorText role="alert">{errors.description?.message}</ErrorText>
          )}
          <GroupTextArea
            {...register("description", {
              required: "This is a required field.",
              minLength: {
                value: 20,
                message: "The minimum length of this field is 20 characters.",
              },
            })}
          />
        </Group>
        <ButtonsWrapper>
          <CancelWrapper>
            <Cancel
              onClick={(e: any) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              Cancel
            </Cancel>
          </CancelWrapper>
          <AddFeedbackButton type="submit">Add Feedback</AddFeedbackButton>
        </ButtonsWrapper>
      </BottomWrapper>
    </Container>
  );
}

export default AddFeedback;
