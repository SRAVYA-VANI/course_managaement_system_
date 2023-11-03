// import React, { useState } from 'react';
// import './AddCourse.css'; // Import the CSS file
// import axios from 'axios';

// function AddCourseForm() {
//   const [formData, setFormData] = useState({
//     description: '',
//     author: '',
//     courseName: '',
//     CourseImageLink: '',
//     videoLinks: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform form validation here if needed
//     // For simplicity, I'm omitting validation in this example

//     // Send a POST request to your API endpoint
//     axios.post('https://localhost:44324/api/EnrollCourse', {
//       description: formData.description,
//       author: formData.author,
//       courseName: formData.courseName,
//       CourseImageLink: formData.CourseImageLink,
//       videoLinks: formData.videoLinks,
//     })
//       .then((response) => {
//         if (response.status === 201) {
//           // Course enrollment successful
//           alert('Course enrollment successful');
//           // Clear the form fields
//           setFormData({
//             description: '',
//             author: '',
//             courseName: '',
//             CourseImageLink: '',
//             videoLinks: '',
//           });
//         } else {
//           // Course enrollment failed
//           alert('Course enrollment failed');
//         }
//       })
//       .catch((error) => {
//         console.error('An error occurred during course enrollment:', error);
//         alert('An error occurred during course enrollment');
//       });
//   };

//   return (
//     <div>
//       <div className="row">
//         <div className="col-md-6">
//           <div className="course-form-container">
//             <form onSubmit={handleSubmit}>
//               <h2 className="custom-h2">ADD NEW COURSE</h2>
//               <div className="form-group">
//                 <label htmlFor="description">Course Description:</label>
//                 <textarea
//                   id="description"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter course description"
//                 />
//                 {errors.description && (
//                   <div className="error-message">{errors.description}</div>
//                 )}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="author">Course Author:</label>
//                 <input
//                   type="text"
//                   id="author"
//                   name="author"
//                   value={formData.author}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter course author"
//                 />
//                 {errors.author && (
//                   <div className="error-message">{errors.author}</div>
//                 )}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="courseName">Course Name:</label>
//                 <input
//                   type="text"
//                   id="courseName"
//                   name="courseName"
//                   value={formData.courseName}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter course name"
//                 />
//                 {errors.courseName && (
//                   <div className="error-message">{errors.courseName}</div>
//                 )}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="CourseImageLink">Course Image URL:</label>
//                 <input
//                   type="text"
//                   id="CourseImageLink"
//                   name="CourseImageLink"
//                   value={formData.CourseImageLink}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter course image URL"
//                 />
//                 {errors.CourseImageLink && (
//                   <div className="error-message">{errors.CourseImageLink}</div>
//                 )}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="videoLinks">Course Link:</label>
//                 <input
//                   type="text"
//                   id="videoLinks"
//                   name="videoLinks"
//                   value={formData.videoLinks}
//                   onChange={handleChange}
//                   className="form-control"
//                   placeholder="Enter video link"
//                 />
//                 {errors.videoLinks && (
//                   <div className="error-message">{errors.videoLinks}</div>
//                 )}
//               </div>
//               <button type="submit" className="btn btn-primary">
//                 Enroll
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddCourseForm;








import React, { useState } from 'react';
import './AddCourse.css'; // Import the CSS file
import axios from 'axios';

