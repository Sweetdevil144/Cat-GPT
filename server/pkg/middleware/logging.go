package middleware

import (
	"log"
	"net/http"
	"time"
)

func LoggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(responseWriter http.ResponseWriter, response *http.Request) {
		start := time.Now()
		next.ServeHTTP(responseWriter, response)
		log.Printf("method=%s path=%s duration=%s", response.Method, response.URL.Path, time.Since(start))
	})
}
