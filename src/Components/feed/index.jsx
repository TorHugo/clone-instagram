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
      </div>
    </div>
  )
}