//package com.example.SignUp.MedicalHistory.Controller;
//import com.example.SignUp.MedicalHistory.Service.PatientMedicalHistoryService;
//import com.example.SignUp.MedicalHistory.Entity.PatientMedicalHistory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.security.Principal;
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/medical-history")
//@CrossOrigin(origins = "http://localhost:4200")
//
//
//public class PatientMedicalHistoryController {
//	 @Autowired
//	    private PatientMedicalHistoryService historyService;
//
//	    @PostMapping("/save")
//	    public PatientMedicalHistory saveMedicalHistory(@RequestBody PatientMedicalHistory history, Principal principal) {
//	    	  if (principal == null) {
//	    	        throw new RuntimeException("User not authenticated");
//	    	    }
//	    	String userEmail = principal.getName();  // Get logged-in user's email
//	        return historyService.saveMedicalHistory(history, userEmail);
//	    }
//
//	    @GetMapping("/get")
//	    public List<PatientMedicalHistory> getMedicalHistories(Principal principal) {
//	    	  if (principal == null) {
//	    	        throw new RuntimeException("User not authenticated");
//	    	    }
//	        String userEmail = principal.getName();
//	        return historyService.getMedicalHistoriesByUser(userEmail);
//	    }
//
//}
package com.example.SignUp.MedicalHistory.Controller;

import com.example.SignUp.Entity.User;
import com.example.SignUp.MedicalHistory.Dto.MedicalHistoryRequest;
import com.example.SignUp.MedicalHistory.Entity.PatientMedicalHistory;
import com.example.SignUp.MedicalHistory.Service.PatientMedicalHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200") 
@RestController
@RequestMapping("/api/medical-history")
public class PatientMedicalHistoryController {

    @Autowired
    private PatientMedicalHistoryService historyService;

    // Save medical history
    @PostMapping("/save")
    public PatientMedicalHistory saveMedicalHistory(@RequestBody MedicalHistoryRequest medicalHistoryRequest) {
        String userEmail = medicalHistoryRequest.getEmail();  // Get email from the request
        PatientMedicalHistory history = medicalHistoryRequest.getHistory();
        return historyService.saveMedicalHistory(history, userEmail);
    }

    // Get medical history by user email
    @GetMapping("/get")
    public List<PatientMedicalHistory> getMedicalHistory(@RequestParam String email) {
        return historyService.getMedicalHistoriesByUser(email);
    }
}
