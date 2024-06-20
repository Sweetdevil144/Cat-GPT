FROM ollama/ollama

# Copy the start.sh script into the container
COPY start.sh /start.sh

# Ensure the script has execution permissions
RUN chmod +x /start.sh

# Command to run the start.sh script
CMD ["/bin/bash", "/start.sh"]
