package hu.nye.webapp.cardealership.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import hu.nye.webapp.cardealership.entity.Car;

public interface CarRepository extends JpaRepository<Car, String> {
    
}
