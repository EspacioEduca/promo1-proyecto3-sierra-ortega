$(".camino1").hide();
$(".acertijo").hide();
$(".puertai").hide();
$(".puertac").hide();
$(".puertadr").hide();
$(".acertijono").hide();
$(".camino2").hide();
$(".barco").hide();
$(".parte1").show();
$(".barco1").hide();
$(".barco2").hide();
$(".caminoso").hide( );
$(".dones").hide( );
$(".dones1").hide( );
$(".don1").hide( );
$(".don2").hide( );
$(".nomiel").hide( );

$(".boton1") .dblclick (function(){
    $(".parte1").hide( );
    $(".camino1").show( );
});

$(".botonsi") .click (function(){
    $(".camino1").hide( );
    $(".acertijo").show( );
});

$(".botonno") .click (function(){
    $(".camino1").hide( );
    $(".acertijono").show( );
});

$(".botoniz").click (function(){
    $(".acertijo").hide( );
    $(".puertai").show();
});

$(".botonct").click (function(){
    $(".acertijo").hide( );
    $(".puertac").show();
});

$(".botondr").click (function(){
    $(".acertijo").hide( );
    $(".puertadr").show();
});

$(".boton2") .dblclick (function(){
$(".parte1").hide( );
$(".camino2").show( );
});

$(".botonba") .click (function(){
    $(".camino2").hide( );
    $(".barco").show( );
});

$(".botonro") .dblclick (function(){
    $(".barco").hide( );
    $(".barco1").show( );
});

$(".botonsa") .dblclick (function(){
    $(".barco").hide( );
    $(".barco2").show( );
});


$(".botonreiniciar") .click (function(){
    $(".camino1").hide( );
    $(".acertijo").hide( );
    $(".puertai").hide( );
    $(".puertac").hide();
    $(".puertadr").hide();
    $(".acertijono").hide();
    $(".camino2").hide();
    $(".barco").hide();
    $(".parte1").show();
    $(".barco1").hide();
    $(".barco2").hide();
    $(".caminoso").hide( );
    $(".dones").hide( );
    $(".dones1").hide( );
    $(".don1").hide( );
    $(".don2").hide( );
    $(".nomiel").hide( );
});

$(".botonos") .click (function(){
    $(".barco1").hide( );
    $(".caminoso").show( );
});

$(".botondu") .click (function(){
    $(".barco2").hide( );
    $(".camino1").show( );
});

$(".botonmi") .click (function(){
    $(".camino2").hide( );
    $(".caminoso").show( );
});

$(".botonmiel") .click (function(){
    $(".caminoso").hide( );
    $(".dones").show( );
});

$(".botondo") .click (function(){
    $(".dones").hide( );
    $(".dones1").show( );
});

$(".botonfu") .click (function(){
    $(".dones1").hide( );
    $(".don1").show( );
});

$(".botonti") .click (function(){
    $(".dones1").hide( );
    $(".don2").show( );
});

$(".botonmielno") .click (function(){
    $(".caminoso").hide( );
    $(".nomiel").show( );
});

$(".botoniz").hover (function(){
    $(".texto").css("color","red" );
    $(" ").show();
});