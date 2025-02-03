package com.example.SignUp.response;

public class PasswordResponse {
	String message;
	boolean status;
	public PasswordResponse(String message, boolean status) {
		super();
		this.message = message;
		this.status = status;
	}
	public PasswordResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Boolean getStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "PasswordResponse [message=" + message + ", status=" + status + "]";
	}
	
}
