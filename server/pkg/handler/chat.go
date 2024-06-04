package handler

import (
	"bytes"
	"encoding/json"
	"net/http"
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

type ChatAPIRequest struct {
	Prompt string `json:"prompt"`
	Model  string `json:"model"`
	Stream bool   `json:"stream"`
}

func generateResponse(prompt string) (string, error) {
	url := "http://ollama:11434/api/generate"
	payload, err := json.Marshal(ChatAPIRequest{Prompt: prompt, Model: "llama3", Stream: false})
	if err != nil {
		return "res : ", err
	}

	resp, err := http.Post(url, "application/json", bytes.NewBuffer(payload))
	if err != nil {
		return "res : ", err
	}
	defer resp.Body.Close()

	var chatResp ChatResponse
    if err := json.NewDecoder(resp.Body).Decode(&chatResp); err != nil {
        return "res : ", err
    }

    return chatResp.Response, nil
}
