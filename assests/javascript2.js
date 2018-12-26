//initialize the new game
	function initialize() {
			//declare variables
			var count;
			var counter;
			var answer = 0;
			var right = 0;
			var wrong = 0;
			var question1;

			//game starts once you click the begin button
			$("#begin").on("click", show);
			$("#begin").on("click", start);

			//60 second timer countdown begins. once interval is clear, alert user of their score and and stop the timer countdown
			function decrement() {
  				count--;
  				$("#timeRemaining").html("Time Remaining: " + count + " seconds");
  				$("#submitButton").on("click", submit);
  				if (count === 0) {
  					function score () {
  					$("form").html("<h1>Game over!</h1> You answered " + correct + " questions correctly and " + wrong + " questions incorrectly.");	
  					};

					function stop() {
						clearInterval(counter);
						wrong = 0;
						right = 0;
					};
					score();
					stop();
				};
  			}

  			//oncce all answers have been submitted (instead of waiting on interval to clear), check them against correct answers
			function submit() {
					function checkAnswers() {
                        $("#0-1").on("click".wrong);
                        $("#0-2").on("click".right);
                        $("#0-3").on("click".wrong);
                        $("#0-4").on("click".wrong);
    
                        $("#1-1").on("click".wrong);
                        $("#1-2").on("click".right);
                        $("#1-3").on("click".wrong);
                        $("#1-4").on("click".wrong);
    
                        $("#2-1").on("click".wrong);
                        $("#2-2").on("click".wrong);
                        $("#2-3").on("click".wrong);
                        $("#2-4").on("click".right);
    
                        $("#3-1").on("click".right);
                        $("#3-2").on("click".wrong);
                        $("#3-3").on("click".wrong);
                        $("#3-4").on("click".wrong);
    
                        $("#4-1").on("click".wrong);
                        $("#4-2").on("click".right);
                        $("#4-3").on("click".wrong);
                        $("#4-4").on("click".wrong);
    
                        $("#5-1").on("click".wrong);
                        $("#5-2").on("click".right);
                        $("#5-3").on("click".wrong);
                        $("#5-4").on("click".wrong);
    
                        $("#6-1").on("click".right);
                        $("#6-2").on("click".wrong);
                        $("#6-3").on("click".wrong);
                        $("#6-4").on("click".wrong);
    
                        $("#7-1").on("click".right);
                        $("#7-2").on("click".wrong);
                        $("#7-3").on("click".wrong);
                        $("#7-4").on("click".wrong);
    
                        $("#8-1").on("click".wrong);
                        $("#8-2").on("click".wrong);
                        $("#8-3").on("click".wrong);
                        $("#8-4").on("click".right);
    
                        $("#9-1").on("click".right);
                        $("#9-2").on("click".wrong);
                        $("#9-3").on("click".wrong);
                        $("#9-4").on("click".wrong);

					};

					//alert user of their score
					function score2 () {
					$("form").html("<h1>Game over!</h1> You answered " + right + " questions correctly and " + wrong + " questions incorrectly.");
					};
					score2();
			};

			//for each right answer add a point to the score
			function right() {
			right ++;
			}
			
			//for each wrong answer subtract a point from the score
			function wrong() {
				wrong ++;
			}

			//show game
			function show() {
				$("form").show();
			}

			//hide instructions
			function hide() {
				$(".jumbotron").hide();
			}

			//start the game by hiding the instructions, setting the count intervval to
			// 60 seconds, and running the check answers function after interval clears
			function start() {
				hide();
		 		count = 60;
				counter = setInterval(decrement, 1000);
				function checkAnswers() {
            
                    $("#0-1").on("click".wrong);
                    $("#0-2").on("click".right);
                    $("#0-3").on("click".wrong);
                    $("#0-4").on("click".wrong);

                    $("#1-1").on("click".wrong);
                    $("#1-2").on("click".right);
                    $("#1-3").on("click".wrong);
                    $("#1-4").on("click".wrong);

                    $("#2-1").on("click".wrong);
                    $("#2-2").on("click".wrong);
                    $("#2-3").on("click".wrong);
                    $("#2-4").on("click".right);

                    $("#3-1").on("click".right);
                    $("#3-2").on("click".wrong);
                    $("#3-3").on("click".wrong);
                    $("#3-4").on("click".wrong);

                    $("#4-1").on("click".wrong);
                    $("#4-2").on("click".right);
                    $("#4-3").on("click".wrong);
                    $("#4-4").on("click".wrong);

                    $("#5-1").on("click".wrong);
                    $("#5-2").on("click".right);
                    $("#5-3").on("click".wrong);
                    $("#5-4").on("click".wrong);

                    $("#6-1").on("click".right);
                    $("#6-2").on("click".wrong);
                    $("#6-3").on("click".wrong);
                    $("#6-4").on("click".wrong);

                    $("#7-1").on("click".right);
                    $("#7-2").on("click".wrong);
                    $("#7-3").on("click".wrong);
                    $("#7-4").on("click".wrong);

                    $("#8-1").on("click".wrong);
                    $("#8-2").on("click".wrong);
                    $("#8-3").on("click".wrong);
                    $("#8-4").on("click".right);

                    $("#9-1").on("click".right);
                    $("#9-2").on("click".wrong);
                    $("#9-3").on("click".wrong);
                    $("#9-4").on("click".wrong);
                    

				checkAnswers();
			}
		}
}

		//once page loads, hide the game section and initialize the new game function
		$(document).ready(function() {
			$("form").hide();
			initialize();	
		});

