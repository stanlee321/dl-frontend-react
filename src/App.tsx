import React, { ChangeEvent, useState } from 'react';
import './App.css';

// Custom imports
import Canvas from './Views/Drawer/Canvas';

const App: React.FC = () => {

  // function to read file as binary and return

  const getFileFromInput = (file: File): Promise<any> => {

      const [pill, setPill] = useState<''>();

      return new Promise(function (resolve, reject) {
          const reader = new FileReader();
          reader.onerror = reject;
          reader.onload = function () { resolve(reader.result); };

          return reader.readAsDataURL(file); // here the file can be read in different way Text, DataUrl, ArrayBuffer
      });
  }

  const manageUploadedFile = (binary: String, file: File)  =>{
    // do what you need with your file (fetch POST, ect ....)
    console.log(`The file binary is ${binary}`);
    console.log(`The file size is ${binary.length}`);
    console.log(`The file name is ${file.name}`);
    console.log(`The File ${file}`)
  }

  const fileSelectAction = (event: ChangeEvent<HTMLInputElement>) =>{
    event.persist();
    Array.from(event.target.files).forEach(file => {
        getFileFromInput(file)
            .then((binary) => {
                manageUploadedFile(binary, file);
            }).catch(function (reason) {
                console.log(`Error during upload ${reason}`);
                event.target.value = ''; // to allow upload of same file if error occurs
            });
    });
  } 

  return (
    <div className="App">
      <header className="App-header">
        <Canvas />
        <input  type="file"
                accept="image/*" 
                onChange={(e) => fileSelectAction(e)}
                multiple
                ></input>
      </header>
    </div>
  );
}

export default App;
