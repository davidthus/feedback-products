import React from "react";
import { Container, FilterButton } from "./Filter.style";

function Filter({ category, setCategory }: any) {
  const filters = [
    { label: "All", value: "all" },
    { label: "UI", value: "ui" },
    { label: "UX", value: "ux" },
    { label: "Enhancement", value: "enhancement" },
    { label: "Bug", value: "bug" },
    { label: "Feature", value: "feature" },
  ];

  return (
    <Container>
      {filters.map((filter, index) => {
        return (
          <FilterButton
            onClick={() => setCategory(filter.value)}
            active={category === filter.value ? true : false}
            key={index}
          >
            {filter.label}
          </FilterButton>
        );
      })}
    </Container>
  );
}

export default Filter;
