export default class ErrorMessage {
  static getErrorMessage(response: any) {
    let errorMessage;
    switch (response.status) {
      case 400:
        errorMessage = response.data.message;
        break;
      case 409:
        errorMessage = response.data.message;
        break;
      case 500:
        errorMessage = "Server error. Try again later";
        break;
      case 201:
        errorMessage = "You are not authenticated";
        break;
      case 401:
        errorMessage = response.data.message;
        break;
      default:
        errorMessage =
          "Something unplanned has happen. We will figure it out soon";
        break;
    }
    return errorMessage;
  }
}
