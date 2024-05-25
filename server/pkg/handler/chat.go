package handler

import (
    "encoding/json"
    "net/http"
    "os/exec"
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
    cmd := exec.Command("python", "llama3_infer.py", prompt)
    output, err := cmd.CombinedOutput()
    if err != nil {
        return "", err
    }
    return string(output), nil
}
