package org.jsp.UserProject.service;

import java.util.List;
import java.util.Optional;

import org.jsp.UserProject.dao.*;
import org.jsp.UserProject.dto.Product;
import org.jsp.UserProject.dto.ResponseStructure;
import org.jsp.UserProject.dto.User;
import org.jsp.UserProject.exception.IdNotFoundExpection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
	@Autowired
	private ProductDao dao;
	@Autowired
	private UserDao udao;
	
	public ResponseEntity<ResponseStructure<Product>> saveProduct(Product p,int user_id){
		Optional<User> recUser=udao.findById(user_id);
		ResponseStructure<Product> s=new ResponseStructure<>();
		if(recUser.isPresent()) {
			User u=recUser.get();
			u.getProducts().add(p);
			p.setUsers(u);
			udao.updateUser(u);
			dao.saveProduct(p);
			
			s.setData(p);
			s.setMessage("Product Added successfully");
			s.setStatusCode(HttpStatus.CREATED.value());		
			return new ResponseEntity<ResponseStructure<Product>>(s,HttpStatus.OK);
		}
		throw new IdNotFoundExpection();		
	}
	public ResponseEntity<ResponseStructure<Product>> updateProduct(Product p,int user_id){
		Optional<User> recUser=udao.findById(user_id);
		ResponseStructure<Product> s=new ResponseStructure<>();
		if(recUser.isPresent()) {
			User u=recUser.get();			
			p.setUsers(u);
			dao.saveProduct(p);			
			s.setData(p);
			s.setMessage("Product Updated successfully");
			s.setStatusCode(HttpStatus.CREATED.value());		
			return new ResponseEntity<ResponseStructure<Product>>(s,HttpStatus.OK);
		}
		throw new IdNotFoundExpection();		
	}
	public ResponseEntity<ResponseStructure<Product>> findById(int id){
		ResponseStructure<Product> s=new ResponseStructure<>();
		Optional<Product> recProd=dao.findById(id);
		if(recProd.isPresent()) {
			s.setData(recProd.get());
			s.setMessage("Product Found");
			s.setStatusCode(HttpStatus.OK.value());		
			return new ResponseEntity<ResponseStructure<Product>>(s,HttpStatus.OK);
		}
		throw new IdNotFoundExpection();
	}
	public ResponseEntity<ResponseStructure<String>> deleteProduct(int id){
		ResponseStructure<String> s=new ResponseStructure<>();
		Optional<Product> recProd=dao.findById(id);
		if(recProd.isPresent()) {
			s.setData("Item Deleted");
			s.setMessage("Product Found");
			s.setStatusCode(HttpStatus.OK.value());		
			return new ResponseEntity<ResponseStructure<String>>(s,HttpStatus.OK);
		}
		throw new IdNotFoundExpection();
	}
	public ResponseEntity<ResponseStructure<List<Product>>> findProductsByUserId(int id){
		ResponseStructure<List<Product>> s=new ResponseStructure<>();
		
			s.setData(dao.findProductsByUserId(id));
			s.setMessage("Product Found");
			s.setStatusCode(HttpStatus.OK.value());		
			return new ResponseEntity<ResponseStructure<List<Product>>>(s,HttpStatus.OK);
		
	}
}
























