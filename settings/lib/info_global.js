exports.listLanguages = (prefix) => {
return `Você pode ver a lista de idiomas disponíveis em para usar no tradutor ou gtts aqui: https://cloud.google.com/translate/docs/languages
–
• Exemplificando o uso das funções dos comandos *gtts e tradutor*:
–
↳ *Comando:* ${prefix}gtts pt sabrina
*[pt]* - O idioma, o sotaque que ele(a) irá falar no áudio.
*[sabrina]* - Vai ser o que será o texto ou frase falado por ele(a).
–
↳ *Comando:* ${prefix}tradutor pt|love you
*[pt]* - O idioma que vai ser realizado a tradução da palavra ou texto.
*[love you]* - O texto/palavra que ele(a) vai fazer a tradução para o idioma.`
}

exports.bemvindo = (prefix) => {
  return `👋 *_Comando de Boas-Vindas e Despedidas_* 🌟
  
Este comando permite configurar mensagens de boas-vindas e despedidas personalizadas para o seu grupo. Existem duas opções de boas-vindas: *bemvindo* (com foto) e *bemvindo2* (sem foto).

*Ativação e Desativação:*
- Para ativar, use: *${prefix}bemvindo 1* ou *${prefix}bemvindo2 1*
- Para desativar, use: *${prefix}bemvindo 0* ou *${prefix}bemvindo2 0*

*Trocar Fundo da Boas-Vindas:*
- Envie uma foto retangular e marque-a com *${prefix}fundobemvindo* ou *${prefix}fundosaiu* para alterar o fundo da mensagem de boas-vindas ou despedida.

*Parâmetros Personalizáveis:*
- *#hora#*: Mostra a hora exata da entrada ou saída do membro.
- *#nomedogp#*: Mostra o nome do grupo.
- *#numerodele#*: Mostra o número do membro que entrou ou saiu.
- *#prefixo#*: Mostra o símbolo utilizado para chamar o bot.
- *#descrição#*: Mostra a descrição ou regras do grupo.

*Definir Legendas Personalizadas:*
- Boas-Vindas:
  - Bemvindo (com foto): *${prefix}legendabv sua mensagem..*
  - Bemvindo2 (sem foto): *${prefix}legendabv2 sua mensagem..*
- Despedidas:
  - Bemvindo (com foto): *${prefix}legendasaiu sua mensagem..*
  - Bemvindo2 (sem foto): *${prefix}legendasaiu2 sua mensagem..*

Certifique-se de usar apenas um dos dois comandos de boas-vindas para evitar conflitos. 🚀🤖
`;
}
 
exports.infoOwner = (prefix, NickDono, numerodn, NomeDoBot, sender) => {
return `╭══════════════ ⪩
┃👤 Usuário: @${sender.split("@")[0]}
╰╦═════════════ ⪨
╭┤き⃟👑 𝑰𝑵𝑭𝑶 𝑫𝑶𝑵𝑶 👑⃟ き
┃│ Dono: wa.me/${numerodn} 
┃│ Nick do dono: xxAlan 愛
┃│ Prefixo do bot: ⩺ ${prefix}
┃│ Nome do bot: ⩺ ${NomeDoBot} 
┃╰══ ⪨
╰══════════════ ⪨`
} 

exports.tutorialBasic = (prefix) => {
return `👤 Olá, eu sou a *Sabrina-BOT*!
• Aqui está um breve tutorial de algumas das minhas funções:
–
• Para divertir seu grupo, use: *${prefix}brincadeiras* e saiba todos meus jogos.
–
• Para fazer figurinhas, use *${prefix}sticker* marcando um(a) foto ou vídeo.
—
• Para renomear o pacote ou roubar uma figurinha, ou seja, colocar autor e pacote de forma personalizada, use o comando: *${prefix}rename pacote/autor*
–
• Baixar fotos/vídeos de redes sociais como *Instagram, Tiktok ou Twitter, etc...* É fácil! Veja o tutorial abaixo:
       • Baixar mídias do instagram: *${prefix}igdl [link do post/reel]*
        • Para baixar vídeos do tiktok, use:  *${prefix}tiktok [link do vídeo]*, caso seja imagens use: *${prefix}tiktokimg [link]*
        • Baixar publicações do Twitter, use: *${prefix}twtdl [link do post]*
        • Ainda tenho um comando que realiza download's de 5 redes sociais ao mesmo tempo, seriam elas: *Twitter, Facebook, Instagram, Threads e Tiktok*. para realizar seu pedido, use: *${prefix}multidl [link do post]*
–
• Também realizo download de músicas do *YouTube e SoundCloud*. Veja:
         • Baixar áudios em mp3 ou doc e vídeos do YouTube: *${prefix}play*, *${prefix}playvid*, *${prefix}playdoc*.
         • Realize download de um mix de um artista, usando: *${prefix}playmix [cantor]*
         • Para baixar músicas em mp3 no SoundCloud, use: *${prefix}scdl [link]*
–
Pronto, aqui foi um tutorial básico de como usar o bot. 
• Para ver todas as minhas funções de forma detalhada, use: *${prefix}menu*`
}

exports.configbot = (prefix) => {
return `*C​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​OMO CONFIGURAR O BOT, PRA SER DONO:*
–
Primeiro ligue o bot no termux, e vá para o WhatsApp do bot em algum privado, utilize os seguintes comandos.
*Obs:* Pode por letras modificadas também se você quiser!
–
• *1)* Para alterar o nome do bot, use o seguinte comando:
     • ${prefix}Nome-bot Nome que deseja colocar em seu bot
–
• *2)* Para alterar o nick do dono do bot, use o seguinte comando:
     • ${prefix}Nick-dono Seu nick aqui
–
• *3)* Configure o número do dono, com o seguinte comando:
     • ${prefix}numero-dono 558288279194
*Obs:* O número tem que ser junto, e não pode conter o símbolo de + nem - e não pode ter o 9 da operadora, tem que ser o número idêntico ao seu do whatsapp.
–
• *4)* Configure o prefixo que você deseja no bot, usando o seguinte comando:
     • ${prefix}prefixo-bot #
*Obs:* Pode por qualquer símbolo, se o seu símbolo for ${prefix} ele vai passar a ser # de acordo com o que você mudou.
–
Boa sorte! Dúvidas? Entre em contato com o criador, usando: ${prefix}criador`
}