import React, { useContext, useEffect, useRef } from 'react'
import ImgEditor from '@toast-ui/react-image-editor';
import { saveAs } from 'file-saver';
import { decode } from 'base64-arraybuffer'
import './index.scss'
import 'tui-image-editor/dist/tui-image-editor.css';
import Navbar from '../../components/Navabar';
import authContext from '../../context/authContextWrapper'

function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {type:mime});
}

const ImageEditor = () => {
  const ctx = useContext(authContext)


  const postit = async () => {
    const canvasImg = document.getElementsByClassName('lower-canvas')
    // console.log("kljd', ",canvasImg[0].toDataURL(),typeof canvasImg)


    console.log(typeof dataURLtoBlob(canvasImg[0].toDataURL()))


    const { data, error } = await ctx.state.supabase
      .storage
      .from('multiimages')
      .upload('avatar1.png', dataURLtoBlob(canvasImg[0].toDataURL()))

  }

  return (
    <>
      <Navbar/>
      <div className="imgeditor">
            <ImgEditor
            includeUI={{
            menu: ['filter', 'crop'],
            initMenu: 'filter',
            uiSize: {
                width: '1100px',
                height: '600px',
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
      <div className='post__btns'>
        <button className='post__btns__btn' onClick={postit}>
          Post to Feed
        </button>
      </div>
    </>
  )
}

export default ImageEditor