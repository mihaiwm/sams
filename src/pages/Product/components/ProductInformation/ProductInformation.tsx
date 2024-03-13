import React from 'react'
import './ProductInformation.scss';
import Accordion from '../Accordion/Accordion';

function ProductInformation() {
  return (
    <div className="productInformation">
			<div className="productInformation__leftSide">
					<h4 className="productInformation__title">About the collection</h4>
					<p className="productInformation__description">
							Unlock a new era of high performance travelling with Proxis. The outer shells are made from Roxkin™, an exclusive multi-layered material developed by Samsonite. It bounces back into shape, offering remarkable strength, resilience and lightness. The sophisticated design resonates confidence and is fully equipped to meet all your travel needs. On top of that, choosing Proxis equals enjoying first-class assistance and benefits during and after the warranty period with our new Samsonite wecare program.
					</p>
					<p className="productInformation__description">
							Please note that Proxis, Major-Lite and all aluminium suitcases, as well as selected limited editions are excluded from most discounts or discount codes
					</p>
					<a className="productInformation__adsWrapper" href="https://www.samsonite.co.uk/wecare/" target='_blank' rel="noreferrer">
						<img className="productInformation__ads" src="https://www.samsonite.eu/images/engl/grfx/sams_wecare.png" alt="" />
					</a>
			</div>
			<div className="productInformation__rightSide">
					<Accordion title="Product Video(s)">
							<p className="productInformation__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores autem quidem eligendi obcaecati vel est magnam nisi id, tempora maxime ullam error voluptates ipsum voluptatem. Nam, dignissimos nemo. Magnam, similique?</p>
					</Accordion>
					<Accordion title="Details">
							<p className="productInformation__content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, magnam itaque vero quaerat accusantium fuga distinctio. Eligendi eveniet voluptatem magnam ducimus reprehenderit amet perferendis tempora! Ullam ad ipsa vitae soluta!
							Labore facere, delectus quo error velit magnam architecto quis a dicta officiis. A porro magnam corrupti, delectus nemo deserunt vero numquam eos perferendis repellat praesentium exercitationem, distinctio, consequuntur libero hic?
							Quo eius pariatur itaque commodi quasi. Maxime similique eaque ducimus assumenda, dolorem deleniti incidunt unde reiciendis tenetur laudantium! Impedit quidem et vitae at corporis quisquam unde fuga perspiciatis placeat aperiam.
							Nam odit, libero mollitia illum iusto excepturi expedita veritatis unde provident praesentium numquam porro nesciunt repudiandae tempore cum reiciendis. Nam voluptatum ea vel dolorum minus id sit iusto, laborum eveniet.
							Porro quaerat inventore dolorum? Quis nobis nesciunt cumque qui velit voluptatibus neque sequi repellendus laudantium obcaecati error doloremque, iusto voluptatum laboriosam reprehenderit delectus molestiae dolorum suscipit rerum voluptate quaerat. Doloribus.
							Beatae deserunt explicabo quisquam adipisci maiores dolorem reprehenderit vitae sed unde magni itaque eveniet ad, doloremque magnam suscipit omnis nemo architecto perferendis! Iure adipisci non neque, provident tempore praesentium dolor?
							Vitae dolore et quod at quibusdam amet ex quia dolorem eligendi tempore dicta nam consectetur ab, ratione provident sapiente blanditiis, aperiam accusamus impedit praesentium officiis magnam explicabo. Atque, maxime nostrum.
							Tempore ducimus aspernatur explicabo earum, saepe ullam tenetur accusantium obcaecati corrupti soluta itaque optio at quam ipsa unde natus ratione mollitia atque cupiditate et deleniti quos eveniet sed. Ipsum, cum.
							Culpa reprehenderit placeat accusantium fugiat maxime ab facere, maiores molestiae iusto, impedit provident nulla soluta ullam laboriosam voluptatibus amet sit rerum veniam! Impedit minus deleniti veritatis aliquam temporibus quibusdam sed.
							Mollitia fugit voluptate possimus quod, vel minima? Aliquid nostrum fugiat distinctio quae autem provident iusto, deserunt rem accusamus eos, earum enim corrupti corporis et eius repellendus ab molestiae error amet!</p>
					</Accordion>
					<Accordion title="Size Requirements by airline">
							<p className="productInformation__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio asperiores voluptates non reprehenderit sit qui ducimus odit laborum dolorum, ea doloribus minima amet corporis sunt nam iure, porro atque dolore.
							Doloremque vel quo molestias, soluta amet ad saepe culpa laudantium, voluptate explicabo consequatur quisquam sit natus quos exercitationem ab modi, in aspernatur. Sed totam corporis perferendis ratione ea minima doloribus.
							Quaerat ratione sapiente blanditiis minus illum, at, ipsa exercitationem eaque quo optio aliquam iure consectetur unde nihil harum ducimus voluptate temporibus voluptas doloribus veniam dolorum ad id. Minima, doloremque nobis.
							Enim ex sunt sit architecto libero deleniti ipsa! Delectus veritatis corrupti in reiciendis esse magni libero, officiis enim quos maxime eum sapiente minus obcaecati facere maiores hic dolor numquam minima.
							Est ex repellendus fugit odio nostrum dolorem inventore minus temporibus officia autem, cum repudiandae libero eum beatae quidem in, ipsam facere voluptatibus deleniti cupiditate earum quisquam. Mollitia architecto similique tenetur!</p>
					</Accordion>
					<Accordion title="Return & refunds">
							<p className="productInformation__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores autem quidem eligendi obcaecati vel est magnam nisi id, tempora maxime ullam error voluptates ipsum voluptatem. Nam, dignissimos nemo. Magnam, similique?</p>
					</Accordion>
					<Accordion title="Shipping options">
							<p className="productInformation__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores autem quidem eligendi obcaecati vel est magnam nisi id, tempora maxime ullam error voluptates ipsum voluptatem. Nam, dignissimos nemo. Magnam, similique?</p>
					</Accordion>
			</div>
    </div>
  )
}

export default ProductInformation