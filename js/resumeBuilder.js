 var bio={
 	"name":"Tina D. Wu",
 	"role":"Software Developer Intern",
 	"contacts": {
		"mobile": "806-252-9105",
		"email": "diwubupt@gmail.com",
		"github": "diwu001",
        "linkedin": "tinadwu",
		"location": "Richmond, CA"}
 };

var welcome_msg = "Welcome to my resume!";
var bioPic =  "images/tina.jpg";

$("#header").prepend(HTMLheaderRole.replace("%data%", "Software Developer Intern in Trans Intelligence LLC"));
$("#header").prepend(HTMLheaderName.replace("%data%","Tina D. Wu"));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").append(HTMLbioPic.replace("%data%", bioPic));

$("#header").append(HTMLskillsStart);

var skills = ["JavaScript", "jQuery", "Java", "PHP", "MySQL", "Bootstrap", "Git/GitHub"];

function displaySkill() {	
	for (var i = 0; i < skills.length; i++) {
		$("#header").append(HTMLskills.replace("%data%", skills[i]));
	};
}
displaySkill();

var work=[{
 	"employer":"Trans Intelligence LLC",
 	"title":"Software Developer Intern",
 	"location":"San Pablo, CA",
 	"dates":"2015-present",
 	"description":"Develop a dynamic map-based web application for traffic signal data management and visualization"
 	}, 
 	{
 	"employer":"Texas Tech University",
 	"title":"Web Developer",
 	"location":"Lubbock, TX",
 	"dates":"2013-2014",
 	"description":"Designed and developed highly customized and responsive websites for two research centers"
 	}, 
 	{
 	"employer":"China Mobile Communications Cooperation",
 	"title":"Network Engineer",
 	"location":"Beijing, China",
 	"dates":"2011-2013",
 	"description":"Performed advanced troubleshooting for core mobile networks in Beijing"
 	}
];

var projects=[{
 	"title":"Social Networking Website Development Project",
 	"dates":"January 2014 - May 2014",
 	"description":"Developed a social networking website using PHP, WordPress and MySQL. Users can register, post articles, create connections and discuss with health experts.",
 	"images":[]
 	}, 
 	{
 	"title":"Android development and automated testing",
 	"dates":"September 2013 - December 2013",
 	"description":"Developed an Android application to perform Matrix Calculations. Devised automated functional, model-based and structural testing using Robotium, Emma and MonkeyRunner. Developed Python scripts to perform stress testing.",
 	"images":[]
 	}
 ];

 var education=[{
 	"name":"Texas Tech University",
 	"location":"Lubbock, TX",
 	"degree":"Master",
 	"majors":"Computer Science",
 	"dates":"2013 - 2014",
 	"url":""
 	}, 
 	{
 	"name":"Beijing University of Posts and Telecommunications",
 	"location":"Beijing, China",
 	"degree":"Master",
 	"majors":"Electrical Engineering",
 	"dates":"2008 - 2011",
 	"url":"",
 	}, 
 	{
 	"name":"China Agricultural University",
 	"location":"Beijing, China",
 	"degree":"Bachelor",
 	"majors":"Electrical Engineering",
 	"dates":"2004 - 2008",
 	"url":""
 	}
];

work.displayWork = function() {
	for(var item = 0; item < work.length; item++){

		$("#workExperience").append(HTMLworkStart);

		var Employer = HTMLworkEmployer.replace("%data%", work[item].employer);
		$(".work-entry:last").append(Employer);

		var title = HTMLworkTitle.replace("%data%", work[item].title);
		$(".work-entry:last").append(title);

		var dates = HTMLworkDates.replace("%data%", work[item].dates);
		$(".work-entry:last").append(dates);

		var formatted_location = HTMLworkLocation.replace("%data%", work[item].location);
		$(".work-entry:last").append(formatted_location);

		var description = HTMLworkDescription.replace("%data%", work[item].description);
		$(".work-entry:last").append(description);
	}
}

work.displayWork();

projects.displayProjects = function() {

	for(var i=0;i<projects.length;i++){
		$("#projects").append(HTMLprojectStart);
		var Title = HTMLprojectTitle.replace("%data%", projects[i].title);
		$(".project-entry:last").append(Title);

		var Dates = HTMLprojectDates.replace("%data%", projects[i].dates);
		$(".project-entry:last").append(Dates);

		var Description = HTMLprojectDescription.replace("%data%", projects[i].description);
		$(".project-entry:last").append(Description);

		if (projects[i].images.length>0)
		{
			for (var j=0;j<projects[i].images.length;j++)		
			{				
				var Formmated_image = HTMLprojectTitle.replace("%data%", projects[i].images);
				$(".project-entry:last").append(Formmated_image);
			}	
		}
	}
}

projects.displayProjects();

education.displayEducation = function() {
	for(var i=0;i<education.length;i++)
	{
		$("#education").append(HTMLschoolStart);
		var f_name = HTMLschoolName.replace("%data%", education[i].name);
		$(".education-entry:last").append(f_name);

		var f_degree = HTMLschoolDegree.replace("%data%", education[i].degree);
		$(".education-entry:last").append(f_degree);

		var f_dates = HTMLschoolDates.replace("%data%", education[i].dates);
		$(".education-entry:last").append(f_dates);

		var f_location = HTMLschoolLocation.replace("%data%", education[i].location);
		$(".education-entry:last").append(f_location);

		var f_major = HTMLschoolMajor.replace("%data%", education[i].majors);
		$(".education-entry:last").append(f_major);
	}
}

education.displayEducation();

$("#mapDiv").append(googleMap);

