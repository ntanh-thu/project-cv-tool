import "./contentcreatecv.scss";
function ContentCreateCV() {
  return (
    <div className="cv">
      <div
        className="cv-page"
        contentEditable="true"
        onChangeCapture={(event) => {
          console.log(event);
        }}
      >
        aaaa
      </div>
    </div>
  );
}

export default ContentCreateCV;
