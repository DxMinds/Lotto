$('#anonymous').click(function () {
    $('.bbtn').removeClass('hoverClass');
    $('#anonymous').addClass('hoverClass');
    $('#buyemailticket').hide();
    $('#buyannonticket').show();
    $('#text').text('Address');
    $('#address').val('');
    $('#ticket').val('');
});

$('#emails').click(function () {
    $('.bbtn').removeClass('hoverClass');
    $('#emails').addClass('hoverClass');
    $('#buyannonticket').hide();
    $('#buyemailticket').show();
    $('#text').text('Email');
    $('#address').val('');
    $('#ticket').val('');
});


$('#anony').click(function () {
    $('.bbtnn').removeClass('hoverClass');
    $('#anony').addClass('hoverClass');
    $('#checkspan').text('Address');

});

$('#emailb').click(function () {
    $('.bbtnn').removeClass('hoverClass');
    $('#emailb').addClass('hoverClass');
    $('#checkspan').text('Email')

});

$('#pick').click(function () {
    $('.bbtnn').removeClass('hoverClass');
    $('#pick').addClass('hoverClass');
    $('.mellow_main').css({'display':'none'});
    $('.mellow_main_one').css({'display':'block'})

});

$('#claim').click(function () {
    $('.pick').removeClass('hoverClass');
    $('#claim').addClass('hoverClass');
    $('.mellow_main').css({'display':'none'});
    $('.mellow_main_two').css({'display':'block'})

});

$('.gobutton').click(function () {
    $('.landing').css({'display':'none'});
    $('.mellow_main').css({'display':'block'})

});
$('.home').click(function () {
    $('.mellow_main').css({'display':'none'});
    $('.mellow_main_one').css({'display':'none'});
    $('.mellow_main_two').css({'display':'none'});
    $('.landing').css({'display':'block'})

});