//conectar com a API utilizndo FECH

fetch('https://raw.githubusercontent.com/Ton44131/API-jogos/refs/heads/main/dados.json').then(resposta => resposta.json()).then(corpo =>{
    console.log(corpo)

document.getElementById('imagem').innerHTML = corpo.imagem;
document.getElementById('nome').innerHTML = corpo.nome;
document.getElementById('preco').innerHTML = corpo.preco;
document.getElementById('sinopse').innerHTML = corpo.sinopse;

document.getElementById('imagem2').innerHTML = corpo.imagem2;
document.getElementById('nome2').innerHTML = corpo.nome2;
document.getElementById('preco2').innerHTML = corpo.preco2;
document.getElementById('sinopse2').innerHTML = corpo.sinopse2;

document.getElementById('imagem3').innerHTML = corpo.imagem3;
document.getElementById('nome3').innerHTML = corpo.nome3;
document.getElementById('preco3').innerHTML = corpo.preco3;
document.getElementById('sinopse3').innerHTML = corpo.sinopse3;

})

function apertar (){
    //alert("apertou")
    Swal.fire({
        title: "Parabiens",
        text: "Compra concluida com sucesso",
        icon: "success"
      });
}