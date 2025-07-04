import Job from '../Models/JobModel';

export const createJob = async (req, res) => {
  try {
    const job = new Job(req.body); 
    const savedJob = await job.save(); 
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};