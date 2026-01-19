package com.example.user_management_backend.auth;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        if ("admin@gmail.com".equals(request.getEmail())
                && "1234".equals(request.getPassword())) {

            return ResponseEntity.ok(
                    Map.of("message", "Login successful")
            );
        }

        return ResponseEntity
                .status(401)
                .body(Map.of("error", "Invalid credentials"));
    }
}
