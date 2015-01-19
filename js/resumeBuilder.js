//JSON data for resume: summary/bio, work experience, projects, and education

var bio = {
	"name": "Thomas Kunjappu",
	"role": "Web Developer",
	"contacts": {
		"email": "Thomas.J.Kunjappu@gmail.com",
		"mobile": "646-872-6010",
		"twitter": "@thomaskunjappu",
		"linkedIn": "TK linkedIn",
		"github": "token4",
		"location": "San Francisco",
		"blog": "blog.thomaskunjappu.com"
	},
	"bioPic": "https://pbs.twimg.com/profile_images/2368376907/azag48rtuh0l3gx79yj4_400x400.jpeg",
	"welcomeMessage": "I love building cool companies and products and am also working on my engineering skills",
	"skills": ["Programming", "Product Management", "JavaScript", "HTML", "CSS", "Python", "Django", "Agile", "Marketing"]
};

var work = {
	"jobs": [
	{
		"employer": "Medallia",
		"title": "Product Manager",
		"location": "Palo Alto, CA",
		"dates": "2012-2015",
		"description": "Grew a product from $800k to >$10M in Revenue and increased the attach rate from <1% to 60%",
		"url": "http://www.medallia.com/"
	},
	{
		"employer": "MapThatPad",
		"title": "Co-Founder",
		"location": "New York, NY",
		"dates": "2010-2012",
		"description": "Company focused on helping apartment hunters organize the apartment hunt which then pivoted into a marketing tool for brokers and property managers",
		"url": "http://broker.MapThatPad.com/"
	},
	{
		"employer": "Honeywell",
		"title": "Product Manager",
		"location": "Melville, NY",
		"dates": "2007-2011",
		"description": "Several roles (strategic marketing, channel marketing, product marketing, and product management. Final role include new product development of a connected home system.",
		"url": "http://www.honeywell.com/"
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "StuyHealth",
		"dates": "Jan-Sep 2014",
		"description": "Website for a non-profit focused on advocating for and communicating to 9/11 survivors. Tools Used: WordPress, bunch of WP plugins, Google Analytics, CSS, Twitter Bootstrap, Asana (project management), Cyberduck",
		"images": ["http://blog.thomaskunjappu.com/wp-content/uploads/2014/09/image_ok-300x217.png", "http://blog.thomaskunjappu.com/wp-content/uploads/2014/09/after-168x300.png"],
		"url": "http://www.stuyhealth.org"
	},
	{
		"title": "2048 in Blue",
		"dates": "Sep 2014",
		"description": "After spending countless hours getting to 4096, I was really excited to find out that the code for this game is open-sourced. So far, I’ve simply messed with the CSS and changed the colors. I want to add an undo button and doing that is my planned detailed entry into Javascript. Also, first time I really messed around with Github. Tools Used: CSS, Javascript, Github",
		"images": [],
		"url": "http://token4.github.io/2048/"
	},
	{
		"title": "Minimal Viable Landing Page",
		"dates": "2013",
		"description": "A shell of a page selling fake products but for real money! Beware – that paypal link is real so don’t buy anything. This was when I was first trying to get the basics of Python Django to create a simple website using a Udemy course I’ve loved. Tools Used: Python, Django, CSS, Bootstrap, Cyberduck, KomodoEdit",
		"images": [],
		"url": "http://mvp.thomaskunjappu.com/"
	},
	{
		"title": "Stuy '02 Reunion",
		"dates": "June 2012",
		"description": "Created for my high school reunion focused on getting folks to buy tickets online on the way to organizing the most well attended reunion in recorded school history for my high school. :) Tools Used: Umm..just WordPress and a little custom CSS here and there.",
		"images": [],
		"url": "http://stuy02.thomaskunjappu.com/"
	}
	]
}

