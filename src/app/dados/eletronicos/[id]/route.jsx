import { NextResponse } from "next/server";
import fs from "fs/promises";

export async function GET(request, { params }) {
    console.log("TEST");

    try {
        // Lê o arquivo JSON
        const file = await fs.readFile(process.cwd() + '/src/app/dados/base/db.json', 'utf8');
        console.log("TEST");
        console.log(file);

        // Faz o parse do conteúdo do arquivo JSON
        const arquivo = JSON.parse(file);
        console.log(arquivo);

        // Obtém a lista de eletros
        const eletros = arquivo.eletros;
        console.log(eletros);

        // Obtém a URL da API a partir das variáveis de ambiente
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        console.log(apiUrl);

        // Obtém o ID dos parâmetros
        const id = parseInt(params.id, 10);

        if (id > 0 && id <= eletros.length) {
            // Retorna o eletro correspondente ao ID
            const eletro = eletros.find(eletro => eletro.id === id);
            return NextResponse.json(eletro);
        } else if (id === 0) {
            // Retorna todos os eletros se o ID for 0
            return NextResponse.json(eletros);
        } else {
            // Redireciona para a página de erro se o ID for inválido
            return NextResponse.redirect(`${apiUrl}/error`);
        }
    } catch (error) {
        console.error("Erro ao ler o arquivo JSON ou processar a requisição:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// Outros métodos HTTP podem ser implementados aqui (POST, DELETE, PUT)
