import { TextField, Button, InputFields, generateFields } from "@/components";
import { LogoType } from "@/components/core/icons";
import Image from "next/image";

export default function Register () {
    return (
        <main>
             <div className="flex justify-center p-[12px]">
                <Image src={LogoType.Logo} width={225} height={49} alt="logo" />
            </div>
            <div className="pt-3 md:flex md:pt-[136px] justify-center">
                <div className="border-[2px] w-full md:w-[956px] rounded-md p-4 m-5 md:m-0 flex justify-center">
                <form className="w-full md:w-[750px]" >
                    <h1 className="text-center text-[32px] font-bold">Daftar sekarang</h1>
                    <div className="md:flex flex-wrap justify-center gap-1 pt-[25px]">
                    {generateFields(0,4, true)}
                    {generateFields(4,8, false)}
                        <div className="w-full md:w-[722px] ">
                        <TextField className="h-[118px] "
                            placeholder="alamat lengkap"
                        />
                        </div>
                    {generateFields(8,10, true)}
                    </div>
                    <div className="mt-7 mb-[88px] md:mt-[49px] p-[8px]">
                    <Button 
                    text="MASUK"
                    />
                    </div>
                </form>
                </div>
            </div>
        </main>
    )
}