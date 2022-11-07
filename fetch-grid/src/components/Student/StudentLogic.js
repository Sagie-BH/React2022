export const getGradeStyle = (grade) =>{
    let gradeStyle = {};
    if (grade < 60){
        gradeStyle = { color: 'red'}
    }
    else if (grade < 70 & grade > 60){
        gradeStyle = { color: 'orange'}
    }
    else if (grade < 80 & grade > 70) {
        gradeStyle = { color: 'purple'}
    }
    else if (grade < 90 & grade > 80) {
        gradeStyle = { color: 'yellow'}
    }
    else{
        gradeStyle = { color: 'green'}
    }
    return gradeStyle;
}