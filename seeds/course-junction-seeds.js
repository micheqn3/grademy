const CourseJunction = require('../models/CourseJunction');

const courseJunctionData = [
  {
    student_id: 1,
    course_id: 1,
  },
  {
    student_id: 1,
    course_id: 2,
  },
  {
    student_id: 2,
    course_id: 3,
  },
  {
    student_id: 2,
    course_id: 4,
  },
  {
    student_id: 3,
    course_id: 4,
  },
];

const seedCategories = () => CourseJunction.bulkCreate(courseJunctionData);

module.exports = seedCategories;
