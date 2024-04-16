package com.esisa.agroamPFA.dto;

public class UserDto {
    
    private String email;
    private String password;
    private String role="USER";
    private String fullname;
    
    // Constructors
    public UserDto(String email, String password, String role, String fullname) {
        super();
        this.email = email;
        this.password = password;
        this.role = role;
        this.fullname = fullname;
    }

    // Getters and Setters
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }
    
}
