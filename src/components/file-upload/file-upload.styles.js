import styled from "styled-components";

export const FileUploadContainer = styled.section`
  min-width: 400px;
  position: relative;
  margin: 25px 0 15px;
  border: 2px dotted lightgray;
  padding: 35px 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const FormField = styled.input`
  font-size: 18px;
  display: block;
  width: 100%;
  border: none;
  text-transform: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  &:focus {
    outline: none;
  }
`;

export const InputLabel = styled.label`
  top: -21px;
  font-size: 13px;
  color: black;
  left: 0;
  position: absolute;
`;

export const DragDropText = styled.p`
  font-weight: normal;
  letter-spacing: 2.2px;
  margin-top: 0;
  text-align: center;
`;

export const UploadFileBtn = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 1px solid #3498db;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  padding: 1.1em 2.8em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 6px;
  color: #3498db;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

export const FilePreviewContainer = styled.article`
  min-width: 400px;
  margin-bottom: 35px;
  span {
    font-size: 14px;
  }
`;

export const PreviewList = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const RemoveFileIcon = styled.i`
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }
`;

export const PreviewContainer = styled.section`
  padding: 0.25rem 0;
`;

export const FileMetaData = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  min-width: 400px;
  background: grey;
  margin-top: 5px;
  color: white;
`
export const ButtonContainer = styled.div`
  min-width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center
`