#!/bin/bash
GREEN=`\033[0;32m`
BLUE=`\033[0;34m`
YELLOW=`\033[1;33m`
RED=`\033[0;31m`
VIOLET=`\033[0;35m`
NC=`\033[0m`


echo "###################################################" &&
echo -e "\n${YELLOW}Starting Ollama...${NC}\n" &&
docker-compose up -d &&
echo -e "\n"