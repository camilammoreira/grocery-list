export function dateText(itemDate) {
    itemDate.innerText = `${new Date().toLocaleDateString("en", { weekday: 'long' })} (${new Date().toLocaleDateString()}) at ${new Date().toLocaleTimeString('pt-BR', { hour: 'numeric', minute: 'numeric' })} `;
}