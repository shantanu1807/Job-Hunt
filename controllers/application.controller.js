 import { application } from "express";
import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

 export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;

    if (!jobId) {
      return res.status(400).json({
        message: "Job ID is required",
        success: false,
      });
    }
    

    // check if the user has already applied for job
         const existingApplication = await Application.findOne({job:jobId, application:userId});
         if(existingApplication){
         return res.status(400).json({
            message: "You have already applied for this job",,
            success:false
          })
    }

    // Check if the jobs exists

    const job = await Job.findById(jobId);
    if(!job){
        return res.status(404).json({
            message:"job not found",
            success:false
        })
    }
    // create a new application
    const newApplication = await Application.create({
         job:jobId,
         application:userId,
    });
    // send a success response
    job.application.push(newApplication._id);
    await job.save();
    return res.status(200).json({
        message: "Application submitted successfully",
        success:true
    })
   } catch(error){
    console.log(error);
     }
  };

  // get applied jobs

  export const getAppliedJobs = async(req,res)=>{
    try{
        const userId = req.id;
        const appliedJobs = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:'job',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'company',
                options:{sort:{createdAt:-1}},
            }
        });
     if(!application){
        return res.status(404).json({
            message:"No Application",
            success:false
            })
    };
    return res.status(200).json({
        application,
        success:true
    })
  } catch(error){
    console.log(error);
  }
}