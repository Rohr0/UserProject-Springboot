package org.jsp.UserProject.dao;

import java.util.List;
import java.util.Optional;

import org.jsp.UserProject.dto.Product;
import org.jsp.UserProject.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ProductDao {
	@Autowired
	private ProductRepository repo;
	
	public Product saveProduct(Product p) {
		return repo.save(p);
	}
	public Product updateProduct(Product p) {
		return repo.save(p);
	}
	public Optional<Product> findById(int id){
		return repo.findById(id);
	}
	public boolean deleteProduct(int id) {
		Optional<Product> recProduct=repo.findById(id);
		if(recProduct.isPresent()) {
			repo.delete(recProduct.get());
			return true;
		}
		return false;
	}
	public List<Product> findProductsByUserId(int user_id)
	{
		return repo.findProductsByUserId(user_id);
	}

}
