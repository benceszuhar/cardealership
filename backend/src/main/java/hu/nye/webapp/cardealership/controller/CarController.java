package hu.nye.webapp.cardealership.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import hu.nye.webapp.cardealership.dto.CarDTO;
import hu.nye.webapp.cardealership.exception.InvalidCarRequestException;
import hu.nye.webapp.cardealership.service.CarService;

@RestController
@RequestMapping(path = "/cars")
public class CarController {
    
    private final CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<CarDTO>> findAll() {
        List<CarDTO> cars = carService.findAll();

        return ResponseEntity.ok().body(cars);
    }

    @RequestMapping(path = "/{rendszam}", method = RequestMethod.GET)
    public ResponseEntity<CarDTO> findById(@PathVariable String rendszam) {
        Optional<CarDTO> car = carService.findById(rendszam);

        return car.map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<CarDTO> create(@Valid @RequestBody CarDTO carDTO, BindingResult bindingResult) {
        checkForRequestErrors(bindingResult);

        CarDTO savedCar = carService.create(carDTO);

        return ResponseEntity.status(HttpStatus.CREATED)
            .body(savedCar);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<CarDTO> update(@Valid @RequestBody CarDTO carDTO, BindingResult bindingResult) {
        checkForRequestErrors(bindingResult);

        CarDTO updatedCar = carService.update(carDTO);

        return ResponseEntity.ok()
            .body(updatedCar);
    }

    @RequestMapping(path = "/{rendszam}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> delete(@PathVariable String rendszam) {
        carService.delete(rendszam);

        return ResponseEntity.noContent().build();
    }

    private void checkForRequestErrors(BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            List<String> messages = bindingResult.getFieldErrors()
                .stream()
                .map(this::fieldErrorToMessage)
                .collect(Collectors.toList());

            throw new InvalidCarRequestException("Invalid car request", messages);
        }
    }

    private String fieldErrorToMessage(FieldError fieldError) {
        return fieldError.getField() + " - " + fieldError.getDefaultMessage();
    }


}
