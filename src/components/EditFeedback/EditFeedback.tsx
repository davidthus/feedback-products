import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteFeedback, editFeedback } from "../../features/FeedbackSlice";
import {
  BottomWrapper,
  ButtonsWrapper,
  Cancel,
  CancelWrapper,
  Container,
  Delete,
  EditIcon,
  ErrorText,
  Group,
  GroupDescription,
  GroupHeading,
  GroupInput,
  GroupTextArea,
  MainHeading,
  SaveChanges,
  TopWrapper,
} from "./EditFeedback.style";

interface Options {
  value: string;
  label: string;
}

const categoryOptions: Options[] = [
  { value: "ux", label: "UX" },
  { value: "ui", label: "UI" },
  { value: "enhancement", label: "Enhancement" },
  { value: "feature", label: "Feature" },
  { value: "bug", label: "Bug" },
];

const statusOptions: Options[] = [
  { value: "suggestion", label: "Suggestion" },
  { value: "in-progress", label: "In-Progress" },
  { value: "planned", label: "Planned" },
  { value: "live", label: "Live" },
];

function EditFeedback() {
  const { feedback } = useAppSelector((state) => state);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function findReq(id: string | undefined) {
    const numId = Number(id);
    const index = feedback.findIndex((req) => req.id === numId);
    const req = feedback[index];
    return req;
  }
  const Request = findReq(id);
  console.log(Request);

  const [CategoryObject] = categoryOptions.filter(
    (option) => option.value === Request.category
  );
  const [StatusObject] = statusOptions.filter(
    (option) => option.value === Request.status
  );

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: Request.title,
      category: CategoryObject,
      status: StatusObject,
      description: Request.description,
    },
  });

  return (
    <Container>
      <TopWrapper>
        <EditIcon src="/assets/editIcon.svg" alt="edit icon" />
      </TopWrapper>
      <BottomWrapper
        onSubmit={handleSubmit((data) => {
          console.log(data);
          dispatch(
            editFeedback({
              title: data.title,
              description: data.description,
              category: data.category.value,
              status: data.status.value,
              id: id,
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
                defaultValue={CategoryObject}
                options={categoryOptions}
                styles={customStyles}
                isSearchable={false}
              />
            )}
          />
        </Group>
        <Group>
          <GroupHeading>Update Status</GroupHeading>
          <GroupDescription htmlFor="status">
            Change feature state
          </GroupDescription>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                defaultValue={StatusObject}
                options={statusOptions}
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
          <Delete
            onClick={() => {
              dispatch(deleteFeedback({ id: Number(id) }));
              navigate("/");
            }}
          >
            Delete
          </Delete>
          <CancelWrapper>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Cancel>Cancel</Cancel>
            </Link>
          </CancelWrapper>
          <SaveChanges type="submit">Save Changes</SaveChanges>
        </ButtonsWrapper>
      </BottomWrapper>
    </Container>
  );
}

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

export default EditFeedback;
