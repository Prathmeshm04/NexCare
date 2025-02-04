package com.example.SignUp.UserController;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.SignUp.Dto.LoginDTO;
import com.example.SignUp.Dto.NewPasswordDTO;
import com.example.SignUp.Dto.PasswordDTO;
import com.example.SignUp.Dto.UserDTO;
import com.example.SignUp.Service.UserService;
import com.example.SignUp.response.LoginResponse;
import com.example.SignUp.response.PasswordResponse;


@RestController
@CrossOrigin
@RequestMapping("api/v1/user")





public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping(path="/save")
	public String saveUser(@RequestBody UserDTO userDTO)
	{
		String id=userService.addUser(userDTO);
		return id;
		
	}
	
	@PostMapping(path="/login")
	public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO)
	{
		LoginResponse loginResponse=userService.loginUser(loginDTO);
		return ResponseEntity.ok(loginResponse);
	}
	
	@PutMapping(path="/forgot-password")
	public ResponseEntity<String> forgotPassword(@RequestParam String email)
	{
		return new ResponseEntity<>(userService.forgotPassword(email), HttpStatus.OK);

	}
	
	@PutMapping(path="/forgot_password")
	public ResponseEntity<?> forgotpassword2(@RequestBody PasswordDTO passwordDTO){
		
		 PasswordResponse passwordResponse= userService.forgotPassword2(passwordDTO);
			return ResponseEntity.ok(passwordResponse);
	 }
	
	
	
	
	@PutMapping(path="/set-password")
	public ResponseEntity<String> setPassword(@RequestParam String email,@RequestHeader String newPassword)
	{
		return new ResponseEntity<>(userService.setPassword(email,newPassword), HttpStatus.OK);

	}
	
	@PutMapping(path="/set_password")
	public ResponseEntity<?> setPassword2(@RequestBody NewPasswordDTO newpasswordDTO)
	{
		return new ResponseEntity<>(userService.setPassword2(newpasswordDTO),HttpStatus.OK);
	}
	

	

}
