
function validateFeedback() {
    let valid = true;

    let student = document.getElementById("student").value.trim();
    let course = document.getElementById("course").value.trim();
    let faculty = document.getElementById("faculty").value.trim();

    document.getElementById("studentError").innerHTML = "";
    document.getElementById("courseError").innerHTML = "";
    document.getElementById("facultyError").innerHTML = "";
    document.getElementById("teachingError").innerHTML = "";
    document.getElementById("practicalError").innerHTML = "";
    document.getElementById("contentError").innerHTML = "";

    if (student == "") {
        document.getElementById("studentError").innerHTML = "Enter student name";
        valid = false;
    }

    if (course == "") {
        document.getElementById("courseError").innerHTML = "Enter course name";
        valid = false;
    }

    if (faculty == "") {
        document.getElementById("facultyError").innerHTML = "Enter faculty name";
        valid = false;
    }

    let teaching = Number(document.getElementById("teaching").value);
    let practical = Number(document.getElementById("practical").value);
    let content = Number(document.getElementById("content").value);

    if (document.getElementById("teaching").value == "" || isNaN(teaching) || teaching < 1 || teaching > 5) {
        document.getElementById("teachingError").innerHTML = "Select rating from 1 to 5";
        valid = false;
    }

    if (document.getElementById("practical").value == "" || isNaN(practical) || practical < 1 || practical > 5) {
        document.getElementById("practicalError").innerHTML = "Select rating from 1 to 5";
        valid = false;
    }

    if (document.getElementById("content").value == "" || isNaN(content) || content < 1 || content > 5) {
        document.getElementById("contentError").innerHTML = "Select rating from 1 to 5";
        valid = false;
    }

    return valid;
}

function calculateAverage(teaching, practical, content) {
    return (teaching + practical + content) / 3;
}

function calculatePercentage(average) {
    return (average / 5) * 100;
}

function getClassification(average) {
    if (average >= 4.5) {
        return "Excellent";
    } else if (average >= 3.5) {
        return "Very Good";
    } else if (average >= 2.5) {
        return "Good";
    } else if (average >= 1.5) {
        return "Needs Improvement";
    } else {
        return "Poor";
    }
}

function getRecommendation(classification) {
    if (classification == "Excellent") {
        return "Keep up the excellent work.";
    } else if (classification == "Very Good") {
        return "Good work. Keep improving small areas.";
    } else if (classification == "Good") {
        return "Add more examples and practice activities.";
    } else if (classification == "Needs Improvement") {
        return "More revision and guided practice may help.";
    } else {
        return "Make an improvement plan and ask for extra help.";
    }
}

document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    if (validateFeedback() == false) {
        alert("Please correct the errors in the form.");
        return;
    }

    let student = document.getElementById("student").value;
    let course = document.getElementById("course").value;
    let faculty = document.getElementById("faculty").value;

    let teaching = Number(document.getElementById("teaching").value);
    let practical = Number(document.getElementById("practical").value);
    let content = Number(document.getElementById("content").value);
    let comments = document.getElementById("comments").value;

    let average = calculateAverage(teaching, practical, content);
    let percentage = calculatePercentage(average);
    let classification = getClassification(average);
    let recommendation = getRecommendation(classification);

    document.getElementById("feedbackSummary").innerHTML =
        "<b>Student:</b> " + student + "<br>" +
        "<b>Course:</b> " + course + "<br>" +
        "<b>Faculty:</b> " + faculty + "<br>" +
        "<b>Average:</b> " + average.toFixed(2) + " / 5<br>" +
        "<b>Percentage:</b> " + percentage.toFixed(2) + "%<br>" +
        "<b>Classification:</b> " + classification + "<br>" +
        "<b>Comments:</b> " + comments;

    document.getElementById("recommendation").innerHTML =
        "<b>Recommendation:</b> " + recommendation;

    alert("Feedback submitted successfully!");
    confirm("Do you want to submit another feedback?");
});

document.getElementById("resetBtn").addEventListener("click", function() {
    let sure = confirm("Are you sure you want to reset the form?");
    if (sure) {
        document.getElementById("feedbackSummary").innerHTML = "Your result will appear here.";
        document.getElementById("recommendation").innerHTML = "";
    }
});

window.addEventListener("load", function() {
    prompt("Welcome! Enter your name (optional):");
});
