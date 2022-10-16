import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { request } from "../../App";
import {
  AddFeedback,
  BackAnchor,
  ButtonWrapper,
  Container,
  FilterSuggestionsWrapper,
  LightBulb,
  NumOfSuggestions,
  RoadmapBack,
  RoadmapHeading,
} from "./Banner.styled";

interface SortOption {
  readonly value: string;
  readonly label: string;
}

export const sortOptions: readonly SortOption[] = [
  { value: "most-upvotes", label: "Most Upvotes" },
  { value: "least-upvotes", label: "Least Upvotes" },
  { value: "most-comments", label: "Most Comments" },
  { value: "least-comments", label: "Least Comments" },
];

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    fontSize: "1rem",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    height: "2.5rem",
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    fontWeight: "500",
    fontSize: "1.1rem",
  }),
};

function Banner({ setSortOrder, requests, roadmap }: any) {
  function handleChange(selectedOption: any) {
    setSortOrder(selectedOption.value);
  }

  return (
    <Container roadmap={roadmap ? true : false}>
      {roadmap ? (
        <RoadmapBack>
          <Link to="/" style={{ textDecoration: "none" }}>
            <BackAnchor>
              <img
                src="/assets/backhome.svg"
                alt="arrow to go back to the home page"
              />
              Go Back
            </BackAnchor>
          </Link>
          <RoadmapHeading>Roadmap</RoadmapHeading>
        </RoadmapBack>
      ) : (
        <FilterSuggestionsWrapper>
          <LightBulb
            src="/assets/suggestions/icon-suggestions.svg"
            alt="light bulb"
          />
          <NumOfSuggestions>
            {requests &&
              requests.filter((req: request) => req.status === "suggestion")
                .length}{" "}
            Suggestions
          </NumOfSuggestions>
          <Select
            defaultValue={sortOptions[0]}
            options={sortOptions}
            styles={customStyles}
            isSearchable={false}
            onChange={handleChange}
          />
        </FilterSuggestionsWrapper>
      )}
      <ButtonWrapper>
        <Link to="/add">
          <AddFeedback>+ Add FeedBack</AddFeedback>
          <AddFeedback mobile>+</AddFeedback>
        </Link>
      </ButtonWrapper>
    </Container>
  );
}

export default Banner;
