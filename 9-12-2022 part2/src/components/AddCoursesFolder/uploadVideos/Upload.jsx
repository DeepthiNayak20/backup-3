import './Upload.css'
import { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import UploadMultipleVideos from '../uploadMultipleVideos/UploadMultipleVideos'
import RichTextEditor from '../richTextEditor/RichTextEditor'

const Upload = () => {
  const [counterVideo, setCounterVideo] = useState(0)
  const [uploadSuccessful, setUploadSuccessful] = useState(true)

  const addVideoHandler = () => {
    setCounterVideo(counterVideo + 1)
    // console.log(counter)
  }
  return (
    <div>
      <div className="upload-container">
        {/* <div className="upload-addNewButton">
          {' '}
          <button
            className="QandA-addNewBtn"
            onClick={() => {
              addVideoHandler()
            }}
          >
            Add&nbsp;New&nbsp;+
          </button>
        </div> */}
        <form action="" className="upload-formController">
          <div className="upload-videoCategory">
            <div>
              {' '}
              <div className="upload-title">Video&nbsp;Title</div>
              <input
                type="text"
                name="Title"
                placeholder="Video Title"
                className="upload-inputField title"
              />
            </div>
            <div>
              <div className="upload-title">Video&nbsp;Category</div>
              <input
                type="text"
                name="Category"
                placeholder="Video Category"
                className="upload-inputField category"
              />
            </div>
          </div>
          {/* discription overview */}
          <div className="upload-addDescription">
            <div className="upload-discriptionTitle">
              Add&nbsp;Discription&nbsp;/&nbsp;Overview
            </div>
            <div className="uplaod-discriptionArea">
              <RichTextEditor />
            </div>
          </div>
          {/* add videos */}
          <div className="upload-video">
            <div className="upload-videiTitle">
              Video&nbsp;Upload&nbsp;Section
            </div>
            <div className="upload-addNewButton">
              {' '}
              <button
                type="button"
                className="QandA-addNewBtn"
                onClick={() => {
                  addVideoHandler()
                }}
              >
                Add&nbsp;New&nbsp;+
              </button>
            </div>
          </div>
          {/* upload videos */}
          {Array.from(Array(counterVideo)).map((i, index) => {
            return (
              <Accordion allowZeroExpanded key={i}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="QandA-QuestionContainer">
                        <div className="QandA-QuestionNo">
                          Chapter&nbsp;Name
                        </div>
                        <div className="QandA-containerItem">
                          <div className="QandA-containItem">
                            {' '}
                            <div className="upload-head">
                              <input
                                type="text"
                                placeholder="Question"
                                className="upload-inputText"
                              />
                              {!uploadSuccessful ? (
                                <div className="upload-uploadStatus upload-successfully">
                                  <svg
                                    width="20"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM10.935 21.435L5.55 16.05C4.965 15.465 4.965 14.52 5.55 13.935C6.135 13.35 7.08 13.35 7.665 13.935L12 18.255L22.32 7.935C22.905 7.35 23.85 7.35 24.435 7.935C25.02 8.52 25.02 9.465 24.435 10.05L13.05 21.435C12.48 22.02 11.52 22.02 10.935 21.435Z"
                                      fill="#1EAB0D"
                                    />
                                  </svg>
                                  Videos&nbsp;upload&nbsp;successful
                                </div>
                              ) : (
                                <div className="upload-uploadStatus upload-failed">
                                  <svg
                                    width="20"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 16.5C14.175 16.5 13.5 15.825 13.5 15V9C13.5 8.175 14.175 7.5 15 7.5C15.825 7.5 16.5 8.175 16.5 9V15C16.5 15.825 15.825 16.5 15 16.5ZM16.5 22.5H13.5V19.5H16.5V22.5Z"
                                      fill="#FF0031"
                                    />
                                  </svg>
                                  upload&nbsp;failed
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="upload-container">
                      <UploadMultipleVideos />
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            )
          })}
          <div className="Upload-buttonPublish">
            <button type="submit" className="QandA-Button">
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Upload
