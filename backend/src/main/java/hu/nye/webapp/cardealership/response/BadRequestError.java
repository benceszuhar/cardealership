package hu.nye.webapp.cardealership.response;

import java.util.List;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

public class BadRequestError {
    private List<String> messages;

    public BadRequestError(List<String> messages) {
        this.messages = messages;
    }

    public List<String> getMessages() {
        return messages;
    }

    public void setMessages(List<String> messages) {
        this.messages = messages;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }

        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        BadRequestError that = (BadRequestError) o;

        return new EqualsBuilder().append(messages, that.messages).isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37).append(messages).toHashCode();
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
            .append("messages", messages)
            .toString();
    }
}
