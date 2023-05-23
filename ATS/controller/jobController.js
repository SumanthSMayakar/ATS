const Jobs = require('../model/jobModel')

const JobController = {
    getAll : async (req,res)=>{
        try {
            let data = await Jobs.find()

            return res.status(200).json({ length : data.length , jobs : data })
            
        } catch (err) {
            return res.status(500).json({ msg : err.message})
        }
        // res.json({ msg : 'get all'})
    },
    getSingle: async (req,res) => {
        try {
           let data = await Jobs.findById({ _id: req.params.id })
                if(!data)
                    return res.status(404).json({ msg: "Job doesn't exists."})

                res.status(200).json({ jobs: data })
        } catch (err) {
            return  res.status(500).json({ msg: err.message })
        }
    },
    create : async (req,res)=>{
        try {
            const { jobid } = req.body
            let extJob = await Jobs.findOne({ jobid })
                if(extJob)
                    return res.status(400).json({ msg: "Job already exists."})

            let newJobs = await Jobs.create(req.body)

            res.json({ msg: "New Job Created Successfully", job: newJobs })

        } catch (err) {
            return  res.status(500).json({ msg: err.message })
        }
    },
    update : async (req,res)=>{
        try {  
            let data = await Jobs.findById({ _id: req.params.id })
                if(!data)
                    return res.status(404).json({ msg: "Job doesn't exists."})
                
            let updated = await Jobs.findByIdAndUpdate({ _id: req.params.id }, req.body)
                res.status(200).json({ msg: "Job updated successfully", job: updated })
            } catch (err) {
                return  res.status(500).json({ msg: err.message })
            }
    },
    delete : async (req,res)=>{
        try {
            let data = await Jobs.findById({ _id: req.params.id })
                if(!data)
                    return res.status(404).json({ msg: "job doesn't exists."})

                await Jobs.findByIdAndDelete({ _id: req.params.id })

                return res.status(200).json({ msg: "job deleted succcessfully"})
            
        } catch (err) {
            return  res.status(500).json({ msg: err.message })
        }
    },
    cancelJob : async (req,res)=>{
        try {
            let id = req.params.id 
            let { isActive } = req.body
            let extOrder = await Jobs.findById({ _id : id })
                if(!extOrder)
                    return res.status(404).json({ msg : 'No order is Exists'})
            await Jobs.findByIdAndUpdate({ _id : id}, { isActive })

            res.status(200).json({ msg : 'job Deactivated successfully '})
            
        } catch (err) {
            return res.status(500).json({ msg : res.message })
        }
    }


}

module.exports = JobController