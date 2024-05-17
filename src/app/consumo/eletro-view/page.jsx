import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function EletroView() {
    let items = [];

    try {
        const response = await fetch('http://localhost:3000/dados/eletronicos/0');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        items = await response.json();

        console.log(response);
        console.log(items);
    } catch (error) {
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
