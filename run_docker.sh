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


echo -e "${GREEN}🏃 Start Chatting...${NC}"