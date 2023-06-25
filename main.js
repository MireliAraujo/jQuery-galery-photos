$(document).ready(function () {
  $('header button').click(function () {
    $('form').slideDown();
  })

  $('#botao_cancelar').click(function () {
    $('form').slideUp();
  })

  $('form').on('submit', function (e) {
    e.preventDefault();
    const enderecoNovaImg = $('#endereco-img-nova').val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<img src="${enderecoNovaImg}" />`).appendTo(novoItem);
    $(`
        <div class="overlay-img-link">
            <a href="${enderecoNovaImg}" target="_blank" tittle="ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(2000);
    $('#endereco-img-nova').val('')
  })
})
