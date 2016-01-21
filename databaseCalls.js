function getStudentData(studentNumber){
  $.getJSON('php/json-data-students.php', function(data) { 
            //get student ids
             $.each(data, function(index, student) { 
                    if(student["studentID"] === studentNumber) {
                        localStorage.setItem('studentData', student); 
                        $.mobile.changePage("index.html#mainpage");
                        return true;
                    }
                });
                return false;
        });
    };
   
