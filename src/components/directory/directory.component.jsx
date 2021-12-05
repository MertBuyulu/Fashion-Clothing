import React from "react";
//styles
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = () => {
  const { sections } = useSelector(structuredSelector);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const structuredSelector = createStructuredSelector({
  sections: selectDirectorySections,
});

export default Directory;
