package com.example.SignUp.MedicalHistory.Service;
import com.example.SignUp.MedicalHistory.Entity.PatientMedicalHistory;
import com.example.SignUp.MedicalHistory.Repo.PatientMedicalHistoryRepository;
import com.example.SignUp.Repo.UserRepo;
import com.example.SignUp.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientMedicalHistoryService {
		
	@Autowired
    private PatientMedicalHistoryRepository historyRepository;

    @Autowired
    private UserRepo userRepository;

    public PatientMedicalHistory saveMedicalHistory(PatientMedicalHistory history, String userEmail) {
        User user = userRepository.findByEmail(userEmail);
        if (user == null) {
            throw new RuntimeException("User not found with email: " + userEmail);
        }
        history.setUser(user);
        return historyRepository.save(history);
    }

    public List<PatientMedicalHistory> getMedicalHistoriesByUser(String userEmail) {
        User user = userRepository.findByEmail(userEmail);
        if (user == null) {
            throw new RuntimeException("User not found with email: " + userEmail);
        }
        return historyRepository.findByUser(user);
    }
    
 // Method to check if medical history exists for the given email
    public boolean checkMedicalHistoryExists(String userEmail) {
        User user = userRepository.findByEmail(userEmail);
        if (user == null) {
            throw new RuntimeException("User not found with email: " + userEmail);
        }
        // Check if any medical history exists for the user
        return historyRepository.existsByUser(user);
    }
}
