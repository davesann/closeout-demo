(ns closeout-demo.views.closeout-demo
  (:require
    [noir.core :as nc]
    [hiccup.core :as hc]
    [hiccup.page-helpers :as hph]
    
    [clojure.string :as s]
    )
  )


(defn make-class-list [l]
  (s/join " " (remove nil? l)))
  
(def clojurescript [:a {:href "https://github.com/clojure/clojurescript/wiki"} "ClojureScript"])
(def closeout      [:a.closeout {:href "https://github.com/davesann/closeout"} "Closeout"])
(def knockout      [:a {:href "http://knockoutjs.com/"} "Knockoutjs"])

(defn app-choice [app-id]
  [:div.app-choice
   (for [app ["clock" "clock2" "stopwatch" "todos"]]
     [:a 
      {:href app
       :class (make-class-list 
                ["button" 
                 (if (= app app-id) "selected")
                 ])} 
      app])
   ])
  

(defn body-template 
  [app-id]
  [:body#body
   (if app-id {:data-app-choice app-id} {})
   [:div.intro
    [:div.title "ClojureScript applications with Closeout"]
    [:div.desc
     [:p "This is a relatively simple demo of ClojureScript using " closeout]
     [:p "Closeout is a library for " clojurescript " inspired by " knockout
      " and similar libraries for web ui binding."]
     [:p "Choose one of the demo apps below"]
     (app-choice app-id)
     ]]
   (if app-id
     [:div#app-box
      [:div#app.placeholder {:data-template-name "main"}]])
   
   [:div.postscript
    [:ul
     [:li "Checkout is currently alpha. Documentation is very light at this point"]
     [:li "Github: " [:a {:href "https://github.com/davesann/closeout"} 
                      "https://github.com/davesann/closeout"]]
     [:li "Clojars [pending]"]
     
     [:li "The css for this site expects a modern browser."]
   ]]]
   )

(def google-analytics
   [:script {:type "text/javascript"}
    "var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-28393777-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();"])
  
(defn page 
  ([] (page nil))
  ([app-id]
    (hph/html5
      [:head
       [:title "Todos"]
       [:meta {:http-equiv "Content-Type" :content "text/html; charset=UTF-8"}]
       (hph/include-css "/css/reset.css")
       (hph/include-css "/css/site.css")
       (cond
         (= app-id "todos")
         (hph/include-css (str "/css/todos.css"))
         
         (nil? app-id)
         nil
         
         :else
         (hph/include-css (str "/css/clock.css")))
       google-analytics
       ]
      (body-template app-id)
      (hph/include-js "/js/bootstrap.js")
      )))


(nc/defpage "/" [] (page))
(nc/defpage "/:app-id" {app-id :app-id} (page app-id))



