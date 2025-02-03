package com.example.SignUp.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import com.example.SignUp.Dto.NewPasswordDTO;
import com.example.SignUp.Dto.PasswordDTO;
import com.example.SignUp.Dto.UserDTO;
import com.example.SignUp.Entity.User;
import com.example.SignUp.Repo.UserRepo;
import com.example.SignUp.response.LoginResponse;
import com.example.SignUp.response.PasswordResponse;
import com.example.SignUp.util.EmailUtil;

import jakarta.mail.MessagingException;

@Service


public class UserIMPL implements UserService{
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public String addUser(UserDTO userDTO) {
		// TODO Auto-generated method stub
		User user=new User(
				
				userDTO.getUserid(),
				userDTO.getUsername(),
				userDTO.getEmail(),
				this.passwordEncoder.encode(userDTO.getPassword()),
				userDTO.getDob()
								
				);
		userRepo.save(user);
		return user.getUsername();
		}

	@Override
	public LoginResponse loginUser(com.example.SignUp.Dto.LoginDTO loginDTO) {
		// TODO Auto-generated method stub
	     String msg = "";
	        User user1 = userRepo.findByEmail(loginDTO.getEmail());
	        if (user1 != null) {
	            String password = loginDTO.getPassword();
	            String encodedPassword = user1.getPassword();
	            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
	            if (isPwdRight) {
	                Optional<User> employee = userRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
	                if (employee.isPresent()) {
	                    return new LoginResponse("Login Success", true);
	                } else {
	                    return new LoginResponse("Login Failed", false);
	                }
	            } else {
	                return new LoginResponse("password Not Match", false);
	            }
	        }else {
	            return new LoginResponse("Email not exists", false);
	        
		}

	}

	@Override
	public String forgotPassword(String email) {
		// TODO Auto-generated method stub
	    User user = userRepo.findByEmail(email);
	    try {
			EmailUtil.sendSetPasswordEmail(email);
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException("unable to send set password email please try again");
		}
		
		return "Please check your email to set new password";
	}

	@Override
	public String setPassword(String email, String newPassword) {
		// TODO Auto-generated method stub
		 User user = userRepo.findByEmail(email);
		 user.setPassword(passwordEncoder.encode(newPassword));
		 userRepo.save(user);
		return "New Password set successfully login with new password";
	}
	

	@Override
	public PasswordResponse setPassword2(NewPasswordDTO newpasswordDTO) {
		// TODO Auto-generated method stub
		User user = userRepo.findByEmail(newpasswordDTO.getEmail());
		 user.setPassword(passwordEncoder.encode(newpasswordDTO.getNewPassword()));
		 userRepo.save(user);
		return new PasswordResponse("Password Reset", true);
		
	}


	@Override
	public PasswordResponse forgotPassword2(PasswordDTO passwordDTO) {
		// TODO Auto-generated method stub
		User user= userRepo.findByEmail(passwordDTO.getEmail());
		if(user!= null) {
			try {
				EmailUtil.sendSetPasswordEmail2(passwordDTO);
			} catch (jakarta.mail.MessagingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return new PasswordResponse("Unable to send email", false);
			}
			
			
			return new PasswordResponse("Email sent", true);
			
		}
		
		else {
			return new PasswordResponse ("Email not Exist", false);
		}
	}

	




	


}
	










