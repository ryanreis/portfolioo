const brFlag = document.getElementById('br-flag');
const usFlag = document.getElementById('us-flag');
const content = document.getElementById('content');

brFlag.addEventListener('click', () => {
    setLanguage('br');
});

usFlag.addEventListener('click', () => {
    setLanguage('us');
});

function setLanguage(lang) {
    if (lang === 'br') {
        content.innerHTML = `
        <p>Ryan Dos Reis</p>
        <div class="caixa">
            <p>Sou um desenvolvedor web e programador com conhecimentos em HTML, CSS, JavaScript e Java. Tenho foco em criar sites responsivos, funcionais e com boa experiência para o usuário, além de desenvolver soluções em Java para aplicações mais robustas.</p>
        </div>
        `;
        brFlag.classList.add('selected');
        usFlag.classList.remove('selected');
        document.body.classList.remove('en');
        document.body.classList.add('br');

    } else if (lang === 'us') {
        content.innerHTML = `
        <p>Ryan Dos Reis</p>
        <div class="caixa">
            <p>I am a web developer and programmer with knowledge in HTML, CSS, JavaScript, and Java. I focus on creating responsive, functional websites with a good user experience, as well as developing solutions in Java for more robust applications.</p>
        </div>
        `;
        usFlag.classList.add('selected');
        brFlag.classList.remove('selected');
        document.body.classList.remove('br');
        document.body.classList.add('en');
    }
}