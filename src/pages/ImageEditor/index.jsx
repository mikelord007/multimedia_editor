import React, { useEffect, useRef } from 'react'
import ImgEditor from '@toast-ui/react-image-editor';
import { saveAs } from 'file-saver';
import './index.scss'
import 'tui-image-editor/dist/tui-image-editor.css';
import Navbar from '../../components/Navabar';

const ImageEditor = () => {
    
  return (
    <>
      <Navbar/>
      <div className="imgeditor">
            <ImgEditor
            includeUI={{
            menu: ['filter', 'crop'],
            initMenu: 'filter',
            uiSize: {
                width: '1000px',
                height: '500px',
            },
            menuBarPosition: 'top',
            }}
            cssMaxHeight={500}
            cssMaxWidth={700}
            selectionStyle={{
            cornerSize: 20,
            rotatingPointOffset: 70,
            }}
            usageStatistics={true}
            />
      </div>
    </>
  )
}

export default ImageEditor