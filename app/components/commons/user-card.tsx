import { Github, Instagram, Linkedin, Twitter, Plus } from "lucide-react";
import Button from "../ui/button";
import Image from "next/image";

export default function UserCard() {
    const icons = [Github, Instagram, Linkedin, Twitter, Plus];

    return (
        <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
            <div className="w-full flex justify-center items-center">
                <Image
                    src="/me.png"
                    alt="Luiz Otávio"
                    width={150}
                    height={193}
                    className="rounded-full object-cover"
                    quality={100}  // Qualidade da imagem
                />
            </div>

            <div className="flex flex-col gap-2 w-full text-center">
                <h3 className="text-3xl font-bold">Luiz Otávio</h3>
                <p className="opacity-40">"Eu Trabalho como Dev na área Financeira a mais de 11 anos"</p>
            </div>

            <div className="flex flex-col gap-2 w-full">
                <span className="uppercase text-xs font-medium">Links</span>
                <div className="flex gap-3">
                    {
                        icons.map((Icon, index) => (
                            <button key={index} className="p-3 rounded bg-[#1E1E1E] hover:bg-[#2E2E2E]">
                                <Icon />
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 w-full h-[172px]">
                <div className="w-full flex flex-col items-center gap-3">
                    <Button className="w-full">Template SaaS - Compre Agora</Button>
                    <button className="p-3 rounded bg-[#1E1E1E] hover:bg-[#2E2E2E]"><Plus /></button>
                </div>
            </div>
        </div>
    );
}
