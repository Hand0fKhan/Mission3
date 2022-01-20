$("#calcBtn").click(function () {
    assignment = ($("#assign").val() * .55);
    projects = ($("#groupProj").val() * .05);
    quizzes = ($("#quiz").val() *.1);
    exams = ($("#test").val() * .2);
    intex = ($("#intex").val() * .1);

    sum = assignment + projects + quizzes + exams + intex;
    grade = 'Undetermined'
    if (sum < 68)
        grade = 'F'
    else if (sum == 69)
        grade = 'F, but nice'
    else if (sum >= 70 && sum < 80)
        grade = 'C'
    else if (sum >= 80 && sum < 90)
        grade = 'B'
    else if (sum >= 90 && sum < 100)
        grade = 'A'
    else if (sum >= 100)
        grade = 'A+'

    alert("Estimated Grade: " + sum + ' (' + grade + ')')
})