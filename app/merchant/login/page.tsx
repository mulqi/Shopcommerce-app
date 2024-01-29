import { TextField, Button } from "@/components";
import { LogoType } from "@/components/core/icons";
import Image from "next/image";



export default function Login() {
    return (
        <main>
            <div className="flex justify-center p-[12px]">
                <Image src={LogoType.Logo} width={225} height={49} alt="logo" />
            </div>
            <div className="flex-wrap md:flex justify-center pt-[136px] gap-9 border-black">
                <div>
                <Image src={LogoType.LogoLogin} width={436} height={361} alt="logo" />
                </div>
                <form className="w-full md:w-[442px] h-auto border-[2px] rounded-md p-4">
                    <h1 className="font-bold text-[32px] text-center">Masuk ke akun toko mu</h1>
                    <div className="pt-[18px]">
                        <TextField 
                        placeholder="Email"
                        />
                    </div>
                    <div className="pt-[20px]">
                        <TextField 
                        placeholder="Password"
                        type="password"
                        />
                    </div>
                    <div className="pt-[5px]">
                        <a href="#" className="text-[#1877F2]">lupa password?</a>
                    </div>
                    <div className="mt-7 mb-[20px] md:mt-[186px] p-[8px]">
                    <Button 
                    text="MASUK"
                    />
                    </div>
                </form>
            </div>
        </main>
    )
}