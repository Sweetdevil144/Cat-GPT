package middleware

import (
	"log"
	"net/http"
	"time"
)

func LoggingMiddleware(next http.Handler) http.Handler {
	allowedHeaders := "Accept, Content-Type, Content-Length, Accept-Encoding, Authorization,X-CSRF-Token"

	return http.HandlerFunc(func(responseWriter http.ResponseWriter, response *http.Request) {
		if origin := response.Header.Get("Origin"); origin != "" {
			responseWriter.Header().Set("Access-Control-Allow-Origin", "*")
			responseWriter.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
			responseWriter.Header().Set("Access-Control-Allow-Headers", allowedHeaders)
			responseWriter.Header().Set("Access-Control-Expose-Headers", "Authorization")
		}
		start := time.Now()
		next.ServeHTTP(responseWriter, response)
		log.Printf("method=%s path=%s duration=%s", response.Method, response.URL.Path, time.Since(start))
	})
}
