import {useEffect, useState} from 'react';
import axios from 'axios';

import {Feed} from '../../Components/feed';
import {Storys} from '../../Components/storys';
import {Sugestoes} from '../../Components/sugestoes';

export function Home() {

  // https://source.unsplash.com/800x600/?airplane

  const [feed, setFeed] = useState([])
    useEffect(()=>{
        axios.get('https://randomuser.me/api/?results=5')
        .then(function ({data}) {
          setFeed(data.results);
        })
    }, []);

  return (
    <div className='ContainerPrincipal'>
      <div className="StoryFeed">
        <Storys />
        {feed.map(
          feed => {
            return (
              <Feed
                imageProfile={feed.picture.thumbnail}
                name={feed.name.last}
                imagePost={feed.picture.large}
              />
            )
          }
        )}
        
      </div>
      <div>
        <Sugestoes />
      </div>
    </div>
  )
}