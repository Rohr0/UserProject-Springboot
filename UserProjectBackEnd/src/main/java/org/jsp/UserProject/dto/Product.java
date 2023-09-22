package org.jsp.UserProject.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Product {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
 private int id;
 private String item,brand,category,description;
 private double cost;
 private String image_url;
 @ManyToOne 
 @JoinColumn(name="user_id")
 @JsonIgnore
 private User users;
}
