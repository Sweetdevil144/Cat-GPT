package main

import (
    "log"
    "net/http"
    "github.com/gorilla/mux"
)

func main() {
    router := mux.NewRouter()
    // Creates a new router instance using gorilla/mux.

    router.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        w.Write([]byte("Hello from CatGPT Backend!"))
    })
    // Registers a new route with a path of "/" to an anonymous function.
    // This function writes "Hello from CatGPT Backend!" to the response.

    log.Fatal(http.ListenAndServe(":8080", router))
    // Starts an HTTP server on port 8080 and uses the router to handle requests.
    // log.Fatal will log the error returned by ListenAndServe and exit the program if it's non-nil.
}
