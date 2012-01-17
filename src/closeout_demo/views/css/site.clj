(ns closeout-demo.views.css.site
  (:require 
    [gaka.core :as gaka]
    [closeout-demo.views.css.utils :as css]
    ))

(def separator "1px solid darkblue")

(def style
  (list
    [:body
     :background-color "#E2E6F2"]
        
    [:#app-box
     :background-color "#FAFAFA"
     :border "1px solid #AAAAAA"
     :max-width  "50em"
     ]
    
    [:.intro
     :text-align "center"
     
     [:.title
      :font-size "200%"
      :text-decoration "underline"
      :font-style "italic"
      :color "darkblue"
      ]
     
     [:a 
      :color "darkblue"
      :text-decoration "none"
      ]
     
     [:a.closeout 
      :color "darkred"
      ]
     
     
     [:.desc
      :color "#444444"]
     ]
    
    [:.postscript
     :text-align "center"
     :border-top separator
     
     :font-size "80%"
     :color "#444444"
     :font-style "italic"]
    
    [:.button
     :color "darkblue"
     :background-color "lightsteelblue"
     :text-decoration "none"
     ]
    
    [:.button:hover
     :background-color "#E6F1FF"
     ]
    
    [:.button.selected
     :background-color "#FFF5AB"
     ]
    
    [:.button.selected:hover
     :background-color "#FFF5AB"
     ]
    
    [:ul
    :list-style "none"]
   
    ))

(def layout
 (list   
   [:body
    :font-size "16pt"
    
    ]
   
   [:.hbox
    css/hbox
    :width "100%"]
   
    [:#app-box
     :padding-top "1em"
     :padding-bottom "1em"
     :width "80%"
     :margin-left "auto"
     :margin-right "auto"
     ]
    
   [:.intro
     :margin-left "auto"
     :margin-right "auto"
     :width "80%"
     
     [:.title
      :margin-bottom "1em"
      ]
     
     [:.app-choice
      :border-top separator
      :border-bottom separator
      :padding-bottom "1em"
      :margin-bottom "1em"
      :margin-top "1em"
     ]
     ]
    
    [:.postscript
     :margin-top "1em"
     :padding-top "1em"
     :margin-left "auto"
     :margin-right "auto"
     :width "80%"
     ]
   
   [:.app-choice 
    css/hbox
    (css/boxpack "center")]
    
   [:.button
    :-moz-user-select   "none"
    :-khtml-user-select "none"
    :user-select        "none"]
   
    [:.pad1
     (css/boxflex 1)
     :-moz-user-select   "none"
     :-khtml-user-select "none"
     :user-select        "none"]
   
   [:.flex1 
    (css/boxflex 1)]
   
   [:.button
    :display "inline-block"
    :width "5em"
    :padding "0.5em" 
    :margin-top "1em"
    :margin-left "1em"
    :text-align "center"
    :border "1px solid"
    (css/border-radius "5px")
    
    ]
   ))


(def save-css (partial gaka/save-css "resources/public/css/site.css"))

(apply save-css (concat 
                  style
                  layout
                  ))

