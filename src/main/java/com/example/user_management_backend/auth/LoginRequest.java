package com.example.user_management_backend.auth;

public class LoginRequest {

    private String email;
    private String password;

    // MUST default constructor
    public LoginRequest() {
    }

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
}
