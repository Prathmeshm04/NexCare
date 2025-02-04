package com.example.SignUp.MedicalHistory.Entity;
import jakarta.persistence.*;
import com.example.SignUp.Entity.User;

@Entity
@Table(name = "medical_history")
public class PatientMedicalHistory {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "history_id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "age")
    private Integer age;

    @Column(name = "sex")
    private String sex;

    @Column(name = "mobile_no")
    private String mobileNo;

    @Column(name = "address")
    private String address;
    
    @Column(name = "email")
    private String email;

    @Column(name = "disease_1")
    private String disease1;

    @Column(name = "medicine_1")
    private String medicine1;

    @Column(name = "disease_2")
    private String disease2;

    @Column(name = "medicine_2")
    private String medicine2;
    
    @Column(name = "disease_3")
    private String disease3;

    @Column(name = "medicine_3")
    private String medicine3;
    
    @Column(name = "disease_4")
    private String disease4;

    @Column(name = "medicine_4")
    private String medicine4;
    
    @Column(name = "disease_5")
    private String disease5;

    @Column(name = "medicine_5")
    private String medicine5;

    @Column(name = "medicine_allergic")
    private String medicineAllergicTo;

    @Column(name = "menstruation_cycle_regular")
    private Boolean menstruationCycleRegular;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

	public PatientMedicalHistory(Long id, String name, Integer age, String sex, String mobileNo, String address,
			String email, String disease1, String medicine1, String disease2, String medicine2, String disease3,
			String medicine3, String disease4, String medicine4, String disease5, String medicine5,
			String medicineAllergicTo, Boolean menstruationCycleRegular, User user) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.sex = sex;
		this.mobileNo = mobileNo;
		this.address = address;
		this.email = email;
		this.disease1 = disease1;
		this.medicine1 = medicine1;
		this.disease2 = disease2;
		this.medicine2 = medicine2;
		this.disease3 = disease3;
		this.medicine3 = medicine3;
		this.disease4 = disease4;
		this.medicine4 = medicine4;
		this.disease5 = disease5;
		this.medicine5 = medicine5;
		this.medicineAllergicTo = medicineAllergicTo;
		this.menstruationCycleRegular = menstruationCycleRegular;
		this.user = user;
	}

	public PatientMedicalHistory() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDisease1() {
		return disease1;
	}

	public void setDisease1(String disease1) {
		this.disease1 = disease1;
	}

	public String getMedicine1() {
		return medicine1;
	}

	public void setMedicine1(String medicine1) {
		this.medicine1 = medicine1;
	}

	public String getDisease2() {
		return disease2;
	}

	public void setDisease2(String disease2) {
		this.disease2 = disease2;
	}

	public String getMedicine2() {
		return medicine2;
	}

	public void setMedicine2(String medicine2) {
		this.medicine2 = medicine2;
	}

	public String getDisease3() {
		return disease3;
	}

	public void setDisease3(String disease3) {
		this.disease3 = disease3;
	}

	public String getMedicine3() {
		return medicine3;
	}

	public void setMedicine3(String medicine3) {
		this.medicine3 = medicine3;
	}

	public String getDisease4() {
		return disease4;
	}

	public void setDisease4(String disease4) {
		this.disease4 = disease4;
	}

	public String getMedicine4() {
		return medicine4;
	}

	public void setMedicine4(String medicine4) {
		this.medicine4 = medicine4;
	}

	public String getDisease5() {
		return disease5;
	}

	public void setDisease5(String disease5) {
		this.disease5 = disease5;
	}

	public String getMedicine5() {
		return medicine5;
	}

	public void setMedicine5(String medicine5) {
		this.medicine5 = medicine5;
	}

	public String getMedicineAllergicTo() {
		return medicineAllergicTo;
	}

	public void setMedicineAllergicTo(String medicineAllergicTo) {
		this.medicineAllergicTo = medicineAllergicTo;
	}

	public Boolean getMenstruationCycleRegular() {
		return menstruationCycleRegular;
	}

	public void setMenstruationCycleRegular(Boolean menstruationCycleRegular) {
		this.menstruationCycleRegular = menstruationCycleRegular;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	
    
    
}
