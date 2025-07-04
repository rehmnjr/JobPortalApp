const mongoose = require('mongoose');
require('dotenv').config(); 
const Job = require('./Models/JobModel'); 

const MONGO_URI = process.env.MONGO_URI;

const dummyJobs = [
  {
    companyName: "Amazon",
    imageUrl: "https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Transparent-PNG.png",
    jobTitle: "Software Engineer",
    jobType: "Fulltime",
    salaryMin: 40,
    salaryMax: 70,
    deadline: new Date("2025-07-20T00:00:00.000Z"),
    experienceMin: 2,
    experienceMax: 5,
    location: "Mountain View",
    description: "Join our team to develop innovative software solutions and work on cutting-edge technologies. We are looking for passionate engineers.",
    createdTime: new Date(),
  },
  {
    companyName: "Tesla",
    imageUrl: "https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logomark-Black-Logo.wine.svg",
    jobTitle: "Automotive Software Engineer",
    jobType: "Fulltime",
    salaryMin: 42,
    salaryMax: 72,
    deadline: new Date("2025-07-22T00:00:00.000Z"),
    experienceMin: 2,
    experienceMax: 6,
    location: "Austin",
    description: "Develop and integrate software for electric vehicles, focusing on embedded systems and autonomous driving. Experience with C++ is a plus.",
    createdTime: new Date(),
  },
  {
    companyName: "Salesforce",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png",
    jobTitle: "Cloud Engineer",
    jobType: "Fulltime",
    salaryMin: 37,
    salaryMax: 68,
    deadline: new Date("2025-07-28T00:00:00.000Z"),
    experienceMin: 3,
    experienceMax: 5,
    location: "San Francisco",
    description: "Design, implement, and manage cloud infrastructure on AWS, Azure, or GCP. Focus on scalability, security, and performance.",
    createdTime: new Date(),
  },
  {
    companyName: "Adobe",
    imageUrl: "https://i.pinimg.com/736x/56/3a/a2/563aa2189ef92dc242a7db5b91078804.jpg",
    jobTitle: "Frontend Developer",
    jobType: "Fulltime",
    salaryMin: 30,
    salaryMax: 55,
    deadline: new Date("2025-07-15T00:00:00.000Z"),
    experienceMin: 1,
    experienceMax: 3,
    location: "San Jose",
    description: "Build responsive and interactive user interfaces for our creative cloud applications. Strong proficiency in React and modern JavaScript.",
    createdTime: new Date(),
  },
  {
    companyName: "IBM",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
    jobTitle: "AI Ethics Researcher",
    jobType: "Contract",
    salaryMin: 32,
    salaryMax: 58,
    deadline: new Date("2025-08-10T00:00:00.000Z"),
    experienceMin: 5,
    experienceMax: 10,
    location: "Armonk",
    description: "Research and develop guidelines for ethical AI development and deployment. Focus on fairness, transparency, and accountability.",
    createdTime: new Date(),
  },
  {
    companyName: "Oracle",
    imageUrl: "https://images.seeklogo.com/logo-png/10/2/oracle-logo-png_seeklogo-103838.png",
    jobTitle: "Database Administrator",
    jobType: "Fulltime",
    salaryMin: 28,
    salaryMax: 50,
    deadline: new Date("2025-07-12T00:00:00.000Z"),
    experienceMin: 2,
    experienceMax: 5,
    location: "Redwood Shores",
    description: "Manage and optimize large-scale Oracle databases. Ensure data integrity, security, and performance.",
    createdTime: new Date(),
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected Successfully for seeding!");

 

    await Job.insertMany(dummyJobs);
    console.log("Dummy jobs inserted successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
    console.log("MongoDB connection closed.");
  }
}

seedDatabase();
