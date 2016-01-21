//           $(document).on('click', '#charlieButton', function() {
//                $.getJSON('json-data-lecturers.php', function(data) {
//                    $.each(data.lecturers, function(index, lecturer) {
//                        var charlie=$('#button_charlie').val();                 
//        
//                    if(lecturer.firstName===charlie){
//                            
//                      
//                        $('#lecturers_div').append('<p> Staff No: ' + lecturer.staffNumber + '</p>');
//                        $('#lecturers_div').append('<p> Modules: ' + lecturer.moduleNo1 + " and " + lecturer.moduleNo2 +'</p>');
//                        $('#lecturers_div').append('<p> Email: ' + lecturer.email + '</p>');
//                        }
//                    });
//                        	});
//                	});
//
////HTML
//
////            <div id="charlie">
////            <button id="charlieButton" value ="Charlie">Charlie Cullen</button>
////            </div>
//            
//
//         
//
//                    function getHugh() {
//                $.getJSON('json-data-lecturers.php', function(data) {
//                    $.each(data.lecturers, function(index, lecturer) {
//                         var hugh=$('#hughButton').val();                 
//        
//                    if(lecturer.firstName===hugh){
//                            
//                        $('#lecturers_div').append('<p> Staff No: ' + lecturer.staffNumber + '</p>');
//                        $('#lecturers_div').append('<p> Modules: ' + lecturer.moduleNo1 + " and " + lecturer.moduleNo2 +'</p>');
//                        $('#lecturers_div').append('<p> Email: ' + lecturer.email + '</p>');
//                        }
//                    });
//                        	});
//                	};

//HTML
//
//	<div id="hugh">
//            <button id="hughButton" value ="Hugh">Hugh McAtamney</button>
//            </div>

//var listCreated = false;
//$(document).on("pageinit", "#lecturersPage", function(){
//$.getJSON('json-data-lecturers.php', function(data) {
//$.each(data.lecturer, function(index, lecturer) {
//if(!listCreated){
//$("#content").append("<ul id='list' data-role='listview'></ul>");
//$("#content").trigger("create");
//listCreated = true;
//} //End of If Statement
//$("#list").append('<li><a href="#page2">'+ lecturer.firstName + " " + lecturer.lastName +'</a></li>');
//}); //End of Loop
//$("#list").page();
//}); //End of JSON Call
//}); //End of Event Handler
//
//  //GETS AND DISPLAYS MODULE NAME AND DUE DATE
//$(document).on("pageinit", "#datesPage", function(){
// $.getJSON('php/json-data-modules.php', function(data) {  
//                $.each(data.modules, function(index, module) {
//                $('#datesDiv').append('<p> Module: ' +module.moduleName + " " + '<p> Due Date:' + " " + module.dueDate);
//            });
//        });
//
//});