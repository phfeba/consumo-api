let temp = document.getElementById('temp');

const obterTemp = () => {
  let inputCidade = document.getElementById('input').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCidade}&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638`;
  fetch(url)
    .then((resposta) => {
      return resposta.json();
    })
    .then((dados) => {
      temp.innerText = dados.main.temp;
    })
    .catch((erro) => {
      console.log(erro);
    });
};
