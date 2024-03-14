import React, {useState} from 'react'
import './Card.scss';

interface ICard {
    imageSrc: string;
    brand: string;
    description: string;
    price: number;
		colors: string[]
}

function Card({imageSrc, brand, description, price, colors}:ICard) {
	const [visibleButton, setVisibleButton] = useState(false);
  return (
    <div className="card" onMouseEnter={() => setVisibleButton(true)} onMouseLeave={() => setVisibleButton(false)}>
			<div className={`${visibleButton ? 'card__wrapper' : 'card__wrapper--invisible'}`}>
				<div className="card__visual">
					<div className="card__imageWrapper">
						<img src={imageSrc} alt="" className="card__image"/>
					</div>
						<ul className="card__colors">
								{colors.map((color) => {
									return (
										<li className={`card__color card__${color}`}></li>
									)
								})}
						</ul>
				</div>
			</div>
			<div className={`${visibleButton ? 'card__wrapper' : 'card__wrapper--invisible'}`}>
				<div className="card__info">
						<h3 className="card__brand">{brand}</h3>
						<p className="card__description">{description}</p>
						<p className="card__price">£{price}</p>
				</div>
				{visibleButton &&
					<div className="card__buttonWrapper">
							<button className="card__button">Add to cart</button>
					</div>
				}
    	</div>
		</div>
  )
}

export default Card