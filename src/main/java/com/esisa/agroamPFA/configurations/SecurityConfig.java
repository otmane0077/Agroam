package com.esisa.agroamPFA.configurations;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.esisa.agroamPFA.service.CustomSuccessHandler;
import com.esisa.agroamPFA.service.CustomUserDetailsService;
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Autowired
    CustomSuccessHandler customSuccessHandler;
    
    @Autowired
    CustomUserDetailsService customUserDetailsService;
    
    @Bean
    public static PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.csrf(c -> c.disable())
            .authorizeHttpRequests(auth -> auth
                 .requestMatchers("/registration").hasAuthority("ADMIN") // Restrict access to admins
                .requestMatchers("/admin-page", "/registration").hasAuthority("ADMIN") // Restrict access to admins
                .requestMatchers("/user-page").hasAuthority("USER") // Restrict access to users
                .requestMatchers("/css/**", "/login", "/logout").permitAll() // Publicly accessible
                .anyRequest().authenticated()) // Require authentication for any other request
            .formLogin(form -> form
                .loginPage("/login")
                .loginProcessingUrl("/login")
                .successHandler(customSuccessHandler)
                .permitAll())
            .logout(logout -> logout
                .invalidateHttpSession(true)
                .clearAuthentication(true)
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                .logoutSuccessUrl("/login?logout")
                .permitAll());
        
        return http.build();
    }
    
    @Autowired
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder());
    }
}