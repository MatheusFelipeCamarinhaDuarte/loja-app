import Link from 'next/link'
import React from 'react'

export default function ItemsSlug({params}) {
  let imagem = ''
  let descricao = 'Item não encontrado'
  if (params.slug == 'camisa'){
    imagem = 'https://img.elo7.com.br/product/original/17B1547/camisa-sublimacao-poliester.jpg'
    descricao = 'Camiseta branca'
  } else if (params.slug == 'calca') {
    imagem = 'https://static3.tcdn.com.br/img/img_prod/577735/calca_jogger_jeans_infantil_18958451_1_f1bd0027384f0a27a777339ada4d4bae.jpg'
    descricao = 'Calça Jeans'
  } else if (params.slug == 'sapato') {
    imagem = 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/estilove/catalog/sola-nova/lessie/02.jpg'
    descricao = 'Sapato preto'
  } else if (params.slug == 'bone') {
    imagem = 'https://a-static.mlcdn.com.br/470x352/bone-liso-preto-basico-fitao-unissex-aba-curva-ajuste-metal-scott-co/bonemania/12267076460/35870144ac8cb230f98773363b8068c6.jpg'
    descricao = 'Bone preto'
  } else if (params.slug == 'oculos') {
    imagem = 'https://cdn.awsli.com.br/1000x1000/1641/1641182/produto/183454538/armacao-de-oculos-hugo-boss-1368-807-preto-53-11bef375.jpg'
    descricao = 'Oculos preto'
  } else{
    imagem = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1x9KE8ZF0lt0WcSu6xIXYqP3HLbO2YTCYaMIg_w2&s'
  }
    return (
    <div>
        <h1>Veja nosso(a): {params.slug}</h1>
        <div>
            <img src={imagem} width={200} alt={descricao} />
            <p><Link href="/" >Voltar...</Link></p>
        </div>
    </div>
  )
}
