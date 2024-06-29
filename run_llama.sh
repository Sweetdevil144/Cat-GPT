#!/bin/bash
GREEN="\033[0;32m"
BLUE="\033[0;34m"
YELLOW="\033[1;33m"
RED="\033[0;31m"
VIOLET="\033[0;35m"
NC="\033[0m"

echo -e "\n${YELLOW}🚀 Starting Docker Compose services...${NC}"
docker compose up -d
echo -e "\n"

echo -e "${BLUE}⏳ Waiting for services to start...${NC}"
for i in {3..1}; do
    echo -e "${BLUE}$i...${NC}"
    sleep 1
done
echo -e "\n"

echo -e "${GREEN}🏃 Start Chatting...${NC}"
container_name=$(docker ps --format '{{.Names}}' | grep 'ollama')
docker exec -it $container_name ollama run llama2