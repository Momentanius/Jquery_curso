$(document).ready( function(){

  $('#botao').click( function(){

    if ($('#entrada_apelido_jogador_1').val()==''){

      alert('Apelido do jogador 1 não foi preenchido');
      return false;

    }

    if ($('#entrada_apelido_jogador_2').val()==''){

      alert('Apelido do jogador 1 não foi preenchido');
      return false;
    }



    $('#nome_jogador_1').html($('#entrada_apelido_jogador_1').val());
    $('#nome_jogador_2').html($('#entrada_apelido_jogador_2').val());


    //Exibir grid

    $('#pagina_inicial').hide();
    $('#palco_jogo').show();


  }) ;


});
