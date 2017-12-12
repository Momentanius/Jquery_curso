var rodada = 1;

var matrizJogo = Array(3);

matrizJogo['a'] = Array(3);
matrizJogo['b'] = Array(3);
matrizJogo['c'] = Array(3);

matrizJogo['a'][1] = 0;
matrizJogo['a'][2] = 0;
matrizJogo['a'][3] = 0;

matrizJogo['b'][1] = 0;
matrizJogo['b'][2] = 0;
matrizJogo['b'][3] = 0;

matrizJogo['c'][1] = 0;
matrizJogo['c'][2] = 0;
matrizJogo['c'][3] = 0;

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

    $('.jogada').click(function(){

      var id_campo_clicado = this.id;
      $('#' + id_campo_clicado).off();
      jogada(id_campo_clicado);
    });

    function jogada(id){
      var icone = '';
      var ponto = 0;

      if ((rodada % 2) == 1){
        icone = 'url("imagens/marcacao_1.png")';
        ponto = -1;
      }else{
        icone = 'url("imagens/marcacao_2.png")';
        ponto = 1;
      }

      rodada++;

      $('#'+id).css('background-image',icone);


      var linha_coluna = id.split('-');
      matrizJogo[linha_coluna[0]][linha_coluna[1]] = ponto;

      verifica_combinacao();
    }

    function verifica_combinacao(){

      // verifica na horizontal
      var pontos = 0;
      for (var i = 0; i < 2; i++) {
        pontos = pontos+matrizJogo['a'][i];
      }
      ganhador(pontos);

      pontos = 0;

      for (var i = 0; i < 2; i++) {
        pontos = pontos+matrizJogo['b'][i];
      }
      ganhador(pontos);

      pontos = 0;

      for (var i = 0; i < 2; i++) {
        pontos = pontos+matrizJogo['c'][i];
      }
      ganhador(pontos);

      pontos = 0;

      //VErifica na vertical

      for (var l = 0; l < 2; l++) {
        pontos = 0;
        pontos = pontos+matrizJogo['a'][l];
        pontos = pontos+matrizJogo['b'][l];
        pontos = pontos+matrizJogo['c'][l];
        ganhador(pontos);
      }

      //verfica na daigonal

      pontos = 0;
      pontos = matrizJogo['a'][1] + matrizJogo['b'][2] + matrizJogo['c'][3];
      ganhador(pontos);

      pontos = 0;
      pontos = matrizJogo['a'][3] + matrizJogo['b'][2] + matrizJogo['c'][1];
      ganhador(pontos);

    }

    function ganhador(pontos){

      if(pontos == -3){
        var jogada_1 = $(entrada_apelido_jogador_1).val();
        alert(jogada_1 + ' ganhou!');
        $('.jogada').off();
      }else if (pontos == 3){
        var jogada_2 = $(entrada_apelido_jogador_1).val();
        alert(jogada_2 + ' ganhou!');
        $('.jogada').off();
      }

    }

});
