function getGrade(total) {
    switch (true) {
    case total > 90:
        return "A+";
        break;
    case total > 80 && total <= 90:
         return "A";
        break;
    case total > 70 && total <= 80:
        return "B";
        break;
    case total > 60 && total <= 70:
         return "C";
        break;
    case total > 50 && total <= 60:
        return "D";
         break;
    case total > 40 && total <= 50:
        return "D";
        break;  
    case total > 40 && total <= 40:
        return "E";
        break;  
    case total > 30 && total <= 40:
         return "F";
        break;
        default:
        return "Fail";
    }
}
console.log(getGrade(20));