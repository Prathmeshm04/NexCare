package com.example.SignUp.Dto;

public class PasswordDTO {
	private String email;

	public PasswordDTO(String email) {
		super();
		this.email = email;
	}

	public PasswordDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "PasswordDTO [email=" + email + "]";
	}
	

}
