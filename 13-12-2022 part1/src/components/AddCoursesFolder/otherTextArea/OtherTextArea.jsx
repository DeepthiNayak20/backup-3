import './OtherTextArea.css'
const OtherTextArea = () => {
  return (
    <div>
      <div className="upload-videoCategoryFileds">
        <div>
          {' '}
          <div className="upload-title">Course&nbsp;Outcome</div>
          <div className="textarea-tagline">
            <textarea
              name="courseOutcome"
              className="upload-inputField "
            ></textarea>
          </div>
        </div>
        <div>
          <div className="upload-title">Requirements</div>
          <div className="textarea-tagline">
            <textarea
              name="requirements"
              className="upload-inputField "
            ></textarea>
          </div>
        </div>
      </div>
      <div className="upload-videoCategoryFiles">
        <div>
          {' '}
          <div className="upload-title">Image&nbsp;Upload</div>
          <input
            type="file"
            name="imageUpload"
            accept="image/png, image/jpeg"
            placeholder="Video Title"
            className="upload-inputField title"
          />
        </div>
        <div>
          <div className="upload-title">Video&nbsp;Upload</div>
          <input
            type="file"
            name="videoUpload"
            accept="video/*"
            placeholder="Video Category"
            className="upload-inputField category"
          />
        </div>
      </div>
      <div className="upload-difficultyLevel">
        <div>
          <div className="upload-title">Difficulty&nbsp;Level</div>
          <div className="upload-videoTitle">
            <select name="difficultyLevel" className="upload-select">
              <option
                value="Chapter 1 - Setting up a new project"
                className="QandA-option"
              >
                Setting up a new project
              </option>
              <option value="Chapter 2 - ReactJS"> ReactJS</option>
              <option value=" Chapter 3 - Web design">Web design</option>
            </select>
          </div>
        </div>
        <div>
          <div className="upload-title">Course&nbsp;Keyword</div>
          <input
            type="text"
            name="courseKeyWord"
            placeholder="Course Keyword"
            className="upload-inputField category"
          />
        </div>
      </div>
    </div>
  )
}

export default OtherTextArea
