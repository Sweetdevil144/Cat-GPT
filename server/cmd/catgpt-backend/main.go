package main
import (
	"catgpt-backend/pkg/handler"
	"catgpt-backend/pkg/middleware"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"github.com/rs/cors"
	"log"
	"net/http"
	"os"
)
func main(){
	err := godotenv.Load(".env")
	if err != nil {
		log.Println(err)
		log.Fatal("Error loading .env file")
	}

	router := mux.NewRouter()
	router.Use(middleware.LoggingMiddleware)

	router.HandleFunc("/api", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Server is running!"))
		}).Methods("GET")

    router.HandleFunc("/chat", handler.ChatHandler).Methods("POST", "OPTIONS")

	corsOptions := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3001"},
		AllowedMethods:   []string{"GET", "POST", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type"},
	})
	handler :=corsOptions.Handler(router)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8081"
	}
	log.Printf("Starting server on port %s", port)
    if err := http.ListenAndServe(":"+port, handler); err != nil {
        log.Fatalf("Could not start server: %s\n", err)
    }
}