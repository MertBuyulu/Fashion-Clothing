import React from "react";
//styles
import styled from "styled-components";
//components
import MenuItem from "../menu-item/menu-item.component";

import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = () => {
  const { sections } = useSelector(structuredSelector);

  return (
    <DirectoryMenuWrapper>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuWrapper>
  );
};

const structuredSelector = createStructuredSelector({
  sections: selectDirectorySections,
});

const DirectoryMenuWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default Directory;
