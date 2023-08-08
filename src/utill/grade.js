const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

export const gradeList = [
  {
    grade_id: 1,
    grade_img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
    grade_descript: `매우 맛있음`,
  },
  {
    grade_id: 2,
    grade_img: process.env.PUBLIC_URL + `/assets/emotion2.png`,
    grade_descript: `맛있음`,
  },
  {
    grade_id: 3,
    grade_img: process.env.PUBLIC_URL + `/assets/emotion3.png`,
    grade_descript: `그럭저럭`,
  },
  {
    grade_id: 4,
    grade_img: process.env.PUBLIC_URL + `/assets/emotion4.png`,
    grade_descript: `별로`,
  },
  {
    grade_id: 5,
    grade_img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
    grade_descript: `끔찍함`,
  },
];
