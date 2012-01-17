(ns closeout-demo.views.css.clock
  (:require 
    [gaka.core :as gaka]
    [closeout-demo.views.css.utils :as css]
    ))


(def clock-style
  (list
    [:.clock-app 
     [:.title
      :font-size "150%"
      :text-decoration "underline"
      :font-style "italic"
      :color "#444444"
      ]
     
     [:.clock
      :background-color "lightsteelblue"
      :color  "#333333"
      :font-family "Century Gothic, sans-serif";
      :text-align "center"
      
      :border "1px solid darkblue"
      (css/border-radius "5px")
      ]
     
     [:.stopwatch
      :border "1px solid #444444"
      :background-color "#EEEEEE"
      :color "darkblue"
      (css/border-radius "5px")
      
      [:.timing
       :background-color "#DDDDDD"
       :border "1px solid"
       :padding "0.5em"
       :margin-top "1em"
       (css/border-radius "5px")
       [:td.label
        :color "darkblue"]
       [:td
        :color "black"]
       ]
      
      [:.start-stop
       :color "darkgreen"
       :border-color "darkgreen"
       :background-color "#D5E8E2"
       ]
      
      [:.start-stop.stop
       :color "darkred"
       :border-color "darkred"
       :background-color "#E8CFD9"
       ]
      [:.start-stop.reset
       :color "darkblue"
       :border-color "darkblue"
       :background-color "#D1DBE8"
       ]
      
      [:.start-stop:hover
       :background-color "#EBFFF9"]
      
      [:.start-stop.stop:hover
       :background-color "#FFE3EE"]
      
      [:.start-stop.reset:hover
       :background-color "#E6F1FF"]
      
      [:.lap
       :color "darkblue"
       :border-color "darkblue"
       :background-color "#D1DBE8"
       ]
      
      [:.lap:hover
       :background-color "#E6F1FF"
       ]
      ]
     
     [:.button.inactive
      :border-color "darkgray"
      :color "darkgray"
      :background-color "lightgray"]
     
     [:.button.inactive:hover
      :border-color "darkgray"
      :color "darkgray"
      :background-color "lightgray"]
     
     
     [:.red
      :background-color "#F7DCE7"
      :border-color "darkred"
      :color "darkred"
      ]
     ]
    ))
  
(def clock-layout
 (list   
   [:.clock-app
    :margin "auto"
    :max-width  "40em"
    
    :padding-left "1em"
    :padding-right "1em"
    
    [:.title
     :margin-bottom "1em"]
    
    [:.clock    
     :padding "1em"
     ]
    
    [:.stopwatch   
     :padding "1em"
     ]      
    
    [:.timing
     [:td 
      :padding-left "1em"
      :padding-right "1em"]
     ]
    ]   
   ))


(def save-css (partial gaka/save-css "resources/public/css/clock.css"))

(apply save-css (concat 
                  clock-style
                  clock-layout
                  ))

