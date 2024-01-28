import { Banner, Card } from "@/components";
import { SectionContentProps } from "./SectionContent.types";

export const SectionContent = (props: SectionContentProps) => {
	const { title, withLeftBanner, withRightBanner, numToRender = 10 } = props;

	const $containerCardContent = `${
		withLeftBanner && withRightBanner ? "w-full md:w-2/4 lg:w-2/4" : "w-full"
	} flex items-start gap-3 no-scrollbar overflow-x-auto pb-4 box-border`;
	return (
		<section className="mt-[38px]">
			<h3 className="text-2xl font-bold black-primary">{title}</h3>
			<section className="mt-6 flex items-start gap-3 md:flex-col lg:flex-row">
				{withLeftBanner && withLeftBanner()}
				<div className={$containerCardContent}>
					{Array.from({ length: numToRender }).map((_, index) => (
						<Card
							key={index}
							title="T-shirt GROW"
							location="Kota Tanggerang"
							rating="3.4"
							imageUrl=""
							price="Rp. 95.000"
						/>
					))}
				</div>

				{withRightBanner && withRightBanner()}
			</section>
		</section>
	);
};
