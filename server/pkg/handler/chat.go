package handler

import (
    "encoding/json"
    "io/ioutil"
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
    url := "http://ollama:11434/generate"  // Updated to use the service name defined in docker-compose
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
    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        return "", err
    }
    var result map[string]string
    if err := json.Unmarshal(body, &result); err != nil {
        return "", err
    }
    return result["response"], nil
}
