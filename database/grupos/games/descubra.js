const fs = require('fs')
 
exports.descubraArchives = [
{
  "pergunta": "Qual o nome desse super-herói?",
  "imagem": "https://telegra.ph/file/44b6d17696e4ff3109d1e.jpg",
  "letra_inicial": "S",
  "contem_traços": "❌️️",
  "resposta": "SUPERMAN"
},
{
  "pergunta": "Qual o nome desse personagem animado?",
  "imagem": "https://telegra.ph/file/7b73788b58592a93e880a.jpg",
  "letra_inicial": "P",
  "contem_traços": "❌️️",
  "resposta": "PIKACHU"
},
{
  "pergunta": "Qual o nome do vilão?",
  "imagem": "https://telegra.ph/file/11b1d5d6fe5a1580d7a86.jpg",
  "letra_inicial": "C",
  "contem_traços": "❌️️",
  "resposta": "CORINGA"
},
{
  "pergunta": "Qual o nome do protagonista?",
  "imagem": "https://telegra.ph/file/feee4841b11777a64d655.jpg",
  "letra_inicial": "H",
  "contem_traços": "❌️️",
  "resposta": "HARRY POTTER"
},
{
  "pergunta": "Qual o nome desse personagem de Star Wars?",
  "imagem": "https://telegra.ph/file/dad50cd9bb0fe41676630.jpg",
  "letra_inicial": "Y",
  "contem_traços": "❌️️",
  "resposta": "YODA"
},
{
  "pergunta": "Qual é esse herói da Marvel?",
  "imagem": "https://telegra.ph/file/056227d59fd5ebba19aad.jpg",
  "letra_inicial": "I",
  "contem_traços": "❌️️",
  "resposta": "HOMEM DE FERRO"
},
{
  "pergunta": "Qual é essa princesa da Disney?",
  "imagem": "https://telegra.ph/file/cf0efd86f0ebee57670a9.jpg",
  "letra_inicial": "A",
  "contem_traços": "❌️️",
  "resposta": "ARIEL"
},
{
  "pergunta": "Qual o nome desse jogo famoso?",
  "imagem": "https://telegra.ph/file/7e0274eab6113b07752b6.jpg",
  "letra_inicial": "F",
  "contem_traços": "❌️️",
  "resposta": "FORTNITE"
},
{
  "pergunta": "Qual o nome dessa série de fantasia?",
  "imagem": "https://telegra.ph/file/5ff98b8c8baba29558d82.jpg",
  "letra_inicial": "G",
  "contem_traços": "❌️️",
  "resposta": "GAME OF THRONES"
},
{
  "pergunta": "Qual o nome desse personagem de quadrinhos?",
  "imagem": "https://telegra.ph/file/d30bfe17b7bcfd50675ee.jpg",
  "letra_inicial": "W",
  "contem_traços": "❌️️",
  "resposta": "WOLVERINE"
},
{
  "pergunta": "Qual é esse herói da Marvel que é um cientista incrível?",
  "imagem": "https://telegra.ph/file/cf32377c874beebe5cec0.jpg",
  "letra_inicial": "H",
  "contem_traços": "❌️️",
  "resposta": "HULK"
},
{
  "pergunta": "Qual o nome dessa princesa da Disney?",
  "imagem": "https://telegra.ph/file/d4921d5857922f5c7b9dc.jpg",
  "letra_inicial": "M",
  "contem_traços": "❌️️",
  "resposta": "MOANA"
},
{
  "pergunta": "Quem é o personagem principal de 'O Rei Leão'?",
  "imagem": "https://telegra.ph/file/be3bcf991f9d1b3529dab.jpg",
  "letra_inicial": "S",
  "contem_traços": "❌️️",
  "resposta": "SIMBA"
},
{
  "pergunta": "Qual o nome do ratinho que é amigo da Minnie Mouse?",
  "imagem": "https://telegra.ph/file/6a168813f16481443a1ae.jpg",
  "letra_inicial": "M",
  "contem_traços": "❌️️",
  "resposta": "MICKEY MOUSE"
},
{
  "pergunta": "Qual o nome do famoso encanador dos videogames, da Nintendo?",
  "imagem": "https://telegra.ph/file/3d065ac08cffcb15c1a7e.jpg",
  "letra_inicial": "M",
  "contem_traços": "❌️️",
  "resposta": "MARIO"
},
{
  "pergunta": "Qual é o mascote da Sega, famoso por ser um ouriço azul?",
  "imagem": "https://telegra.ph/file/4eadfe579b898ae807aeb.jpg",
  "letra_inicial": "S",
  "contem_traços": "❌️️",
  "resposta": "SONIC"
},
{
  "pergunta": "Qual é o nome do protagonista do jogo 'God of War', conhecido por sua vingança contra deuses?",
  "imagem": "https://telegra.ph/file/f0b6570c735309ebed30d.jpg",
  "letra_inicial": "K",
  "contem_traços": "❌️️",
  "resposta": "KRATOS"
},
{
  "pergunta": "Qual é o nome do simpático peixe-palhaço protagonista da animação da Disney e Pixar, que vive no oceano?",
  "imagem": "https://telegra.ph/file/650a50bd7eb03f6ff7230.jpg",
  "letra_inicial": "N",
  "contem_traços": "❌️️",
  "resposta": "NEMO"
},
{
  "pergunta": "Qual é o nome do personagem de desenho que é uma esponja quadrada?",
  "imagem": "https://telegra.ph/file/d0a4928a467d7cb1f5279.jpg",
  "letra_inicial": "B",
  "contem_traços": "❌️️",
  "resposta": "BOB ESPONJA"
},
{
  "pergunta": "Qual é o nome desse cantor famoso?",
  "imagem": "https://telegra.ph/file/75eb2ab5b9be6cb09e4c0.jpg",
  "letra_inicial": "M",
  "contem_traços": "❌️️️️️️️️️",
  "resposta": "MICHAEL JACKSON"
},
{
  "pergunta": "Qual é o nome dessa série?",
  "imagem": "https://telegra.ph/file/37c6ed4645df16a31ab3f.jpg",
  "letra_inicial": "S",
  "contem_traços": "❌️️",
  "resposta": "SOBRENATURAL"
},
{
  "pergunta": "Qual é o nome desse filme?",
  "imagem": "https://telegra.ph/file/4fb94a63f0b68a7f5b81e.jpg",
  "letra_inicial": "T",
  "contem_traços": "❌️️",
  "resposta": "TITANIC"
},
{
  "pergunta": "Qual é o nome dessa comida natalina?",
  "imagem": "https://telegra.ph/file/3eef007e1f3ea4460278f.jpg",
  "letra_inicial": "P",
  "contem_traços": "❌️️️",
  "resposta": "PANETONE"
},
{
  "pergunta": "Qual é a profissão desse trabalhador?",
  "imagem": "https://telegra.ph/file/69a2c4b65a8cb5e959f82.jpg",
  "letra_inicial": "M",
  "contem_traços": "❌️️️",
  "resposta": "MOTOBOY"
},
{
  "pergunta": "Qual é o nome desse animal?",
  "imagem": "https://telegra.ph/file/4ff05014384229a5ee880.jpg",
  "letra_inicial": "D",
  "contem_traços": "❌️️",
  "resposta": "DINOSSAURO"
},
{
  "pergunta": "Qual é o nome dessa matéria?",
  "imagem": "https://telegra.ph/file/7ea82b4e00f6e6e978bd0.jpg",
  "letra_inicial": "M",
  "contem_traços": "❌️️",
  "resposta": "MATEMÁTICA"
},
{
  "pergunta": "Qual é o nome desse transporte?",
  "imagem": "https://telegra.ph/file/a0305f13319f3d79ed840.jpg",
  "letra_inicial": "M",
  "contem_traços": "❌️️",
  "resposta": "MOTO"
},
{
  "pergunta": "Qual é o nome desse animal?",
  "imagem": "https://telegra.ph/file/24bb10939060bb0c5d753.jpg",
  "letra_inicial": "C",
  "contem_traços": "❌️️",
  "resposta": "CANGURU"
},
{
  "pergunta": "Qual é o nome desse desenho animado?",
  "imagem": "https://telegra.ph/file/b3039614e15df8a719d42.jpg",
  "letra_inicial": "D",
  "contem_traços": "❌️️️",
  "resposta": "DORA AVENTUREIRA"
},
{
  "pergunta": "Qual é o nome desse filme?",
  "imagem": "https://telegra.ph/file/fca0d9e06e98d2ebe4feb.jpg",
  "letra_inicial": "M",
  "contem_traços": "❌️️",
  "resposta": "MATRIX"
},
{
  "pergunta": "Qual é o nome desse personagem?",
  "imagem": "https://telegra.ph/file/6f778b7123f5143f628a3.jpg",
  "letra_inicial": "P",
  "contem_traços": "❌️️",
  "resposta": "PEIXONAUTA"
},
{
  "pergunta": "Qual é o nome desse desastre natural?",
  "imagem": "https://telegra.ph/file/017150c844600fb0f58be.jpg",
  "letra_inicial": "F",
  "contem_traços": "❌️️️️",
  "resposta": "FURACÃO"
},
{
  "pergunta": "Qual é o nome dessa dança cultural?",
  "imagem": "https://telegra.ph/file/64cab017c1ab373512cb0.jpg",
  "letra_inicial": "S",
  "contem_traços": "❌️️️",
  "resposta": "SAMBA"
}
]