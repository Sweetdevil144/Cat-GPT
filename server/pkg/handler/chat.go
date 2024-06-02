package handler

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
)

type ChatRequest struct {
	Prompt string `json:"prompt"`
}

type ChatResponse struct {
	Response string `json:"response"`
}

func ChatHandler(w http.ResponseWriter, r *http.Request) {
	var req ChatRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	response, err := generateResponse(req.Prompt)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	res := ChatResponse{Response: response}
	json.NewEncoder(w).Encode(res)
}

func generateResponse(prompt string) (string, error) {
	url := "http://ollama:11434/api/generate"
	payload := fmt.Sprintf(`{"prompt": "%s", "model": "llama3", "stream": false}`, prompt)
	resp, err := http.Post(url, "application/json", strings.NewReader(payload))
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	var result struct {
		Response string `json:"response"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		return "", err
	}
	return result.Response, nil
}
