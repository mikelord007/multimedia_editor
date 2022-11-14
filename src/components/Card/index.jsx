import React, { useEffect, useState, useContext } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ReactContext from '../../context/authContextWrapper'
import './index.scss'

const Card = ({data}) => {

  const ctx = useContext(ReactContext)
  const [imgdata, setImgData] = useState(null)

  const [liked, setLiked] = useState(JSON.parse(data.likedby)?.includes(ctx.state.user.id))
  const [disliked, setDisliked] = useState(JSON.parse(data.dislikedby)?.includes(ctx.state.user.id))

  const [likeCount, setLikeCount] = useState(data.likes)
  const [dislikeCount, setDisLikeCount] = useState(data.dislikes)

  useEffect(() => {

    (async () => {
      const { data: data2, error } = await ctx.state.supabase
        .storage
        .from('multiimages')
        .download(`${data.imgName}`)

        console.log(data2)
      setImgData(URL.createObjectURL(data2))
    })()

  },[])

  useEffect(() => {

    if(liked){
      setDisliked(false)
    }
  },[liked])

  useEffect(() => {

    if(disliked){
      setLiked(false)
    }
  },[disliked])

  const handleLikes = () => {
    
  }

  return (
    <div className='card'>
        {imgdata?
          <img className={'card__img'} src={imgdata} />
        :'Loading...'}
        <div className='card__body'>
            <div className='card__body__upvote'>
                {
                  liked?
                  <button>
                    <ThumbUpIcon onClick={() => {setLiked(false); setLikeCount(likeCount-1);}} className="card__body__upvote__icon"/>
                  </button>
                  :
                  <button>
                    <ThumbUpOffAltIcon onClick={() => {setLiked(true); setLikeCount(likeCount+1)}} className="card__body__upvote__icon"/>
                  </button>
                }
                <span className="card__body__upvote__count" >{likeCount}</span>
            </div>
            <div className='card__body__downvote'>
                {
                  disliked?
                  <button>
                    <ThumbDownIcon onClick={() => {setDisliked(false); setDisLikeCount(dislikeCount-1)}} className="card__body__downvote__icon"/>
                  </button>
                  :
                  <button>
                    <ThumbDownOffAltIcon onClick={() => {setDisliked(true); setDisLikeCount(dislikeCount+1)}} className="card__body__downvote__icon"/>
                  </button>
                }
                <span className="card__body__downvote__count" >{dislikeCount}</span>
            </div>
        </div>
    </div>
  )
}

export default Card