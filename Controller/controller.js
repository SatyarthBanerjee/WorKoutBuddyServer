const WorkoutData= require("../Model/model")
const getAllproduct = async(req,res)=>{
    try{
        const products =  await WorkoutData.find();
        res.status(200).json(products)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
    
    
}
const postData = async(req, res)=>{
    const {name,load,reps} = req.body;
    try{
        const newData = new WorkoutData({
            name,
            load,
            reps
        })
        console.log(name,load);
        
       await newData.save();
       res.status(200).json({message:"Data saved successfully"})
    }
    catch(err){
        res.status(400).json({message:"There was an error", error:err.message})
        console.log(err);
        
    }

}
const deleteData = async(req, res)=>{
    const {id} = req.body;
    console.log(id);
    
    try{
        const data = await WorkoutData.findByIdAndDelete(id);
        res.status(200).json(data)
    }
    catch(err){
        res.status(400).json({message:err.message})
        console.log(err);
        
    }
    
}
const updateData = async (req, res) => {
    const { id } = req.params; // Extract workout ID from the route params
    const { load, reps } = req.body; // Extract the updated load and reps from the request body
  
    try {
      // Find the workout by ID and update it with new data
      const updatedWorkout = await WorkoutData.findByIdAndUpdate(
        id, 
        { load, reps }, 
        { new: true } // Return the updated document
      );
  
      if (!updatedWorkout) {
        return res.status(404).json({ message: 'Workout not found' });
      }
  
      res.status(200).json({ message: 'Workout updated successfully', updatedWorkout });
    } catch (err) {
      res.status(400).json({ message: 'Error updating workout', error: err.message });
    }
  };
module.exports ={
    getAllproduct,
    postData,
    deleteData,
    updateData
}