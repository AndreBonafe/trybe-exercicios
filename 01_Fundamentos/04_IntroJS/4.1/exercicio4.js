var state = "jorge"

switch (state) {
    case 'lista':
        console.log('Você está na lista de espera');
        break;
    
    case 'reprovado':
        console.log('Você foi reprovado');
        break;

    case 'aprovado':
        console.log('Você foi aprovado!');
        break;
        

    default:
        console.log('Não se aplica');
        break;
}