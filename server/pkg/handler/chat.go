package handler

import (
    "encoding/json"
    "io"
    "net/http"
    "bytes"
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
    url := "http://localhost:11434/api/generate"
    payload := map[string]string{"prompt": prompt}
    payloadBytes, err := json.Marshal(payload)
    if err != nil {
        return "", err
    }
    resp, err := http.Post(url, "application/json", bytes.NewBuffer(payloadBytes))
    if err != nil {
        return "", err
    }
    defer resp.Body.Close()
    body, err := io.ReadAll(resp.Body)
    if err != nil {
        return "", err
    }
    var result map[string]string
    if err := json.Unmarshal(body, &result); err != nil {
        return "", err
    }
    return result["response"], nil
}
