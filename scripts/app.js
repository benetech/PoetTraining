//HOW SCRIPTS
function howModalReset() {
	$('#ModalTitle').empty();
	$('.mainImage').attr("src", "");
	$('.mainImageLink').attr("href", "");
	
	$('#step1').hide();
		$('.guidelines').empty();
		
	$('#step2').hide();
}

function howModalOpen(example) {
	howModalReset();
	
	var title = example[0].name;
	var imageURL = example[0].imageURL;
	var guidelines = example[0].guidelines;
	var context = example[0].context;
	var questions = example[0].questions;
	
	// INITIAL POPULATE DATA				
	$('#ModalTitle').html(title);
	$('.mainImage').attr("src", imageURL);
	$('.mainImageLink').attr("href", imageURL);
	
	// STEP 1 POPULATE & SHOW
	$('.guidelines').html(guidelines);
	$('#step1').show();
	
	$("#modalNextButton").click(function() {
		var questionsHTML = "<form>"
		for (var i = 0; i < questions.length; i++) {	
	      questionsHTML += '<label><input type="radio" name="questionSet" value="'+i+'">'+questions[i].question+'</label><br/>'
	    }
	    questionsHTML += "</form>"
	    $('.multipleChoice').html(questionsHTML);
		//todo - populate multiple choices
		//todo - wire up the next button with validation
		//show warning message
		$('#step1').hide();
		$('#step2').show();
	})

	$('#example01modal').modal('show');	
}