(ns closeout-demo.server
  (:require [noir.server :as server]))

(server/load-views "src/closeout_demo/views/")

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "1234"))]
    (server/start port {:mode mode
                        :ns 'closeout-demo})))

