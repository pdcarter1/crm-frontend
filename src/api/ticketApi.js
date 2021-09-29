import axios from "axios";

export const getAllTickets = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get(
                "http://localhost:3001/v1/ticket", {
                    headers: {
                        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkYW0uY2FydGVyQHRlc3QuY28ubnoiLCJpYXQiOjE2MzI4OTAxMDgsImV4cCI6MTYzMjk3NjUwOH0.JRiphTVyDSdQbt5IMszECJrsieMcsqnEp7mpvGTuXk",
                    },
                });
                resolve(result);        
        } catch (error) {
            reject(error);
        };

    });
    
};