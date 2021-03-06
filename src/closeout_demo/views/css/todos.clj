(ns closeout-demo.views.css.todos
  (:require 
    [gaka.core :as gaka]
    [closeout-demo.views.css.utils :as css]
    ))


(def todos-rules
 (list
   [:#app-box
    [:.postscript
     :border-top-style "none"
     :font-size "60%"
     :margin-top 0
     :padding-top 0
     
     [:a 
      :color "darkblue"
      :text-decoration "none"
      ]
     
     
     ]]
   
   [:.todoapp
    :background  "#eeeeee"
    :color       "#333333"
    :font-family "'Helvetica Neue', Helvetica, Arial, sans-serif"
    :font-size   "14px"
    :line-height "1.4em"
    :width      "480px"
    :margin     "0 auto 40px"
    :background "white"
    :padding    "20px"
    :border     "1px solid lightgrey"
    (css/box-shadow "rgba(0, 0, 0, 0.2) 0 5px 6px 0")
    
    [:em
     :font-style "italic"]
    
    [:.last-update
     ;:padding ".2em"
     :color "gray"
     :font-size "40%"]
    
    [:.todo-stats-box
     [:.comment
      :color "darkred"
      :font-size "80%"]]

    [:ol
     :list-style "none"]
    
    [:ul
    :list-style "none"]
   
   [:a
    [:img
     :border "none"]]
   
  
    
    
    [:h1
     :font-size   "36px"
     :font-weight "bold"
     :text-align  "center"
     :padding     "20px 0 30px 0"
     :line-height "1"
     ]
    
    [:.create-todo 
     :position "relative"
     
     [:input
      :width       "466px"
      :font-size   "24px"
      :font-family "inherit"
      :line-height "1.4em"
      :border  0
      :outline "none"
      :padding "6px"
      :border "1px solid #999999"
      (css/box-shadow "rgba(0, 0, 0, 0.2) 0 1px 2px 0 inset")
      
      [::-webkit-input-placeholder 
       :font-style "italic"]
      ]
     
     [:span 
      :position "absolute"
      :z-index 999
      :width "170px"
      :left "50%"
      :margin-left "-85px"
      ]
     ]

    [:.todo-list 
     :margin-top "10px"
     [:li 
      :padding "12px 20px 11px 0"
      :position "relative"
      :font-size "24px"
      :line-height "1.1em"
      :border-bottom "1px solid #cccccc"
      
      [:.editing 
       :padding 0
       :border-bottom 0
       ]
      ]
     [:li:after 
       :content "'\\0020'"
       :display "block"
       :height 0
       :clear      "both"
       :overflow   "hidden"
       :visibility "hidden"
       ]
     
     [:.edit :display "none"]
     [:.editing 
      [:.display :display "none"]
      [:.edit    :display "block"]
      
      [:input
       :width       "444px"
       :font-size   "24px"
       :font-family "inherit"
       :margin      0
       :line-height "1.6em"
       :outline     "none"
       :padding     "10px 7px 0px 27px"
       :border      "1px solid #999999"
       (css/box-shadow "rgba(0, 0, 0, 0.2) 0 1px 2px 0 inset")
       ]
      ]
     [:.check 
      :position "relative"
      :top      "9px"
      :margin   "0 10px 0 7px"
      :float   "left"
      ]
     [:.done 
      [:.todo-text 
       :text-decoration "line-through"
       :color           "#777777"
       ]
      ]
     [:.todo-destroy 
      :position   "absolute"
      :right      "5px"
      :top        "14px"
      :display    "none"
      :cursor     "pointer"
      :width      "20px"
      :height     "20px"
      :background "url(destroy.png) no-repeat 0 0"
      ]
     
     [:li:hover 
      [:.todo-destroy 
       :display "block"
       ]
      ]
     [:.todo-destroy:hover
      :background-position "0 -20px"
      ]
     ]

    [:.todo-stats 
     :*zoom 1
     :margin-top "10px"
     :color      "#777777"
     
     [:.todo-count  
      :float "left"
      [:.number 
       :font-weight "bold"
       :color "#333333"
       ]
      ]
     
     [:.todo-clear 
      :float "right"
      [:a 
       :color     "#777777"
       :font-size "12px"
       ]
      [:a:visited 
       :color     "#777777"
       ]
      [:a:hover 
       :color "#336699"
       ]
      ]
     ]
    
    [:.todo-stats:after 
     :content "'\\0020'"
     :display "block"
     :height  0
     :clear   "both"
     :overflow "hidden"
     :visibility "hidden"
     ]
    ]
   ))


(def tooltip-rules
  (list
    [:.ui-tooltip-top 
     
     :color         "#ffffff"
     :cursor        "normal"
     :display       "-moz-inline-stack"
     :display       "inline-block"
     :font-size     "12px"
     :font-family   "arial"
     :padding       ".5em 1em"
     :position      "relative"
     :text-align    "center"
     :text-shadow   "0 -1px 1px #111111"
     (css/border-radius "4px")
     (css/box-shadow "0 1px 2px #000000, inset 0 0 0 1px #222222, inset 0 2px #666666, inset 0 -2px 2px #444444")
     
     :background-color "#3b3b3b"
     :background-image "-moz-linear-gradient(top,#555555,#222222)"
     :background-image "-webkit-gradient(linear,left top,left bottom,color-stop(0,#555555),color-stop(1,#222222))"
     :filter           "progid:DXImageTransform.Microsoft.gradient(startColorStr=#555555,EndColorStr=#222222)"
     :-ms-filter       "progid:DXImageTransform.Microsoft.gradient(startColorStr=#555555,EndColorStr=#222222)"
     ]
    
    [:.ui-tooltip-top:after
     :content   "'\\25B8'"
     :display   "block"
     :font-size "2em"
     :height    0
     
     :line-height 0
     :position "absolute"
     
     
     :bottom "auto"
     :color "#4f4f4f;"
     :left "-2px"
     :top 0
     :text-align "center"
     :text-shadow "none"
     (css/transform "rotate(-90deg)")
     :width "100%"
     
     ]
    ))

(def debug-rules
  (list
    [:.placeholder
     :border "1px solid red"]
    ))



(def save-css (partial gaka/save-css "resources/public/css/todos.css"))

(apply save-css (concat
                  todos-rules 
                  tooltip-rules
                 ; debug-rules
                  ))

