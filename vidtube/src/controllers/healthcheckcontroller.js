import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
   
// do not use this approach we already have asynchandlerjs file to do this furthe rnow 

    // const healthCheck=async(req, res)=>{
    //     try {
    //        res.status(200).json
    //     }
    //     catch(error ){

    //     }
    // }


    
    const healthCheck = asyncHandler(async (req, res) => {  // ✅ Pass req, res
        return res.status(200).json(
            new apiResponse(200, { status: "ok" }, "Health check successful")
        );
    });
    
    export { healthCheck };
    