package com.example.demo.service;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Phone;
import com.example.demo.repository.PhoneRep;





@Service
public class PhoneService {

	@Autowired
	private PhoneRep phonerep;

	public Phone Post(Phone phone)
	{
		return phonerep.save(phone);
	}
	public List<Phone> getAll()
	{
		return phonerep.findAll();	
	}
	public Phone Update(Phone phone)
	{
		return phonerep.save(phone);
	}
	public void Delete(int rollno)
	{
		phonerep.deleteById(rollno);
	}
	public String validateUser(String username,String password)
	{
		
		Phone u=phonerep.findByUsername(username);
		if(u==null)
		{
			return "false";
		}
			else
			{
				if(u.getPassword().equals(password))
				{
					return "true";
				}
				else
				{
					return "false";
				}
			}
	}
	public boolean UpdatePassword(String password,String username)
	{
		Phone u=phonerep.findByUsername(username);
		if(u==null)
		{
			return false;
		}
		else
		{
		
		phonerep.update(password, username);
		return true;
		}
	}
	public boolean NewPassword(String password,String username,String old)
	{
		Phone u=phonerep.findByUsername(username);
		if(u==null)
		{
			return false;
		}
		else
		{
			if(u.getPassword().equals(old))
			{
				phonerep.update(password, username);
				return true;
			}
			else
			{
				return false;
			}
		
		
		}
	}
	public int Findid(String username)
	{
		Phone u=phonerep.findByUsername(username);
		if(u==null)
		{
			return 1000;
		}
		else
		{
			return u.getId();
		}
	}
	public boolean Check(String username,int id)
	{
		Phone u=phonerep.findByUsername(username);
		if(u==null)
		{
			return false;
		}
		else
		{
			if(u.getId()==id)
			{
				return true;
			}
			else
			{
				return false;
			}
		
		
		}
		
	}
	
	
}
