class apiResponse {
    constructor(statusCode, data = null, message = "Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode >= 200 && statusCode < 300;  // Automatically set success based on status
    }
}

export { apiResponse };
