console.log("connected")

let prompts = ["Type a plural noun", "Type a verb", "Type a plural noun", "Type a verb", "Type a plural noun", "Type a verb", "Type a plural noun", "Type a name of person in room"]

let answers = []

let currentPrompt = 0;

let nextPrompt = function() {
	if(currentPrompt != 0) {
		answers.push($('input').val());
	}
	if(currentPrompt < prompts.length) {
		$('.prompt').html(prompts[currentPrompt] + '<br><input type="text" placeholder="Enter your answer..." class="input">');
		currentPrompt +=1
	}
	else {
		showFinal();
	}
}

let showFinal = function() {
	$('.prompt').html(
		'<div class="poem"> If <span class="fill"> '+answers[0]+'</span> were raindrops, <br>I\'d <span class="fill"> '+answers[1]+'</span> you showers. <br> If hugs were <span class="fill"> '+answers[2]+'</span>, <br> I\'d <span class="fill"> '+answers[3]+'</span> you hours. <br> If <span class="fill"> '+answers[4]+'</span> were water, I\'d <span class="fill"> '+answers[5]+'</span> you the sea. <br> And if LOVE were a <span class="fill"> '+answers[6]+'</span> <br> I\'d send you <span class="fill"> '+answers[7]+'</span>. </div>'
		);
	$('.prompt-button').hide();
}

let emojiBurst = function(numHearts){
  let $emojis;
  const $body = $('body');
  for (let i = 0; i < numHearts; i++) {
    let emojiArray = ['LOVE', '&hearts;']
    let randomEmoji = emojiArray[Math.floor(Math.random() * emojiArray.length) + 0  ]
    $emojis = $('<p>').addClass('heart').html(randomEmoji);
    $body.append($emojis);
    $emojis.animate({
      top: Math.floor(Math.random() * 200) - 50 + '%',
      left: Math.floor(Math.random() * 200) - 50 + '%',
      opacity: 0,
    }, 4000, 'linear');
  }
}

$( ".prompt-button" ).click(function() {
  	nextPrompt();
  	emojiBurst(25);
});



// $('.prompt').change(function() {
// 	emojiBurst(10);
// })

nextPrompt();