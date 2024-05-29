// // Import required modules
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');

// // Initialize Express app
// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Connect to MongoDB database
// mongoose.connect('mongodb://localhost:27017/your_database_name', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define Submission schema
// const submissionSchema = new mongoose.Schema({
//   // Define submission schema fields
//   // For example: marks, comments, evaluationStatus, etc.
// });

// // Define Submission model
// const Submission = mongoose.model('Submission', submissionSchema);

// // Route for handling submission evaluation
// app.post('/api/submissions/:id/evaluate', async (req, res) => {
//   try {
//     const { marks, comments } = req.body;
//     const submissionId = req.params.id;

//     // Update submission with evaluation data
//     const updatedSubmission = await Submission.findByIdAndUpdate(submissionId, {
//       marks,
//       comments,
//       evaluationStatus: 'Completed', // Assuming evaluation status is updated to 'Completed'
//     }, { new: true });

//     if (!updatedSubmission) {
//       return res.status(404).json({ error: 'Submission not found' });
//     }

//     // Send updated submission data in response
//     res.json(updatedSubmission);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
