import ReactDOM from 'react-dom';


function renderCard(card) {
    ReactDOM.render(
        card,
        document.getElementById('root')
    );
}


export default renderCard;