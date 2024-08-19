export async function fetchComponentCourses(){
     try {
      const response = await fetch('http://localhost:3000/api', {
        cache: "no-cache",
        method: 'GET',
      });
      const data = await response.json();
      return data
    } catch (error) {
      console.error('Error fetching data:', error);
    }


}
// export async function fetchRouteCourses(){
//      try {
//       const response = await fetch('http://localhost:3000/api/courses', {
//         cache: "no-cache",
//         method: 'GET',
//       });
//       const data = await response.json();
//       return data
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }


// }