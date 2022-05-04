import { useEffect, useState } from 'react';
import axios from 'axios';

export function Storys() {
    
    // API, busca imagens e nomes para o storys
    const [profiles, setProfiles] = useState([])
    useEffect(()=>{
        axios.get('https://randomuser.me/api/?results=20')
        .then(function ({data}) {
            setProfiles(data.results);
        })
    }, []);
    return(
        <div className="Container">
            <div className="Story">
                {console.log(profiles)}
                {profiles.map(
                    profile =>{
                        return(
                            <div className='PerfilStory'>
                                <img src={profile.picture.thumbnail}/>
                                <p>{profile.name.first}</p>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    );
}