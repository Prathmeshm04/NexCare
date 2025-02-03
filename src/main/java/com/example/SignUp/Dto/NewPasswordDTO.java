package com.example.SignUp.Dto;

public class NewPasswordDTO {
	String email;
	String newPassword;
	public NewPasswordDTO(String email, String newPassword) {
		super();
		this.email = email;
		this.newPassword = newPassword;
	}
	public NewPasswordDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	@Override
	public String toString() {
		return "NewPasswordDTO [email=" + email + ", newPassword=" + newPassword + "]";
	}
	
}
