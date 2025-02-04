package com.example.SignUp.MedicalHistory.Dto;
import com.example.SignUp.MedicalHistory.Entity.PatientMedicalHistory;

public class MedicalHistoryRequest {
	private String email;
    private PatientMedicalHistory history;

    // Getters and Setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public PatientMedicalHistory getHistory() {
        return history;
    }

    public void setHistory(PatientMedicalHistory history) {
        this.history = history;
    }

}
