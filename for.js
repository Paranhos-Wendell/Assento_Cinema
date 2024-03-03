
const seatsContainer = document.querySelector('.seats');
const selectedSeatsList = document.querySelector('.selected-seats');
const totalElement = document.getElementById('total');
let total = 0;


// Cria as cadeiras
for (let i = 1; i <= 44; i++) {

    const seat = document.createElement('div');
    seat.classList.add('seat');

    seat.innerText = i;

    // Adiciona evento de clique para selecionar a cadeira
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
        updateSummary();
    });

    seatsContainer.appendChild(seat);
}

// Atualiza o resumo da seleção
function updateSummary() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    selectedSeatsList.innerHTML = '';
    total = 0;

    selectedSeats.forEach(seat => {
        const seatNumber = seat.innerText;
        const listItem = document.createElement('li');
        listItem.innerText = `Cadeira Nº ${seatNumber} `;
        selectedSeatsList.appendChild(listItem);

        // Incrementa o total com o preço da cadeira selecionada
        total += 10;
    });

    totalElement.innerText = total.toLocaleString('pt-BR', {style: 'currency' , currency: 'BRL'});

    seatNumber.innerHTML = n;
}

// Confirma a seleção
function confirm() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    const totalSeats = selectedSeats.length;
    alert(`Você comprou um total de ${totalSeats} cadeiras, que resultou no total de ${total.toLocaleString('pt-BR', {style: 'currency' , currency: 'BRL'})}`);
}

// Limpa a seleção de cadeiras
function clearSelection() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    selectedSeats.forEach(seat => {
        seat.classList.remove('selected');
    });
    updateSummary();
}


