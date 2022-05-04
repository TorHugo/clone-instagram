import {Link} from "react-router-dom";

import Logo from '../../image/logo.png';
import Busca from '../../image/busca.png';
import Home from '../../image/home.png';
import Direct from '../../image/direct.png';
import Add from '../../image/add.png';
import Coracao from '../../image/coracao.png';
import ImagePerfil from '../../image/Perfil.png';


export function Nav(){
    return(
        <div className="Header">
            <div className="Nav">
                <div className="Insta"><img src={Logo}/></div>
                <div className="InputBusca">
                    <img src={Busca} className="ImageIcon"/>
                    <input type="text" placeholder='Pesquisar'/>
                </div>
                <div className="NavIcons">
                    <Link to='/'><img src={Home} className="ImageIconNav"/></Link>
                    <img src={Direct} className="ImageIconNav"/>
                    <img src={Add} className="ImageIconNav"/>
                    <img src={Coracao} className="ImageIconNav"/>
                    <img src={ImagePerfil} className="Perfil"/>
                </div>
            </div>
        </div>
    )
}