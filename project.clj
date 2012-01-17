(defproject closeout-demo "0.1.0-SNAPSHOT"
  :description "Closeout demo app on Noir"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [noir "1.2.2"]
                                  
                 [hiccup "0.3.6"]
                 [org.clojars.wilkes/gaka "0.2.2"] ; for 1.3 compat
                 
                 [dsann/dsann-clj-utils "0.1.0"]
                 ]
  :dev-dependencies [[lein-eclipse "1.0.0"]]
  :main closeout-demo.server)

