// import ReduxThunk from 'redux-thunk'

// export function getWebcamTravel() {
//     return function action(dispatch) {
//       dispatch({ type: getWebcamTravel })
  
//       const request = ({
//         method: 'GET',
//         url: `https://webcamstravel.p.rapidapi.com/webcams/list/%7Bmodifier%7D?lang=en`,
//         headers: {
//                         "x-rapidapi-host": "webcamstravel.p.rapidapi.com",
//                         "x-rapidapi-key": "aabf882fcbmsh355116073d1bf8cp1f6ee9jsnb79f6b54da85"
//                     }
//       });
      
//       request.then(
//         response => dispatch(getWebcamTravel(response)),
//         err => dispatch((err))
//       );
//     }
//   }


// async function getWebcamTravel() {
//     await fetch("https://webcamstravel.p.rapidapi.com/webcams/list/%7Bmodifier%7D?lang=en", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "webcamstravel.p.rapidapi.com",
//             "x-rapidapi-key": "aabf882fcbmsh355116073d1bf8cp1f6ee9jsnb79f6b54da85"
//         }
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }

// module.exports = { getWebcamTravel }
