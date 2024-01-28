import { Banner, HomePage } from "@/components";

export default function Home() {
	return (
		<main>
			<HomePage.Navbar />
			<section className="pt-12 px-6 md:px-[42px] lg:px-[72px]">
				<section className="md:px-[24px] lg:px-[72px] pt-5 md:pt-[42px] lg:pt-[42px]">
					<Banner type="full" />
					<HomePage.SectionContent
						title="Diskon Spesial Buat Kamu"
						numToRender={3}
						withLeftBanner={() => (
							<div className="w-full hidden md:block lg:block">
								<Banner type="full" height="h-[434px]" />
							</div>
						)}
					/>
					<HomePage.SectionContent
						title="Rekomendasi buat kamu"
						numToRender={3}
						withRightBanner={() => (
							<div className="w-full hidden md:block lg:block">
								<Banner type="full" height="h-[434px]" />
							</div>
						)}
					/>
					<HomePage.SectionContent
						title="Trend Fashion Hari Ini"
						numToRender={20}
					/>
				</section>
			</section>
		</main>
	);
}
