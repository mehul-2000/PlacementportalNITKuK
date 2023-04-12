function resumes(data) {
    let files = [];
    data.forEach(function (student) {
        let data = {};

        // todo Check if file exists
        data.name = student.college_id + '_' + 'Resume.pdf';
        data.path = __basedir + '/frontend/public/assets/uploads/resumes/' + student.resume_url;

        files.push(data);
    });

    return files;
}

exports.resumes = resumes;
