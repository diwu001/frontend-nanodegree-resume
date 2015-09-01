'use strict';

var bio = {
  'name': 'Tina D. Wu',
  'role': 'Software Developer Intern',
  'contacts': {
    'mobile': '806-252-9105',
    'email': 'diwubupt@gmail.com',
    'github': 'diwu001',
    'linkedin': 'tinadwu',
    'location': 'Richmond, CA'
  },
  'welcome_msg': 'Welcome to my resume!',
  'skills': ['JavaScript', 'jQuery', 'Java', 'PHP', 'MySQL', 'Bootstrap', 'Git/GitHub'],
  'bioPic': 'images/tina.jpg'
};

var work = [
  {
    'employer': 'Trans Intelligence LLC',
    'title': 'Software Developer Intern',
    'location': 'San Pablo, CA',
    'dates': '2015-present',
 	'description': 'Develop a dynamic map-based web application for traffic signal data management and visualization'
  }, 
  {
 	'employer': 'Texas Tech University',
 	'title': 'Web Developer',
 	'location': 'Lubbock, TX',
 	'dates': '2013-2014',
 	'description': 'Designed and developed highly customized and responsive websites for two research centers'
  }, 
  {
 	'employer':'China Mobile Communications Cooperation',
 	'title': 'Network Engineer',
 	'location': 'Beijing, China',
 	'dates': '2011-2013',
 	'description': 'Performed advanced troubleshooting for core mobile networks in Beijing'
  }
];

var projects=[
  {
 	'title': 'Social Networking Website Development Project',
 	'dates': 'January 2014 - May 2014',
 	'description': 'Developed a social networking website using PHP, WordPress and MySQL. Users can register, post articles, create connections and discuss with health experts.',
 	'images': ['images/nutri.png']
  }, 
  {
 	'title': 'Android development and automated testing',
 	'dates': 'September 2013 - December 2013',
 	'description': 'Developed an Android application to perform Matrix Calculations. Devised automated functional, model-based and structural testing using Robotium, Emma and MonkeyRunner. Developed Python scripts to perform stress testing.',
 	'images': ['images/calc.png']
  }
];

var education=[
  {
 	'name': 'Texas Tech University',
 	'location': 'Lubbock, TX',
 	'degree': 'Master',
 	'majors': 'Computer Science',
 	'dates': '2013 - 2014',
 	'url': ''
  }, 
  {
 	'name': 'Beijing University of Posts and Telecommunications',
 	'location': 'Beijing, China',
 	'degree': 'Master',
 	'majors': 'Electrical Engineering',
 	'dates': '2008 - 2011',
 	'url': '',
  }, 
  {
 	'name':  'China Agricultural University',
 	'location':'Beijing, China',
 	'degree': 'Bachelor',
 	'majors': 'Electrical Engineering',
 	'dates': '2004 - 2008',
 	'url': ''
  }
];

bio.display = function() {
  var data = '%data%';
  // Add Bio information to header
  var $header = $("#header");
  var $topContacts = $("#topContacts");
  $header.prepend(HTMLheaderRole.replace(data, bio.role));
  $header.prepend(HTMLheaderName.replace(data,bio.name));
  $topContacts.append(HTMLmobile.replace(data, bio.contacts.mobile),
      HTMLemail.replace(data, bio.contacts.email),
      HTMLgithub.replace(data, bio.contacts.github),
      HTMLlinkedin.replace(data, bio.contacts.linkedin),
      HTMLlocation.replace(data, bio.contacts.location));
  $header.append(HTMLbioPic.replace(data, bio.bioPic), HTMLskillsStart);
  var skillsLen = bio.skills.length;
  for (var i = 0; i < skillsLen; i++) {
    $header.append(HTMLskills.replace(data, bio.skills[i]));
  };
  // Add Contacts information to footer
  var $footerContacts = $("#footerContacts");
  $footerContacts.append(HTMLmobile.replace(data, bio.contacts.mobile),
      HTMLemail.replace(data, bio.contacts.email),
      HTMLgithub.replace(data, bio.contacts.github),
      HTMLlinkedin.replace(data, bio.contacts.linkedin),
      HTMLlocation.replace(data, bio.contacts.location));
};

bio.display();

work.display = function() { 
  var data = '%data%';
  var workLen = work.length;
  for (var item = 0; item < workLen; item++) {   
    $("#workExperience").append(HTMLworkStart);
    var Employer = HTMLworkEmployer.replace(data, work[item].employer);
    $(".work-entry:last").append(Employer);
    var title = HTMLworkTitle.replace(data, work[item].title);
    $(".work-entry:last").append(title);
    var dates = HTMLworkDates.replace(data, work[item].dates);
    $(".work-entry:last").append(dates);
    var formatted_location = HTMLworkLocation.replace(data, work[item].location);
    $(".work-entry:last").append(formatted_location);
    var description = HTMLworkDescription.replace(data, work[item].description);
    $(".work-entry:last").append(description);
  }
};

work.display();

projects.display = function() {
  var data = '%data%';
  var projectLen = projects.length;
  for (var i = 0; i < projectLen; i++){
    $("#projects").append(HTMLprojectStart);
    var Title = HTMLprojectTitle.replace(data, projects[i].title);
    $(".project-entry:last").append(Title);
    var Dates = HTMLprojectDates.replace(data, projects[i].dates);
    $(".project-entry:last").append(Dates);
    var Description = HTMLprojectDescription.replace(data, projects[i].description);
    $(".project-entry:last").append(Description);
    var imgLen = projects[i].images.length;
    if (imgLen) {
      for (var j = 0; j < imgLen; j++) {			
        var Formmated_image = HTMLprojectImage.replace(data, projects[i].images[j]);
        $(".project-entry:last").append(Formmated_image);
      }	
    }
  }
};

projects.display();

education.display = function() {
  var data = '%data%';
  var educationLen = education.length;
  for (var i = 0; i < educationLen; i++) {
    $("#education").append(HTMLschoolStart);
    var f_name = HTMLschoolName.replace(data, education[i].name);
    $(".education-entry:last").append(f_name);
    var f_degree = HTMLschoolDegree.replace(data, education[i].degree);
    $(".education-entry:last").append(f_degree);
    var f_dates = HTMLschoolDates.replace(data, education[i].dates);
    $(".education-entry:last").append(f_dates);
    var f_location = HTMLschoolLocation.replace(data, education[i].location);
    $(".education-entry:last").append(f_location);
    var f_major = HTMLschoolMajor.replace(data, education[i].majors);
    $(".education-entry:last").append(f_major);
  }
};

education.display();

$("#mapDiv").append(googleMap);