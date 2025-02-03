package com.example.SignUp.response;

public class LoginResponse {
	
	String Message;
	Boolean Status;
	public LoginResponse(String message, Boolean status) {
		super();
		Message = message;
		Status = status;
	}
	public LoginResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getMessage() {
		return Message;
	}
	public void setMessage(String message) {
		Message = message;
	}
	public Boolean getStatus() {
		return Status;
	}
	public void setStatus(Boolean status) {
		Status = status;
	}
	@Override
	public String toString() {
		return "LoginResponse [Message=" + Message + ", Status=" + Status + "]";
	}
	

}
