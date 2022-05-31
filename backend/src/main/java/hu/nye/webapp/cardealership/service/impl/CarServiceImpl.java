package hu.nye.webapp.cardealership.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import hu.nye.webapp.cardealership.dto.CarDTO;
import hu.nye.webapp.cardealership.entity.Car;
import hu.nye.webapp.cardealership.exception.CarNotFoundException;
import hu.nye.webapp.cardealership.repository.CarRepository;
import hu.nye.webapp.cardealership.service.CarService;

@Service
public class CarServiceImpl implements CarService {

    private final CarRepository carRepository;
    private final ModelMapper modelMapper;

    public CarServiceImpl(CarRepository carRepository, ModelMapper modelMapper) {
        this.carRepository = carRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<CarDTO> findAll() {
        return carRepository.findAll()
                .stream()
                .map(car -> modelMapper.map(car, CarDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public Optional<CarDTO> findById(String rendszam) {
        return carRepository.findById(rendszam)
                .map(m -> modelMapper.map(m, CarDTO.class));
    }

    @Override
    public CarDTO create(CarDTO carDTO) {
        carDTO.setRendszam(carDTO.getRendszam());

        Car carToSave = modelMapper.map(carDTO, Car.class);
        Car savedCar = carRepository.save(carToSave);

        return modelMapper.map(savedCar, CarDTO.class);
    }

    @Override
    public CarDTO update(CarDTO carDTO) {
        String rendszam = carDTO.getRendszam();
        Optional<Car> carToUpdate = carRepository.findById(rendszam);

        if (carToUpdate.isEmpty()) {
            throw new CarNotFoundException("Car not found with this rendszam=" + rendszam);
        }

        Car carToPersist = modelMapper.map(carDTO, Car.class);
        Car savedCar = carRepository.save(carToPersist);

        return modelMapper.map(savedCar, CarDTO.class);
    }

    @Override
    public void delete(String rendszam) {
        Optional<Car> carToDelete = carRepository.findById(rendszam);

        if (carToDelete.isPresent()) {
            carRepository.delete(carToDelete.get());
        } else {
            throw new CarNotFoundException("Car not found with this rendszam=" + rendszam);
        }
    }

}
