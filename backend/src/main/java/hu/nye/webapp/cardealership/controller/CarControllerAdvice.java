package hu.nye.webapp.cardealership.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import hu.nye.webapp.cardealership.exception.CarNotFoundException;
import hu.nye.webapp.cardealership.exception.InvalidCarRequestException;
import hu.nye.webapp.cardealership.response.BadRequestError;

@RestControllerAdvice(assignableTypes = CarController.class)
public class CarControllerAdvice {
    @ExceptionHandler(value = InvalidCarRequestException.class)
    public ResponseEntity<BadRequestError> invalidRequestHandler(InvalidCarRequestException invalidCarRequestException) {
        BadRequestError badRequestError = new BadRequestError(invalidCarRequestException.getErrors());

        return ResponseEntity.badRequest()
            .body(badRequestError);
    }

    @ExceptionHandler(value = CarNotFoundException.class)
    public ResponseEntity<Void> carNotFoundHandler(CarNotFoundException invalidCarRequestException) {
        return ResponseEntity.notFound().build();
    }
}