var education = {
	"schools": [
	{
		"name":	"Williams College", 
		"location": "Williamstown, MA",
		"degree": "Bachelor of Arts",
		"major": ["Economics", "Spanish"],
		"dates": "2006",
		"url": "http://www.williams.edu"
	},
	{
		"name": "Stuyvesant High School",
		"location": "New York, NY",
		"degree": "High School Diploma",
		"major": ["Math","Science"],
		"dates": "2002",
		"url": "http://www.stuy.edu"
	}
	],
	"onlineCourses": [
		{
		"title": "JavaScript Basics for Beginners",
		"school": "Udacity",
		"dates": 2015,
		"url": "https://www.udacity.com/course/ud804"
	},
		{
		"title": "How to use Git & Github",
		"school": "Udacity",
		"dates": 2014,
		"url": "https://www.udacity.com/course/ud775"
	},
		{
		"title": "Intro to HTML & CSS",
		"school": "Udacity",
		"dates": 2014,
		"url": "https://www.udacity.com/course/ud304"
	},
	{
		"title": "JavaScript",
		"school": "Code Academy",
		"dates": 2014,
		"url": "http://www.codecademy.com/en/tracks/javascript"
	},
	{
		"title": "Make your own 2048",
		"school": "Udacity",
		"dates": 2014,
		"url": "https://www.udacity.com/course/ud248"
	},
	{
		"title": "Coding for Entrepreneurs: Learn Python, Django and more",
		"school": "Udemy",
		"dates": 2014,
		"url": "https://www.udemy.com/coding-for-entrepreneurs/"
	},
	{
		"title": "Web Development: How to Build a Blog",
		"school": "Udacity",
		"dates": 2012,
		"url": "https://www.udacity.com/course/cs253"
	},
	{
		"title": "Introduction to Artificial Intelligence",
		"school": "Udacity",
		"dates": 2011,
		"url": "https://www.udacity.com/course/cs271"
	},
	{
		"title": "Learn Python the Hard Way",
		"school": "Zed A. Shaw",
		"dates": 2011,
		"url": "http://learnpythonthehardway.org/"
	}
	]
};

bio.display = function() {

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	
	
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	$("#topContacts").append(formattedBlog);
	var formattedLinkedIn = HTMLcontactGeneric.replace("%data%", bio.contacts.linkedIn);
	var formattedLinkedIn = formattedLinkedIn.replace("%contact%", bio.contacts.linkedIn)
	$("#topContacts").append(formattedLinkedIn);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedbioPic);
	var formattedwelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedwelcomeMessage);
	
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (i=0; i<bio.skills.length; i++) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills:last").append(formattedSkills);
		}
		
	}

	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedBlog);
	$("#footerContacts").append(formattedLinkedIn);

};

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedTitle = formattedTitle.replace("#", projects.projects[project].url);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length > 0) {
			for (img in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}	
};

education.display = function() {
	if (education.schools.length > 1) {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchool = formattedSchool.replace("#", education.schools[school].url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedSchool + formattedDegree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedMajor);
		}
	}

	if (education.onlineCourses.length > 1) {
		$("#education").append(HTMLonlineClasses);
		for (onlineCourse in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var formattedTitle = formattedTitle.replace("#", education.onlineCourses[onlineCourse].url);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			$(".education-entry:last").append(formattedTitle + formattedSchool);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
			$(".education-entry:last").append(formattedDates);
		//Not adding this URLs to the courses because it's ugly!
		//	var formattedURL = HTMLonlineURL.replace("#", education.onlineCourses[onlineCourse].url);
		//	var formattedURL = formattedURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		//	$(".education-entry:last").append(formattedURL);
		}
	}
};

bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);

//Function that takes in a name and internationalizes it
function inName(name) {
	var array = name.trim().split(" ");
	var firstName = array[0].slice(0,1).toUpperCase() + array[0].slice(1).toLowerCase();
	var lastName = array[1].toUpperCase();
	var fullName = firstName + " " + lastName;
	return fullName;
};

//Call Google maps
$("#mapDiv").append(googleMap);