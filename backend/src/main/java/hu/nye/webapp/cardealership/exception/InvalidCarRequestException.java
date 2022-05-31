package hu.nye.webapp.cardealership.exception;

import java.util.List;

public class InvalidCarRequestException extends RuntimeException {
    private final List<String> errors;

    public InvalidCarRequestException(String message, List<String> errors) {
        super(message);
        this.errors = errors;
    }

    public List<String> getErrors() {
        return errors;
    }
}
