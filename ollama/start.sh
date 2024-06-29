#!/bin/bash

echo "Starting ollama service..." &&
ollama serve &

# Wait for a few seconds to ensure the ollama service has started
sleep 5

echo "Pulling llama3 model..." &&
ollama pull llama3 &&

echo "---------------------------------------------------" &&

echo "Services Pull/Installed are as follow" &&
ollama list &&

echo "---------------------------------------------------" &&

echo "Starting llama3 model..." &&
ollama run llama3 &&

echo "llama3 Image Started..." &&

echo "---------------------------------------------------" &&

# Keep the script running
tail -f /dev/null
