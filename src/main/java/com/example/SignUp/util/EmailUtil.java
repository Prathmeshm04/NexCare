package com.example.SignUp.util;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import com.example.SignUp.Dto.PasswordDTO;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Component
public class EmailUtil {

	  
	  private static JavaMailSender javaMailSender;
	  
	    public EmailUtil(JavaMailSender javaMailSender) {
	        this.javaMailSender = javaMailSender;
	    }
	  
	  public static void sendSetPasswordEmail(String email) throws MessagingException {
		    MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		    MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);
		    mimeMessageHelper.setTo(email);
		    mimeMessageHelper.setSubject("Set Password");
		    mimeMessageHelper.setText("""
		        <div>
		          <a href="http://localhost:8080/set-password?email=%s target="_blank">click link to set password</a>
		        </div>
		        """.formatted(email), true);

		    javaMailSender.send(mimeMessage);
		  }
	  
	  
	  
	  public static void sendSetPasswordEmail2(PasswordDTO passwordDTO) throws jakarta.mail.MessagingException {
			MimeMessage mimeMessage = javaMailSender.createMimeMessage();
			MimeMessageHelper mimeMessageHelper= new MimeMessageHelper(mimeMessage);
			mimeMessageHelper.setTo(passwordDTO.getEmail());
			mimeMessageHelper.setSubject("Set Password");
			String resetPasswordUrl = "http://localhost:4200/newpassword";
			mimeMessageHelper.setText("""
			<div>
            <a href="%s">Click to Reset Password</a>
			</div>
			""".formatted(resetPasswordUrl), true);

			javaMailSender.send(mimeMessage);
		}
}

