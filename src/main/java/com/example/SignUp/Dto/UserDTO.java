package com.example.SignUp.Dto;


public class UserDTO {
	
	private int userid;
	
	private String username;
	
	private String email;
	
	private String password;
	
	private String dob;

	public UserDTO(int userid, String username, String email, String password, String dob) {
		super();
		this.userid = userid;
		this.username = username;
		this.email = email;
		this.password = password;
		this.dob = dob;
	}

	public UserDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	@Override
	public String toString() {
		return "UserDTO [userid=" + userid + ", username=" + username + ", email=" + email + ", password=" + password
				+ ", dob=" + dob + "]";
	}

	
}
