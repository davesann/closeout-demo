(ns closeout-demo.views.css.utils
  (:require 
    [gaka.core :as gaka]
    ))

(defn border-radius [x]
  (list
    :border-radius x
    :-webkit-border-radius x
    :-moz-border-radius x))

(defn flexbox [align]
  (list
    :display            "-webkit-box"
    :-webkit-box-orient align
    
    :display         "-moz-box"
    :-moz-box-orient align

    :display    "box"
    :box-orient align
    ))

(defn boxpack [align]
  (list
    :box-pack align
    :-moz-box-pack align
    :-webkit-box-pack align
    ))

(def hbox (flexbox "horizontal"))
(def vbox (flexbox "vertical"))

(defn boxflex [v]
  (list
    :-webkit-box-flex v
    :-moz-box-flex v
    :box-flex v))

(defn box-shadow [v]
  (list
    :-moz-box-shadow    v
    :-webkit-box-shadow v
    :-khtml-box-shadow  v
    :-o-box-shadow      v
    :box-shadow         v))


(defn border-radius [v]
  (list
    :-webkit-border-top-left-radius      v
    :-webkit-border-top-right-radius     v
    :-webkit-border-bottom-right-radius  v
    :-webkit-border-bottom-left-radius   v
    :-khtml-border-top-left-radius       v
    :-khtml-border-top-right-radius      v
    :-khtml-border-bottom-right-radius   v
    :-khtml-border-bottom-left-radius    v
    :-moz-border-radius-topleft          v
    :-moz-border-radius-topright         v
    :-moz-border-radius-bottomright      v
    :-moz-border-radius-bottomleft       v
    :border-top-left-radius              v
    :border-top-right-radius             v
    :border-bottom-right-radius          v
    :border-bottom-left-radius           v
    ))

(defn transform [v]
  (list
    :-o-transform      v
    :-moz-transform    v
    :-khtml-transform  v
    :-webkit-transform v))


