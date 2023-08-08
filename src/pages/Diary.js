import { useContext, useEffect, useState } from "react";
import MyHeader from ".././components/MyHeader";

import { getStringDate } from "../utill/date";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import { gradeList } from "../utill/grade";
import MyButton from "../components/MyButton";

const Diary = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const navigate = useNavigate();
  const diaryList = useContext(DiaryStateContext);
  const { onRemove } = useContext(DiaryDispatchContext);

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `맛집 일기장 - ${id}번 일기`;
  }, []);

  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(parseInt(id));
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className="DiaryPage">로딩중입니다...</div>;
  } else {
    const curGradeData = gradeList.find(
      (it) => parseInt(it.grade_id) === parseInt(data.grade)
    );

    return (
      <div className="DiaryPage">
        <MyHeader
          headText={`${getStringDate(new Date())} 기록`}
          leftChild={
            <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
          }
          rightChild={
            <MyButton
              text={"수정하기"}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />

        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div
              className={[
                "diary_img_wrapper",
                `diary_img_wrapper_${data.grade}`,
              ].join(" ")}
            >
              <img alt="" src={curGradeData.grade_img} />
              <div className="grade_descript">
                {curGradeData.grade_descript}
              </div>
            </div>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
          <section>
            <div className="btn_area">
              <MyButton
                text={"삭제하기"}
                type={"negative"}
                onClick={handleRemove}
              />
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;
