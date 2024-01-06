import { useState } from 'react';
import { useAppState, useStateDispatch } from '../AppContext.js';
import {
  FiletypeJson,
  Trash,
  Pencil,
  Save,
  Stickies
} from 'react-bootstrap-icons';

export default function FilesList() {
  let { files } = useAppState();

  return (
    <ul>
      {files.map(item => (
        <File key={item.id} file={item} />
      ))}
    </ul>
  );
}

function File({ file }) {
  const [isEditing, setIsEditing] = useState(false);
  // const [isSelected, setIsSelected] = useState(0);

  let { currentFileIndex } = useAppState();
  const dispatch = useStateDispatch();

  // console.log(file)
  let fileContent;
  if (isEditing) {
    
    fileContent = (

      <div className='file-item-child'>
        <input

          value={file.name}
          onChange={e => {
            console.log({e:e.target.value})
            dispatch({
              type: 'changed',
              file: {
                ...file,
                name: e.target.value
              }
            });
          }} />
        <Save size={12} onClick={() => setIsEditing(false)} />

      </div>
    );
  } else {
    fileContent = (
      <div className='file-item-child'>
        <span className='file-item-text'>{file.name}</span>

        <Pencil size={12} className='file-item-child file-operation-icon' onClick={() => setIsEditing(true)} />

      </div>
    );
  }

  return (

    <li key={file.id}>

      <label
        className={
          currentFileIndex == file.id ? 'file-item file-item-selected' : 'file-item'
        }>

        <FiletypeJson size={"15px"} className="file-icon" />

        <span
          onClick={(e) => {
            dispatch({
              type: 'selected',
              file: file
            });
          }}>
          {fileContent}</span>

          <Stickies
          className='file-operation-icon'
            onClick={(e) => {
              dispatch({
                type: 'duplicate',
                file: file
              });
            }}
            size={12} />

          <Trash
          className='file-operation-icon'
            onClick={() => {
              dispatch({
                type: 'deleted',
                id: file.id
              });
            }}
            size={12} />
      </label>
    </li>
  );
}
