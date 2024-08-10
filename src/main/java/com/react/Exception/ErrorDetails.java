package com.react.Exception;

import java.time.LocalDateTime;

public class ErrorDetails {

	private String message;
	private String details;
	private LocalDateTime timeStamp;
	
	public ErrorDetails(String message, String details, LocalDateTime timeStamp) {
		super();
		this.message = message;
		this.details = details;
		this.timeStamp = timeStamp;
	}	
	
}
