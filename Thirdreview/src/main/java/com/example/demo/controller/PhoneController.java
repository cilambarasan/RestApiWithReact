package com.example.demo.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Phone;
import com.example.demo.service.PhoneService;
@CrossOrigin
@RestController
public class PhoneController {
	@Autowired
	private PhoneService phoneservice;
	
	@PostMapping("/add")
	public boolean add(@RequestBody Phone student)
	{
		phoneservice.Post(student);
		return true;
	}
	@PutMapping("/update")
	public String update(@RequestBody Phone student)
	{
		phoneservice.Update(student);
		return "Successfully Updated";
	}
	@GetMapping("/get")
	public List<Phone> getAll()
	{
		return phoneservice.getAll();
	}
	@DeleteMapping("/delete/{rollno}")
	public void Delete(@PathVariable int rollno)
	{
		phoneservice.Delete(rollno);
	}
	@GetMapping("/validate/{username}/{password}")
	public String Validate(@PathVariable String username , @PathVariable String password)
	{
		 return phoneservice.validateUser(username, password);
	}
	@PutMapping("/upd/{password}/{username}")
	public boolean Updatepass(@PathVariable String password , @PathVariable String username)
	{
		return phoneservice.UpdatePassword(password, username);
	}
	@PutMapping("/upd/{password}/{username}/{old}")
	public boolean Updatepass(@PathVariable String password , @PathVariable String username, @PathVariable String old)
	{
		return phoneservice.NewPassword(password, username,old);
	}
	@GetMapping("/id/{username}")
	public int findId(@PathVariable String username)
	{
		return phoneservice.Findid(username);
	}
	@GetMapping("/check/{username}/{id}")
	public boolean Check(@PathVariable String username,@PathVariable int id)
	{
		return phoneservice.Check(username, id);
	}
	



}
