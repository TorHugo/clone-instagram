import Coracao from '../../image/coracao.png';
import Chat from '../../image/chat.png';
import Direct from '../../image/direct.png';
import Save from '../../image/save.png';
import Comment from '../../image/coment.png';
import Emoji from '../../image/emoji.png'

export function Feed(props) {
  return (
    <div className="feedContainer">
      <div className="contentFeed">
        <div className="containerPage">
          <div className="namePage">
            <div>
              <img src={props.imageProfile} />
              <p className='Cursor'>{props.name}</p>
            </div>
            <p className='tresPontos Cursor'>...</p>
          </div>
        </div>
        <div className="post">
          <img src={props.imagePost}/>
        </div>
        <div className="containerIcons">
          <div className='iconsPost Cursor'>
            <div className='iconsPrimary'>
              <img src={Coracao} />
              <img src={Chat} />
              <img src={Direct}/>
            </div>
            <div>
              <img src={Save}/>
            </div>
          </div>
          <div>
            <p className='like'><span className='likeDescription'>Curtido por </span><span className='numbers'>{props.profileFeed} <span className='likeDescription'>e</span> outras {props.like} pessoas</span></p>
          </div>
          <div>
            <p className='user Cursor'>{props.user} <img src={Comment}/></p>
          </div>
          <div>
            <p className='comments Cursor'>Ver todos os {props.comments} comentários</p>
          </div>
          <div>
            <p className='timePost'>HÁ 18 HORAS</p>
          </div>
          <div className='commentsPost'>
            <div className='containerPost'>
              <div className='primaryComment'>
                <img src={Emoji} className='Cursor'/>
                <input type={'text'} placeholder='Adicione um comentário...' />
              </div>
              <div className='postComment'>
                <p>Publicar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}