import Image from "next/image";
import { Name } from "./name";
import { Description } from "./description";

interface CardProfileProps {
    user: {
        id: string;
        name: string | null;
        username: string | null;
        bio: string | null;
        image: string | null;
    };
}

export function CardProfile({ user }: CardProfileProps) {
    // Adicione a instrução 'return' aqui.
    return (
        <section className="w-full flex flex-col items-center mx-auto px-4">
            <div>
                <Image
                    src={user.image ?? "https://www.if.ufrgs.br/if/wp-content/uploads/2018/04/default-profile.png"}
                    alt="foto de perfil do creator"
                    width={104}
                    height={104}
                    className="rounded-xl bg-gray-50 object-cover border-4 border-white hover:shadow-xl duration-300"
                    priority
                    quality={100}
                />
            </div>
            <div>
                <Name
                    initialName={user.name ?? "Usuário sem nome"}
                />
                <Description
                    initialDescription={user.bio ?? "Digite uma descrição sobre você..."}
                />
            </div>
        </section>
    );
}