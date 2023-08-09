import { Vehicle } from '../models/vehicle.js'

export const newVehicle = async (req, res) => {
    try {
        const { name, vehicleNumber, description, insurance, pollution, service, type } = req.body;

        await Vehicle.create({
            name,
            vehicleNumber,
            type,
            user: req.user,
            description,
            insurance,
            pollution,
            service
        })
        res.status(201).json({
            success: true,
            message: "New vehicle registered"
        })
    } catch (error) {
        if(error.code===11000){
            res.status(404).json({
                success:false,
                message:"The vehicle already exists"
            })
        }
        else{
            res.status(404).json({
                success: false,
                message: "Some error occured",
                error:error.message
            })
        }
    }
}

export const getAllVehicles=async (req,res)=>{
    try {
        const vehicles= await Vehicle.find({user:req.user});
    console.log(vehicles);
    res.status(200).json({
        success:true,
        message:"List of all vehicles registered",
        vehicles
    })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"some error occured"
        })
    }
}

export const deleteVehicle = async (req,res)=>{
    try {
        const vehicle=await Vehicle.findById(req.params.id);

        if(!vehicle){
            return res.status(404).json({
                success:false,
                message:"No vehicle found"
            })
        }

        vehicle.deleteOne();
        res.status(200).json({
            success:true,
            message:"Vehicle Deleted"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Some error occured"
        })
    }
}