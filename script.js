// Script básico para interatividade e dinamismo acadêmico
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfólio acadêmico carregado com sucesso!");

    // Exemplo de interatividade: Altera dinamicamente o ano no rodapé ou saudação no console
    const anoAtual = new Date().getFullYear();
    const footerText = document.querySelector("footer p");
    if (footerText) {
        footerText.innerHTML = `&copy; ${anoAtual} - Desenvolvido para fins acadêmicos.`;
    }
});