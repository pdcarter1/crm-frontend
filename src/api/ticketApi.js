import axios from "axios";

export const getAllTickets = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get(
                "http://localhost:3001/v1/ticket", {
                    headers: {
                        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkYW0uY2FydGVyQHRlc3QuY28ubnoiLCJpYXQiOjE2MzM5OTcxNDAsImV4cCI6MTYzNDA4MzU0MH0.oGU0x3rXpzAIp8NzZCViXGifbRxYBnA9r48jxkxVUEY",
                    },
                });
                resolve(result);        
        } catch (error) {
            reject(error);
        };

    });
    
};