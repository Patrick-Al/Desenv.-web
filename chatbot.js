// leitor de QR Code
const qrcode = require('qrcode-terminal');
// importações do whatsapp-web.js
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js');
const path = require('path');

// inicialização do client com Chrome
const client = new Client({
    puppeteer: {
        executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', // Altere se necessário
        headless: false
    }
});

// mostrar QR Code no terminal
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// inicializar client
client.initialize();

// delay utilitário
const delay = ms => new Promise(res => setTimeout(res, ms));

// função para enviar o menu principal
async function enviarMenuPrincipal(client, msg, name = '') {
    await delay(3000);
    await client.sendMessage(msg.from,
        `Olá ${name.trim() ? name.split(' ')[0] : ''}, sou o assistente virtual da BR Tech! Digite uma das opções abaixo:\n\n` +
        '1 - LINK NA BIO PERSONALIZADO\n' +
        '2 - PACOTE DE MARCA PERSONALIZADA\n' +
        '3 - PACOTE SISTEMA VIRAL\n' +
        '4 - AUTOMAÇÕES DE REDES SOCIAIS + APIs de IA \n' +
        '5 - TIRAR DÚVIDAS \n' +
        '0 - VOLTAR AO MENU PRINCIPAL'
    );
}

// escuta de mensagens
client.on('message', async msg => {
    if (!msg.from.endsWith('@c.us')) return;

    const contact = await msg.getContact();
    const name = contact.pushname || '';
    const chat = await msg.getChat();

    // sempre envia o menu principal se for saudação ou "0"
    if (/menu|dia|tarde|noite|oi|olá|ola|0/i.test(msg.body)) {
        await delay(1000);
        await chat.sendStateTyping();
        await enviarMenuPrincipal(client, msg, name);
        return;
    }

    // opção 1: Texto + 3 imagens + link + menu
    if (msg.body === '1') {
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);

        await client.sendMessage(msg.from,
            '✅ Ótima escolha! \n\n' +
            '🥳 Você terá um domínio gratuito disponível 24/7, totalmente único com mídias e links que você desejar.\n\n' +
            '👌 Estou enviando uma prévia de modelos prontos que preparei, assim você conhecerá as tendências do mercado que estão bombando agora!\n\n' +
            '📌 Sem Enrolação! Você já pode começar a juntar suas ideias de cores, botões e links! assim o projeto ficará incrível. \n\n' +
            '🚀 Conte comigo! Aguarde um momento vou te atender pessoalmente!\n\n🤩 Enquanto isso, extraia mais inspiração nas imagens abaixo que separei pra você:'
        );

        const imagens = ['Print1.jpg', 'Print2.jpg', 'Print3.jpg', 'Print4.jpg', 'Print5.jpg'];
        for (const nome of imagens) {
            const midia = MessageMedia.fromFilePath(path.resolve(__dirname, 'midias', nome));
            await delay(3000);
            await client.sendMessage(msg.from, midia);
        }

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Olá me chamo Patrick, estou aqui para dar início a criação do seu Projeto ! Como podemos começar?');
        return;

    
    }

    // opção 2: Texto + 2 vídeos + link + menu
    if (msg.body === '2') {
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);

        await client.sendMessage(msg.from,
            '*✏️ Fontes, Efeitos, Sombreados :* Editáveis✅ \n' +
            '*♻️ Molduras, Formatos, Gifs  :* Reutilizáveis✅ \n' +
            '*🧩 Logomarcas Premium :* Vários Tamanhos✅ \n' +
            '*✨ Storys e Destaques :*🔥 Tudo pelo valor simbólico de R$26,90✅'
        );

        

        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, '🔗 Acesse o Link: https://kiwify.app/q0dEKN9?afid=qQsOxCD7');
        await enviarMenuPrincipal(client, msg, name);
        return;
    }

    // opção 3
    if (msg.body === '3') {
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);

        await client.sendMessage(msg.from,
            '✅ Prontinho! você tem uma oportunidade de ouro bem aqui! .\n' +
            'Sistema Viral - Como ganhar de R$2.000 a R$10.000 por mês com perfis anônimos no Instagram e TikTok. \n' +
            '🔥 O método é 100% automático e você não precisa de experiência alguma para ganhar dinheiro com ele. \n' +
            'Você vai aprender a ganhar dinheiro de forma automática com perfis anônimos, sem investir, sem aparecer, criar conteúdo ou conversar com clientes.\n' +
            'Aprenda a usar inteligências artificiais para criar conteúdos em segundos e configurar robôs para vender todos os dias no automático.\n' +
            'Comece agora e transforme qualquer perfil em uma máquina de vendas!'
        );
        await delay(3000);
        await client.sendMessage(msg.from, '🔗 Acesse o Link :https://kiwify.app/JEMBRCN?afid=F6vebkkh ');
        await enviarMenuPrincipal(client, msg, name);
        return;
    }

    // opção 4
    if (msg.body === '4') {
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);

        await client.sendMessage(msg.from,
            '✅ Prontinho! você tem uma oportunidade de ouro bem aqui! .\n' +
            '🔥 Transforme o seu negócio ainda hoje com o chatbot para WhatsApp capaz de conversar com um número ilimitado de clientes ao mesmo tempo. \n' +
            '🚀 Eu escolhi a dedo o melhor chatbot, com o preço e suporte mais acessível de todos, lotado de recursos! \n' +
            'Comece agora e transforme sua rede em uma máquina de vendas!'
        );
        await delay(3000);
        await client.sendMessage(msg.from, '🔗 Acesse o Link: https://kiwify.app/BaBpJ3a?afid=DqDn8OZo');
        await enviarMenuPrincipal(client, msg, name);
        return;
    }

    // opção 5
    if (msg.body === '5') {
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);

        await client.sendMessage(msg.from,
            'Se tiver dúvidas, fale por aqui. Estou aqui para te ajudar!'
        );
        return;
    }
});