import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function EletroView() {
    let items = [];
    console.log("AQUI");
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    console.log("AQUI");
    
    try {
        console.log("AQUI");
        const response = await fetch(`${apiUrl}/dados/eletronicos/0`);
        console.log("AQUI");
        if (!response.ok) {
            console.log("AQUI");
            console.log(response)
            throw new Error('Failed to fetch data');
        }
        console.log("AQUI");
        items = await response.json();
        
        console.log(response);
        console.log(items);
    } catch (error) {
        console.log("AQUI");
        console.log(error);
        redirect('/error');  // Certifique-se de que esta linha está sendo usada corretamente
    }

    return (
        <div>
            <h1>Página dos Eletrônicos</h1>
            <div className="card-eletro-view">
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <Link href={`/consumo/eletro-view/${item.id}`}>
                                <h2>{item.nome}</h2>
                                <figure>
                                    <Image
                                        src={item.img}
                                        alt={item.descricao}
                                        width={300}
                                        height={200}
                                    />
                                    <figcaption>{item.descricao} - R$ <span>{item.preco}</span></figcaption>
                                </figure>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
