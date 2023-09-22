package org.jsp.UserProject.controller;

import java.util.List;

import org.jsp.UserProject.dto.Product;
import org.jsp.UserProject.dto.ResponseStructure;
import org.jsp.UserProject.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class ProductController {
	@Autowired
	private ProductService service;
	
	@PostMapping("/products/{user_id}")
	public ResponseEntity<ResponseStructure<Product>> saveProduct(@RequestBody Product p,@PathVariable int user_id){
		return service.saveProduct(p, user_id);
	}
	@PutMapping("/products/{user_id}")
	public ResponseEntity<ResponseStructure<Product>> updateProduct(@RequestBody Product p,@PathVariable int user_id){
		return service.updateProduct(p, user_id);
	}
	@GetMapping("/products/{id}")
	public ResponseEntity<ResponseStructure<Product>> findById(int id){
		return service.findById(id);
			}
	@DeleteMapping("/products/{id}")
	public ResponseEntity<ResponseStructure<String>> deleteProduct(int id)
	{
		return service.deleteProduct(id);
	}
	@GetMapping("/products/byuser-id/{id}")
	public ResponseEntity<ResponseStructure<List<Product>>> findProductsByUserId(@PathVariable int id)
	{
		return service.findProductsByUserId(id);
	}
}
