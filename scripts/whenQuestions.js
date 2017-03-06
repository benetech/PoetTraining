var question01 = [{	"id":"01",
						"question":"Which of the following best describes this type of image?",
						"answers": [{
		    				"option":"photo",
		    				"routeId":"question02"
		    				},{
		    				"option":"drawing",
		    				"routeId":"question02"
		    				},{
		    				"option":"cartoon",
		    				"routeId":"question02"
		    				},{
		    				"option":"illustration of a process",
		    				"routeId":"question02"
		    				},{
		    				"option":"flowchart",
		    				"routeId":"question02"
		    				},{
		    				"option":"table (data display)",
		    				"routeId":"question02"
		    				},{
		    				"option":"graphic organizer (hierarchy charts, decision tree, etc.)",
		    				"routeId":"question02"
		    				},{
		    				"option":"map",
		    				"routeId":"question02"
		    				},{
		    				"option":"timeline",
		    				"routeId":"question02"
		    				},{
		    				"option":"graph (e.g. bar, circle, pie, line)",
		    				"routeId":"question02"
		    				},{
		    				"option":"displays text only, with no additional graphics",
		    				"routeId":"question02"
		    				},{
		    				"option":"displays a math expression only, with no additional graphics",
		    				"routeId":"question02"
		    				}]
		    			}];

var question02 = [{	"id":"02",
					"question":"What is the purpose of this image?",
					"answers": [{
	    				"option":"It provides visual interest only (it is not needed for understanding subject matter",
	    				"routeId":"END: Do Not Describe"
	    				},{
	    				"option":"It is a functional icon (e.g., a button or link)",
	    				"routeId":"question03"
	    				},{
	    				"option":"It provides information needed for understanding subject matter",
	    				"routeId":"question04"
	    				},{
	    				"option":"Other",
	    				"routeId":"question09"
	    				}]
	    			}];
	    			
var question03 = [{	"id":"03",
					"question":"Does the icon prepare the student for an activity or represent a concept necessary to understanding the subject?",
					"answers": [{
	    				"option":"Yes",
	    				"routeId":"END: Provide a text description of the icon’s functional role"
	    				},{
	    				"option":"No",
	    				"routeId":"END: Do not describe"
	    				}]
	    			}];	

var question04 = [{	"id":"04",
					"question":"Does the image provide information essential to understanding that is not available in the surrounding text?",
					"answers": [{
	    				"option":"Yes",
	    				"routeId":"05"
	    				},{
	    				"option":"No",
	    				"routeId":"END: Do not describe"
	    				}]
	    			}];	

var question05 = [{	"id":"05",
					"question":"Does the image contain embedded text?",
					"answers": [{
	    				"option":"Yes",
	    				"routeId":"06"
	    				},{
	    				"option":"No",
	    				"routeId":"06"
	    				}]
	    			}];	

var question06 = [{	"id":"06",
					"question":"Would a text description adequately convey the main idea of this image?",
					"answers": [{
	    				"option":"Yes",
	    				"routeId":"END: Provide a text description for the image"
	    				},{
	    				"option":"No",
	    				"routeId":"07"
	    				}]
	    			}];	

var question07 = [{	"id":"07",
					"question":"Would a tactile representation convey the main idea of this image better?",
					"answers": [{
	    				"option":"Yes",
	    				"routeId":"08"
	    				},{
	    				"option":"No",
	    				"routeId":"09"
	    				}]
	    			}];	

var question08 = [{	"id":"08",
					"question":"This image should be converted to tactile format because:",
					"answers": [{
	    				"option":"It represents a spatial concept",
	    				"routeId":""
	    				},{
	    				"option":"It is needed for the student to participate in an activity",
	    				"routeId":""
	    				},{
	    				"option":"The subject matter is otherwise inaccessible",
	    				"routeId":""
	    				},{
	    				"option":"It would require an excessively longer time to describe the image than if it would if the student explored it tactually",
	    				"routeId":""
	    				},{
	    				"option":"A tactile representation is inadequate for this image",
	    				"routeId":"09"
	    				}]
	    			}];	

var question09 = [{	"id":"09",
					"question":"How do you think this image could be best represented to a student who is visually impaired?",
					"answers": [{
	    				"option":"",
	    				"routeId":""
	    				},{
	    				"option":"",
	    				"routeId":""
	    				},{
	    				"option":"",
	    				"routeId":""
	    				},{
	    				"option":"",
	    				"routeId":""
	    				}]
	    			}];	
	    			
	    			