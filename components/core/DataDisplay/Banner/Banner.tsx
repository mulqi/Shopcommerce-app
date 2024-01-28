import { forwardRef } from "react";
import { BannerProps } from "./Banner.interface";

export const Banner = forwardRef((_props: BannerProps, _) => {
	const { type = "full", height = "h-[240px]" } = _props;

	const $style = `${
		type === "full" ? "w-full" : "w-2/4"
	} ${height} bg-slate-200 rounded-xl`;
	return <section className={$style}></section>;
});
