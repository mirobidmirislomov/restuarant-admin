import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return(
        <section className='header-section'>
            <h1><NavLink className='header' to={'/'}>Admin Panel</NavLink></h1>
            <nav>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <NavLink className='navLink' to={'/addRes'}>
                            Add Restuarants
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='navLink' to={'/addProduct'}>
                            Add Products
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='navLink' to={'/delRes'}> 
                            Delete Restuarants
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='navLink' to={'delProduct'}>
                            Delete Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Header