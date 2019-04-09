function studentDetails(name, dateOfBirth, phoneNumber, address) {
    var studentObject = {};
    studentObject.name = name;
    studentObject.dateOfBirth = dateOfBirth;
    studentObject.phoneNumber = phoneNumber;
    studentObject.address = address;
    return studentObject;
}

module.exports = studentDetails;