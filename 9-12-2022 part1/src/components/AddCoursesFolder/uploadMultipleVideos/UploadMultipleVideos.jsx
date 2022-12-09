import './UploadMultipleVideos.css'
import { useState } from 'react'
import VideoInput from './Upload'

const UploadMultipleVideos = () => {
  const [uploadedFiles, setUploadedFiles] = useState([])
  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles]
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file)
      }
    })
    setUploadedFiles(uploaded)
  }
  //   const handleFileEvent = (e) => {
  //     const chosenFiles = Array.prototype.slice.call(e.target.files)
  //     console.log('chosenFiles', chosenFiles)
  //     handleUploadFiles(chosenFiles)
  //   }
  return (
    <div>
      <div className="uploadMultiple-container">
        <div className="uploadMultiple-videos">
          {/* <div className="uploadMultiple-videosContainer">
            {' '}
            <input
              id="fileUpload"
              type="file"
              multiple
              accept="video/mp4,video/x-m4v,video/*"
              className="uploadMultipleVideos-input"
              onChange={(e) => {
                handleFileEvent(e)
              }}
            />
            <label htmlFor="fileUpload">
              <div className="uploadVideos-btn"> Upload Files </div>
            </label>
          </div> */}
          {/* <div className="uploaded-files-list">
            {uploadedFiles.map((file) => (
              <div>{file.name}</div>
            ))}
          </div> */}
          <VideoInput width={400} height={300} />
        </div>

        {/* right Side */}
        <div className="uploadMultiple-text">
          <div className="uploadMultiple-fields">
            <div className="upload-title">Sub&nbsp;Chapter&nbsp;Name</div>
            <input
              type="text"
              name="Category"
              placeholder="Sub Chapter Name"
              className="uploadMultiple-inputField"
            />
          </div>
          <div className="uploadMultiple-buttons">
            <button className="uploadMultiple-btn">Previous</button>
            <button className="uploadMultiple-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadMultipleVideos
