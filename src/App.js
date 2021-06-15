import React from "react";
import FileUpload from "./components/file-upload/file-upload.component";

function App() {

  return (
    <div className="container">
      <FileUpload
        accept="*"
        label="File upload application"
      />
    </div>
  );
}

export default App;
