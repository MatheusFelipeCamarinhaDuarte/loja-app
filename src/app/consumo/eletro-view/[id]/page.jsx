import Image from "next/image";


export default async function page({ params }) {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const id = params.id
    const response = await fetch(`${apiUrl}/dados/eletronicos/${id}`);
    const items = await response.json();


    return (
        <div>
            <ul>
                <li key={items.id}>
                    <h2>{items.nome}</h2>
                    <figure>
                        {/* <Image
                            src={items.img}
                            alt={items.descricao}
                            width={150}
                            height={200}
                        /> */}
                        <figcaption>{items.descricao} - R$ <span>{items.preco}</span></figcaption>
                    </figure>
                </li>
            </ul>
        </div>
    )
}
