// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles'; // Corrected import path for makeStyles
// import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom';




// const backgroundImage = 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D'; // Replace with your own background image URL

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: 'cover',
//     height: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     padding: theme.spacing(3), // Add padding for better spacing
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
//   title: {
//     marginBottom: theme.spacing(2),
//     color: '#fff',
//     fontWeight: 'bold',
//     textShadow: '2px 2px 4px rgba(0,0,0,0.5)', // Add text shadow for emphasis
//     textAlign: 'center', // Center align the title
//   },
//   subtitle: {
//     marginBottom: theme.spacing(2),
//     color: '#fff',
//     fontStyle: 'italic',
//     textAlign: 'center', // Center align the subtitle
//   },
//   featureList: {
//     marginTop: theme.spacing(4),
//     textAlign: 'left',
//     color: '#fff',
//   },
// }));

// const Home = () => {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <Container maxWidth="md">
//         <Typography variant="h2" className={classes.title} gutterBottom>
//           Welcome to the Internship Portal
//         </Typography>
//         <Typography variant="body1" className={classes.subtitle} gutterBottom>
//           Discover exciting internship opportunities and kickstart your career journey!
//         </Typography>
//         <div className={classes.featureList}>
//           <Typography variant="h4" gutterBottom>
//             Key Features:
//           </Typography>
//           <ul>
//             <li>Explore internship opportunities from top companies</li>
//             <li>Filter listings based on your preferences</li>
//             <li>Apply for internships directly through the portal</li>
//             <li>Track your application status</li>
//           </ul>
//         </div>
//         <Button variant="contained" color="primary" className={classes.button} component={Link} to="/signup">
//           Sign Up
//         </Button>
//         <Button variant="outlined" color="primary" className={classes.button} component={Link} to="/login">
//           Log In
//         </Button>
//       </Container>
//     </div>
//   );
// };

// export default Home;
