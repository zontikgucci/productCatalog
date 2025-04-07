import './Catalog.scss'
import { Helmet } from 'react-helmet'



export const Catalog = () => {
  return (
    <section className="catalog">
      <div className="container">
        <ul className="catalog__content">
          <li className='catalog__links'>
            <a href="!#" className="catalog__link" onClick={(e) => e.preventDefault(0)}>
              <picture className="catalog__picture">
                <img src='' alt="Описание фото" />
              </picture>
              <p className="catalog__price">9455p</p>
              <h3 className="catalog__title">Тут будет заголовок</h3>
              <div className="catalog__text">тут будет описание</div>
              <button className="catalog__button">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none" className='catalog__svg' viewBox="0 0 17 16">
                  <path d="M2.925.488a.833.833 0 0 0-1.517.691l4.295 9.416v.001c.005.008.023.05.046.09a.9.9 0 0 0 .979.446c.045-.01.089-.023.098-.026l6.22-1.853.105-.031c.44-.13.867-.256 1.201-.523.29-.232.517-.535.657-.88.16-.396.159-.842.158-1.3V4.105c0-.01 0-.06-.004-.11a.901.901 0 0 0-.488-.73.9.9 0 0 0-.447-.098H4.147L2.925.487ZM11.833 12a1.333 1.333 0 0 0 0 2.667h.007a1.333 1.333 0 0 0 0-2.667h-.007ZM3.167 13.334c0-.737.597-1.334 1.333-1.334h.007a1.333 1.333 0 0 1 0 2.667H4.5a1.333 1.333 0 0 1-1.333-1.333Z"
                    fill="currentColor"/>
                </svg>
                <p className="catalog__button-text">В корзину</p>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}