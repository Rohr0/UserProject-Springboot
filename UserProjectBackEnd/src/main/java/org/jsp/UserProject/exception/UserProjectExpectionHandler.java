package org.jsp.UserProject.exception;

import org.jsp.UserProject.dto.ResponseStructure;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class UserProjectExpectionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(IdNotFoundExpection.class)
	public ResponseEntity<ResponseStructure<String>> handleINFE(IdNotFoundExpection exception){
		ResponseStructure<String> s=new ResponseStructure<>();
		s.setData("User Not Found");
		s.setMessage(exception.getMessage());
		s.setStatusCode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(s,HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(InvalidCredentialsException.class)
	public ResponseEntity<ResponseStructure<String>> handleICE(InvalidCredentialsException exception){
		ResponseStructure<String> s=new ResponseStructure<>();
		s.setData("User Not Found");
		s.setMessage(exception.getMessage());
		s.setStatusCode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(s,HttpStatus.NOT_FOUND);
	}
}
