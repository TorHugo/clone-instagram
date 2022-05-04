import {useEffect, useState} from 'react';
import axios from 'axios';

import Perfil from '../../image/Perfil.png';

export function Sugestoes() {

    // API, busca imagens e nomes para o sugestoes
    const [sugestoes, setSugestoes] = useState([])
    useEffect(()=>{
        axios.get('https://randomuser.me/api/?results=5')
        .then(function ({data}) {
            setSugestoes(data.results);
        })
    }, []);
    return (
        <div className="Sugestoes">
        <div className="Avatar">
            <div className="Description_Avatar">
                <img src={Perfil} alt="Imagem perfil principal" />
                <div className='Cursor'>   
                    <p>tor.hug0</p>
                    <p className='NameAvatar'>Victor Hugo</p>
                </div>
            </div>
            <div className="Mudar Cursor">
                <p>Mudar</p>
            </div>
        </div>
        <div className="Perfis">
            <div className='SugestoesPerfils'>
                <p className='Gray'>Sugestões para você</p>
                <p className='Cursor'>Ver tudo</p>
            </div>
            {console.log(sugestoes)}
            {sugestoes.map(
            sugestoes =>{
                return(
                    <div className='PerfilAdd'>
                        <img src={sugestoes.picture.thumbnail} className='ImageAdd'/>
                        <div>
                            <p className='Cursor'>{sugestoes.name.last}</p>
                            <p className='NameAvatar Cursor'>Seguido(a) por {sugestoes.name.first}</p>
                        </div>
                        <div className="Seguir Cursor"><p>Seguir</p></div>
                    </div>
                    )
                }
                )}
            </div>
        </div>
    )
}