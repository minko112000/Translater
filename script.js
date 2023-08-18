let from = 'my'
let to = 'th'

$('.fa-copy').click(function () {
  $(this).addClass('fa-check-double')
  $(this).removeClass('fa-copy')
  setTimeout(function() {
    $('.fa-check-double').addClass('fa-copy')
    $('.fa-check-double').removeClass('fa-check-double')
  }, 3000);
})

$('.vb').click(function () {
  navigator.vibrate(30)
})

$('#change').click(function () {
  let fText = $('.from-text').val()
  let tText = $('.to-text').val()
  if ($(this).hasClass('to-thai')) {
    from = 'th'
    to = 'my'
    $('.from').text('Thailand')
    $('.to').text('Myanmar')
    $('.from-text').val(tText)
    $('.to-text').val(fText)
    $('.from-text').attr('placeholder', 'Thailand')
    $('.to-text').attr('placeholder', 'Myanmar')
    $(this).removeClass('to-thai')
  } else {
    from = 'my'
    to = 'th'
    $('.from').text('Myanmar')
    $('.to').text('Thailand')
    $('.from-text').val(tText)
    $('.to-text').val(fText)
    $('.from-text').attr('placeholder', 'Myanmar')
    $('.to-text').attr('placeholder', 'Thailand')
    $(this).addClass('to-thai')
  }
})

$('#translate').click(function () {
  $('.to-text').val('Translation ......')
  let text = $('.from-text').val()
  const settings = {
  	async: true,
  	crossDomain: true,
  	url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  	method: 'POST',
  	headers: {
  		'content-type': 'application/x-www-form-urlencoded',
  		'Accept-Encoding': 'application/gzip',
  		'X-RapidAPI-Key': '2e3c3d547emshacac60927e7d8b9p102f5fjsn89b3e573f530',
  		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
  	},
  	data: {
  		q: text,
  		target: to,
  		source: from
  	}
  };
  
  $.ajax(settings).done(function (response) {
  	let res_text = response.data.translations[0].translatedText;
  	tText = $('.to-text').val(res_text)
  });
})

$('#copy-text').click(function () {
  let text = $('.to-text').val()
  navigator.clipboard.writeText(text)
})