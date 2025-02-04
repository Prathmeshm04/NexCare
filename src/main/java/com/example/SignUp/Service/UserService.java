package com.example.SignUp.Service;



import com.example.SignUp.Dto.LoginDTO;
import com.example.SignUp.Dto.NewPasswordDTO;
import com.example.SignUp.Dto.PasswordDTO;
import com.example.SignUp.Dto.UserDTO;
import com.example.SignUp.response.LoginResponse;
import com.example.SignUp.response.PasswordResponse;


public interface UserService {

	String addUser(UserDTO userDTO);
	
	LoginResponse loginUser(LoginDTO loginDTO);
	
	String forgotPassword(String email);
	
	String setPassword(String email,String newPassword);

	PasswordResponse forgotPassword2(PasswordDTO passwordDTO);
	
	PasswordResponse setPassword2(NewPasswordDTO newpasswordDTO);
	
	

	

}
