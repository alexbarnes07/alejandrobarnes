function ejercicio3_15(){
    let adn = prompt("Introduce una cadena de ADN:");
    const complemento = { G: 'C', C: 'G', T: 'A', A: 'U' };
    let arn = adn.split('').map(base => complemento[base] || base).join('');
    alert(`ARN transcrito: ${arn}`);
}