import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import MinhasFotos from '../../Assets/feed.svg'
import Estatísticas from '../../Assets/estatisticas.svg'
import AdicionarFoto from '../../Assets/adicionar.svg'
import Sair from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'
import { useNavigate } from 'react-router-dom';
import useMedia from '../../hooks/useMedia'

const UserHeaderNav = () => {
    const { userLogout } = React.useContext(UserContext)
    const mobile = useMedia('(max-width: 40rem)')
    const navigate = useNavigate();
    const [mobileMenu, setMobileMenu] = React.useState(false)

    const {pathname} = useLocation();
    React.useEffect(()=> {
        setMobileMenu(false)
    }, [pathname])

    function handleLogout() {
        userLogout()
        navigate('/login');
    }

    return (
        <>
        {mobile && (<button aria-label='Menu' className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} onClick={() => setMobileMenu(!mobileMenu) }></button>)}
        <nav className={`${mobile ? styles.navMobile : styles.nav}  ${mobileMenu && styles.navMobileActive} `}>
            <NavLink to="/conta" end>
                <img src={MinhasFotos} alt="Minhas Fotos" />
                {mobile && 'Minhas Fotos'}
            </NavLink>
            <NavLink to="/conta/estatisticas">
                <img src={Estatísticas} alt="Estatísticas" />
                {mobile && 'Estatísticas'}
            </NavLink>
            <NavLink to="/conta/postar">
                <img src={AdicionarFoto} alt="Postar Foto" />
                {mobile && 'Postar Foto'}
            </NavLink>
            <button onClick={handleLogout}>
                <img src={Sair} alt="Sair" />
                {mobile && 'Sair'}
            </button>
        </nav>
        </>
    )
}

export default UserHeaderNav
