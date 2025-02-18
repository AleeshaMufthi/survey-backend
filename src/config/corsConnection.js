const corsConnection=()=>{

    console.log("LOCALE_URL:", process.env.LOCALE_URL); 
    return {
        origin: "*",
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
        credentials: true // Include cookies in CORS requests
    }
    
}

export default corsConnection
