package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.NotesRepository;

@RestController
@RequestMapping("/api")
public class NotesController {
	
	@Autowired
	NotesRepository nRepo;

}