function AddCourseForm() {
  const [formData, setFormData] = useState({
    description: ' ',
    author: ' ',
    courseName: ' ',
    courseImg: ' ',
    videoLink: ' ',
    firstName: ' ', // Placeholder first name
    lastName: ' ', // Placeholder last name
    email: ' ', // Placeholder email
    password: '', // Placeholder password
    confirmPassword: '', // Placeholder confirm password
  });

  const [errors, setErrors] = useState({
    description: '',
    author: '',
    courseName: '',
    CourseImageLink: '',
    videoLinks: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};

    // Validate form fields as needed

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('https://localhost:44324/api/EnrollCourse', {
          enrollmentId: 0, // Auto-generated by backend
          courseId: 0, // Auto-generated by backend
          userId: 0, // Auto-generated by backend
          startDate: new Date().toISOString(), // Replace with the actual start date
          videoLinks: formData.videoLinks,
          course: {
            courseId: 0, // Auto-generated by backend
            description: formData.description,
            author: formData.author,
            courseName: formData.courseName,
            CourseImageLink: formData.CourseImageLink,
            startDate: new Date().toISOString(), // Replace with the actual start date
            endDate: new Date().toISOString(), // Replace with the actual end date
          },
          user: {
            userId: 0, // Auto-generated by backend
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
            confirmpassword: formData.confirmPassword, // Correct the field name
          },
        });

        if (response.status === 201) {
          // Enrollment successful
          alert('Enrollment successful');
          // Clear the form fields
          setFormData({
            description: '',
            author: '',
            courseName: '',
            courseImg: '',
            videoLink: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          });
        } else {
          // Enrollment failed
          alert('Enrollment failed');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred during enrollment');
      }
    }
  };

   return (
  //   <div className="course-form-container">
  //     <form onSubmit={handleSubmit}>
  //       <h2 >ADD NEW COURSE</h2>
  //       <div className="form-group">
  //         <label htmlFor="description">Course Description:</label>
  //         <textarea
  //           id="description"
  //           name="description"
  //           value={formData.description}
  //           onChange={handleChange}
  //           className="form-control"
  //           placeholder="Enter course description"
  //         />
  //         {errors.description && <div className="error-message">{errors.description}</div>}
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="author">Course Author:</label>
  //         <input
  //           type="text"
  //           id="author"
  //           name="author"
  //           value={formData.author}
  //           onChange={handleChange}
  //           className="form-control"
  //           placeholder="Enter course author"
  //         />
  //         {errors.author && <div className="error-message">{errors.author}</div>}
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="courseName">Course Name:</label>
  //         <input
  //           type="text"
  //           id="courseName"
  //           name="courseName"
  //           value={formData.courseName}
  //           onChange={handleChange}
  //           className="form-control"
  //           placeholder="Enter course name"
  //         />
  //         {errors.courseName && <div className="error-message">{errors.courseName}</div>}
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="courseImg">Course Image URL:</label>
  //         <input
  //           type="text"
  //           id="courseImg"
  //           name="courseImg"
  //           value={formData.courseImg}
  //           onChange={handleChange}
  //           className="form-control"
  //           placeholder="Enter course image URL"
  //         />
  //         {errors.courseImg && <div className="error-message">{errors.courseImg}</div>}
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="videoLink">Course Link:</label>
  //         <input
  //           type="text"
  //           id="videoLink"
  //           name="videoLink"
  //           value={formData.videoLink}
  //           onChange={handleChange}
  //           className="form-control"
  //           placeholder="Enter video link"
  //         />
  //         {errors.videoLink && <div className="error-message">{errors.videoLink}</div>}
  //       </div>


        
  //       <h3>User Information</h3>
  //       <div className="form-group">
  //         <label htmlFor="firstName">First Name:</label>
  //         <input
  //           type="text"
  //           id="firstName"
  //           name="firstName"
  //           value={formData.firstName}
  //           onChange={handleChange}
  //           className="form-control"
  //           placeholder="Enter first name"
  //         />
  //         {errors.firstName && <div className="error-message">{errors.firstName}</div>}
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="lastName">Last Name:</label>
  //         <input
  //           type="text"
  //           id="lastName"
  //           name="lastName"
  //           value={formData.lastName}
  //           onChange={handleChange}
  //           className="form-control"
  //           placeholder="Enter last name"
  //         />
  //         {errors.lastName && <div className="error-message">{errors.lastName}</div>}
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="email">Email:</label>
  //         <input
  //           type="email"
  //           id="email"
  //           name="email"
  //           value={formData.email}
  //           onChange={handleChange}
  //           className="form-control"
  //           placeholder="Enter email"
  //         />
  //         {errors.email && <div className="error-message">{errors.email}</div>}
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="password">Password:</label>
  //         <input
  //           type="password"
  //           id="password"
  //           name="password"
  //           value={formData.password}
  //           onChange={handleChange}
  //           className="form-control"
  //           placeholder="Enter password"
  //         />
  //         {errors.password && <div className="error-message">{errors.password}</div>}
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="confirmPassword">Confirm Password:</label>
  //         <input
  //           type="password"
  //           id="confirmPassword"
  //           name="confirmPassword"
  //           value={formData.confirmPassword}
  //           onChange={handleChange}
  //           className="form-control"
  //           placeholder="Confirm password"
  //         />
  //         {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
  //       </div>
  //       <button type="submit" className="btn btn-primary">
  //         Enroll
  //       </button>
  //     </form>
  //   </div>



<div>
  <div className="row">
    <div className="col-md-6">
      {/* First Card */}
      {/* <div className="card"> */}
        {/* <div className="card-body"> */}
        <div className="course-form-container">
      <form onSubmit={handleSubmit}>
        <h2 className='custom-h2'>ADD NEW COURSE</h2>
       <div className="form-group">
         <label htmlFor="description">Course Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter course description"
          />
          {errors.description && <div className="error-message">{errors.description}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="author">Course Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter course author"
          />
          {errors.author && <div className="error-message">{errors.author}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter course name"
          />
          {errors.courseName && <div className="error-message">{errors.courseName}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="CourseImageLink">Course Image URL:</label>
          <input
            type="text"
            id="CourseImageLink"
            name="CourseImageLink"
            value={formData.CourseImageLink}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter course image URL"
          />
          {errors.CourseImageLink && <div className="error-message">{errors.CourseImageLink}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="videoLinks">Course Link:</label>
          <input
            type="text"
            id="videoLinks"
            name="videoLinks"
            value={formData.videoLinks}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter video link"
          />
          {errors.videoLinks && <div className="error-message">{errors.videoLinks}</div>}
        </div>
         </form> 
        </div>
      {/* </div> */}
    {/* </div> */}
    </div>




    <div className="col-md-6">
      {/* First Card */}
      {/* <div className="card"> */}
        {/* <div className="card-body"> */}
        <div className="course-form-container">
      <form onSubmit={handleSubmit}>
        <h2 className='custom-h2'>USER INFORMATION</h2>
       <div className="form-group">
       <label htmlFor="firstName">First Name:</label>
         <input
            type="text"
             id="firstName"
             name="firstName"
             value={formData.firstName}
             onChange={handleChange}
             className="form-control"
            placeholder="Enter first name"
         />
           {errors.firstName && <div className="error-message">{errors.firstName}</div>}
        </div>
        <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
           <input
            type="text"
           id="lastName"
            name="lastName"
            value={formData.lastName}
         onChange={handleChange}
             className="form-control"
             placeholder="Enter last name"
           />
        {errors.lastName && <div className="error-message">{errors.lastName}</div>}
        </div>
        <div className="form-group">
        <label htmlFor="email">Email:</label>
           <input
             type="email"
             id="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
             className="form-control"
             
           />
           {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="form-group">
        <label htmlFor="password">Password:</label>
         <input
           type="password"
           id="password"
           name="password"
           value={formData.password}
           onChange={handleChange}
           className="form-control"
          
         />
         {errors.password && <div className="error-message">{errors.password}</div>}
        </div>
        <div className="form-group">
         
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-control"
           
          />
          {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
        </div>
        
         </form> 
         
        </div>
      {/* </div> */}
    {/* </div> */}
    </div>
 
      </div>
      <div class="col-md-12 text-center"> 
      <button type="submit"  onClick={handleSubmit} className="btn btn-primary">
          Enroll
        </button>
        </div>
        </div>


  );
}

export default AddCourseForm;
