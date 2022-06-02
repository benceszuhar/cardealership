package hu.nye.webapp.cardealership.service;

import java.util.List;
import java.util.Optional;

import hu.nye.webapp.cardealership.dto.CarDTO;

public interface CarService {
    
    List<CarDTO> findAll();

    Optional<CarDTO> findById(Long Id);

    CarDTO create(CarDTO carDTO);

    CarDTO update(CarDTO carDTO);

    void delete(Long Id);
}
