import { Button, TextField } from "@/components";
import { AlignJustify, Search } from "react-feather";

export const Navbar = () => {
	return (
		<nav className="w-full bg-white fixed py-2 px-6 md:px-[42px] lg:px-[72px] border-b flex justify-start md:justify-between lg:justify-between items-center gap-6 shadow">
			<h1 className="hidden md:block lg:block text-[36px] font-extrabold text-blue-sky-500">
				Shopcommer
			</h1>
			<div className="w-full">
				<TextField
					placeholder="Cari di Shopcommerce"
					leftIcon={() => <Search size={20} color="#CBD5E1" />}
				/>
			</div>
			<div className="items-center gap-2 hidden md:flex lg:flex">
				<Button text="Masuk" buttonType="outlined" />
				<Button text="Daftar" />
			</div>

			<div className="block md:hidden lg:hidden border border-[#CBD5E1] p-2 rounded">
				<AlignJustify color="#D9D9D9" />
			</div>
		</nav>
	);
};
