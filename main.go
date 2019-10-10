package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	defaultport := "8810"
	sport, pexist := os.LookupEnv("PORT")
	if !pexist {
		sport = defaultport
	}

	http.HandleFunc("/", rootRequest)
	http.HandleFunc("/brettski", brettskiRequest)

	log.Println("server starting on port", sport)
	log.Fatal(http.ListenAndServe(":"+sport, nil))
}

func rootRequest(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		log.Println("Non-GET request to /. r: ", r.Method)
		w.WriteHeader(404)
		fmt.Fprint(w, "Wasn't expecting that")
		return
	}
	if len(r.URL.String()) > 1 {
		w.WriteHeader(404)
		return
	}
	fmt.Fprint(w, "Successful")
}

func brettskiRequest(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		log.Println("Non-GET request to /brettski. r: ", r.Method)
		w.WriteHeader(404)
		fmt.Fprint(w, "Wasn't expecting that")
	}
	fmt.Fprint(w, "Hi Brettski")
}
