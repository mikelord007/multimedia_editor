import React, { useEffect, useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import './index.scss'

const Card = ({src}) => {

  const [liked, setLiked] = useState(true)
  const [disliked, setDisliked] = useState(false)


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


  return (
    <div className='card'>
        <img className={'card__img'} src={'https://eyslnabfcemiyjomodjp.supabase.co/storage/v1/object/public/multiimages/images/cool_bg.jpg'} />
        <div className='card__body'>
            <div className='card__body__upvote'>
                {
                  liked?
                  <button>
                    <ThumbUpIcon onClick={() => setLiked(false)} className="card__body__upvote__icon"/>
                  </button>
                  :
                  <button>
                    <ThumbUpOffAltIcon onClick={() => setLiked(true)} className="card__body__upvote__icon"/>
                  </button>
                }
                <span className="card__body__upvote__count" >20</span>
            </div>
            <div className='card__body__downvote'>
                {
                  disliked?
                  <button>
                    <ThumbDownIcon onClick={() => setDisliked(false)} className="card__body__downvote__icon"/>
                  </button>
                  :
                  <button>
                    <ThumbDownOffAltIcon onClick={() => setDisliked(true)} className="card__body__downvote__icon"/>
                  </button>
                }
                <span className="card__body__downvote__count" >2</span>
            </div>
        </div>
    </div>
  )
}

export default Card