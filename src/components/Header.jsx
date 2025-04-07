import './Header.scss'
import { NavLink } from 'react-router-dom'

export const Header = () => {

  

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__nav-pc">
            <NavLink to="/basket">
              <div className="basket">
                <span className='basket__span'>1</span>
                <picture className='basket__picture'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none" className='basket__img' viewBox="0 0 17 16">
                    <path d="M2.925.488a.833.833 0 0 0-1.517.691l4.295 9.416v.001c.005.008.023.05.046.09a.9.9 0 0 0 .979.446c.045-.01.089-.023.098-.026l6.22-1.853.105-.031c.44-.13.867-.256 1.201-.523.29-.232.517-.535.657-.88.16-.396.159-.842.158-1.3V4.105c0-.01 0-.06-.004-.11a.901.901 0 0 0-.488-.73.9.9 0 0 0-.447-.098H4.147L2.925.487ZM11.833 12a1.333 1.333 0 0 0 0 2.667h.007a1.333 1.333 0 0 0 0-2.667h-.007ZM3.167 13.334c0-.737.597-1.334 1.333-1.334h.007a1.333 1.333 0 0 1 0 2.667H4.5a1.333 1.333 0 0 1-1.333-1.333Z"
                      fill="currentColor"/>
                  </svg>
                </picture>
                <p className="basket__text">Корзина</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}