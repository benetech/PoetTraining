var question01 = [{	"id":"01",
					"name":"question01",
					"question":"Which of the following best describes this type of image?",
					"answers": [{
						"id":"0",
	    				"option":"photo",
	    				"routeId":"question02"
	    				},{
						"id":"1",
	    				"option":"drawing",
	    				"routeId":"question02"
	    				},{
		    			"id":"2",
	    				"option":"cartoon",
	    				"routeId":"question02"
	    				},{
		    			"id":"3",
	    				"option":"illustration of a process",
	    				"routeId":"question02"
	    				},{
		    			"id":"4",
	    				"option":"flowchart",
	    				"routeId":"question02"
	    				},{
		    			"id":"5",
	    				"option":"table (data display)",
	    				"routeId":"question02"
	    				},{
		    			"id":"6",
	    				"option":"graphic organizer (hierarchy charts, decision tree, etc.)",
	    				"routeId":"question02"
	    				},{
		    			"id":"7",
	    				"option":"map",
	    				"routeId":"question02"
	    				},{
		    			"id":"8",
	    				"option":"timeline",
	    				"routeId":"question02"
	    				},{
		    			"id":"9",
	    				"option":"graph (e.g. bar, circle, pie, line)",
	    				"routeId":"question02"
	    				},{
		    			"id":"10",
	    				"option":"primarily text (embedded graphics are decorative)",
	    				"routeId":"question02"
	    				},{
		    			"id":"11",
	    				"option":"math equation (no embedded graphics)",
	    				"routeId":"question02"
	    				}]
	    			}];

var question02 = [{	"id":"02",
					"name":"question02",
					"question":"What is the purpose of this image?",
					"answers": [{
						"id":"0",
	    				"option":"It provides visual interest only (it is not needed for understanding subject matter",
	    				"routeId":"END: Do Not Describe"
	    				},{
		    			"id":"1",
	    				"option":"It is functional (i.e., icon, button, link, header)",
	    				"routeId":"question03"
	    				},{
		    			"id":"2",
	    				"option":"It provides information needed for understanding subject matter",
	    				"routeId":"question04"
	    				},{
		    			"id":"3",
	    				"option":"Other",
	    				"routeId":"question09"
	    				}]
	    			}];
	    			
var question03 = [{	"id":"03",
					"name":"question03",
					"question":"Does the icon prepare the student for an activity or represent a concept necessary to understanding the subject?",
					"answers": [{
						"id":"0",
	    				"option":"Yes",
	    				"routeId":"END: Provide a text description of the icon’s functional role"
	    				},{
		    			"id":"1",
	    				"option":"No",
	    				"routeId":"END: Do not describe"
	    				}]
	    			}];	

var question04 = [{	"id":"04",
					"name":"question04",
					"question":"Does the image provide information essential to understanding that is not available in the surrounding text?",
					"answers": [{
					   	"id":"0",
	    				"option":"Yes",
	    				"routeId":"question05"
	    				},{
		    			"id":"1",
	    				"option":"No",
	    				"routeId":"END: Do not describe"
	    				}]
	    			}];	

var question05 = [{	"id":"05",
					"name":"question05",
					"question":"Does the image contain embedded text?",
					"answers": [{
						"id":"0",
	    				"option":"Yes",
	    				"routeId":"question06"
	    				},{
		    			"id":"1",
	    				"option":"No",
	    				"routeId":"question06"
	    				}]
	    			}];	

var question06 = [{	"id":"06",
					"name":"question06",
					"question":"Would a text description adequately convey the main idea of this image?",
					"answers": [{
						"id":"0",
	    				"option":"Yes",
	    				"routeId":"END: Provide a text description for the image"
	    				},{
		    			"id":"1",
	    				"option":"No",
	    				"routeId":"question07"
	    				}]
	    			}];	

var question07 = [{	"id":"07",
					"name":"question07",
					"question":"Would a tactile representation convey the main idea of this image better?",
					"answers": [{
						"id":"0",
	    				"option":"Yes",
	    				"routeId":"question08"
	    				},{
		    			"id":"1",
	    				"option":"No",
	    				"routeId":"question09"
	    				}]
	    			}];	

var question08 = [{	"id":"08",
					"name":"question08",
					"question":"This image should be converted to tactile format because:",
					"answers": [{
						"id":"0",
	    				"option":"It represents a spatial concept",
	    				"routeId":"END"
	    				},{
		    			"id":"1",
	    				"option":"It is needed for the student to participate in an activity",
	    				"routeId":"END"
	    				},{
		    			"id":"2",
	    				"option":"The subject matter is otherwise inaccessible",
	    				"routeId":"END"
	    				},{
		    			"id":"3",
	    				"option":"It would require an excessively longer time to describe the image than if it would if the student explored it tactually",
	    				"routeId":"END"
	    				},{
		    			"id":"4",
	    				"option":"A tactile representation is inadequate for this image",
	    				"routeId":"question09"
	    				}]
	    			}];	

var question09 = [{	"id":"09",
					"question":"How do you think this image could be best represented to a student who is visually impaired?",
					"answers": [{
						"id":"0",
	    				"option":"",
	    				"routeId":"END"
	    				}]
	    			}];	
	    			
	    			