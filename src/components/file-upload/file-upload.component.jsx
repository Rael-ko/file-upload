import React, { useRef, useState } from "react";
import {
  FileUploadContainer,
  FormField,
  DragDropText,
  UploadFileBtn,
  FilePreviewContainer,
  PreviewContainer,
  PreviewList,
  FileMetaData,
  RemoveFileIcon,
  InputLabel,
  ButtonContainer
} from "./file-upload.styles";
import ProgressBar from "@ramonak/react-progress-bar";
import {storage, firestore} from '../../firebase';

const FileUpload = ({
  label,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      files[file.name] = {progress: 0, file};
    }
    return { ...files };
  };


  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
    }
  };

  const removeFile = (fileName) => {
    delete files[fileName];
    setFiles({ ...files });
  };

  const submit = () => {
    if (Object.keys(files).length > 0) {
      Object.keys(files).forEach(key => {
        const fileName = getFileName(key);
        var uploadTask = storage.ref(`/files/${fileName}`).put(files[key].file)
        uploadTask.on('state_changed', function(snapshot){
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          files[key].progress = parseInt(progress);
          setFiles({...files});
        }, function(error) {
          console.error(error);
        }, function() {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            firestore.collection('files').add({
              file_name: key,
              link: url
            }).then((ref) => {
              console.log('file saved', ref.id);
            })
          })
        });
      })
    } else {
      alert('files are not selected')
    }
  }

  const getFileName = (key) => {
    var fileExt = key.split('.').pop();
    const date = new Date();
    const randomStr = makeid(16);
    const dateStr = `${randomStr}_${date.getFullYear()}_${date.getMonth()}_${date.getDay()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`
    return `${dateStr}.${fileExt}`;
  }

  const makeid = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const clear = () => {
    setFiles({});
  }

  return (
    <>
      <FileUploadContainer>
        <InputLabel>{label}</InputLabel>
        <DragDropText>Drag and drop your files</DragDropText>
        <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
          <span> Upload files</span>
        </UploadFileBtn>
        <FormField
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=""
          value=""
          multiple
          {...otherProps}
        />
      </FileUploadContainer>
      <FilePreviewContainer>
        <PreviewList>
          {Object.keys(files).map((fileName) => {
            let file = files[fileName];
            return (
              <PreviewContainer key={fileName}>
                <ProgressBar completed={file.progress} height='15px' bgColor='#3498db' labelSize='10px' />
                <FileMetaData>
                  <span>{file.file.name}</span>
                  <RemoveFileIcon
                    className="fas fa-trash-alt"
                    onClick={() => removeFile(fileName)}
                  />
                </FileMetaData>
              </PreviewContainer>
            );
          })}
        </PreviewList>
      </FilePreviewContainer>
      <ButtonContainer>
        <button id="submit" onClick={submit}>Upload files</button>
        <button id="submit" onClick={clear}>Clear</button>
      </ButtonContainer>
    </>
  );
};

export default FileUpload;
