package com.example.SignUp.MedicalHistory.Repo;
import com.example.SignUp.MedicalHistory.Entity.PatientMedicalHistory;
import com.example.SignUp.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatientMedicalHistoryRepository extends JpaRepository<PatientMedicalHistory, Long> {
    List<PatientMedicalHistory> findByUser(User user);
    
 // Method to check if any medical history exists for the user
    boolean existsByUser(User user);
}
