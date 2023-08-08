import React from "react";

const GradeItem = ({
  grade_id,
  grade_img,
  grade_descript,
  onClick,
  IsSelected,
}) => {
  return (
    <div
      onClick={() => onClick(grade_id)}
      className={[
        "GradeItem",
        IsSelected ? `GradeItem_on_${grade_id}` : "GradeItem_off",
      ].join(" ")}
    >
      <img alt="" src={grade_img} />
      <span>{grade_descript}</span>
    </div>
  );
};

export default React.memo(GradeItem);
