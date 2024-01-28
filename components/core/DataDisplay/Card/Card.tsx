import { forwardRef } from "react";
import { CardProps } from "./Card.interface";
import { Star } from "react-feather";
import Image from "next/image";

export const Card = forwardRef((_props: CardProps, _) => {
	const { title, price, imageUrl, rating, location, className } = _props;
	return (
		<div className="w-[152px] flex-shrink-0 md:w-[214px] lg:w-[214px] md:h-[304px] lg:h-[304px] flex flex-col justify-between border shadow-lg rounded-xl overflow-hidden hover:cursor-pointer">
			<div>
				<div className="w-full md:h-[169px] lg:h-[169px] bg-slate-200 overflow-hidden">
					<Image
						src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/4/28/6a0f9189-48da-4a3d-97ac-1adc44a01c44.png"
						alt={title}
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: "100%", height: "auto" }}
					/>
				</div>

				<section className="p-2">
					<h4 className="text-xs md:text-base lg:text-base black-primary font-semibold">
						{title}
					</h4>

					<div className="mt-2" />
					<h4 className="text-xs md:text-base lg:text-base black-primary font-bold">
						{price}
					</h4>
				</section>
			</div>

			<div className="mt-1 px-2 pb-2">
				<p className="text-xs md:text-base lg:text-base font-bold black-primary">
					{location}
				</p>
				<div className="mt-1 flex items-center justify-between">
					<div className="text-[8px] md:text-xs lg:text-xs flex items-center">
						<Star size={8} /> {rating}
					</div>

					<div className="text-[8px] md:text-xs lg:text-xs">100+ Terjual</div>
				</div>
			</div>
		</div>
	);
});
