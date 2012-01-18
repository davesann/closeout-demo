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

(def google+1-html
  [:div {:class "g-plusone" 
         :data-size "small" 
         :data-annotation "inline" 
         :data-href="http://closeout-demo.herokuapp.com/"}])

(def google+1-script
  [:script {:type "text/javascript"}
   "window.___gcfg = {lang: 'en-GB'};

  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();"])

(def facebook-like-script
  (list
    [:div.fb-root]
    [:script {:type "text/javascript"}
     "(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = '//connect.facebook.net/en_GB/all.js#xfbml=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));"]))

(def facebook-like-html
  [:div {:class "fb-like"
         :data-href "http://closeout-demo.herokuapp.com/" 
         :data-send "true"
         ;; comment next item for facebbok blurb
         :data-layout "button_count"
         :data-width "450" 
         :data-show-faces "true"}
   ])

(def twitter-html
  (list
    [:a {:href "https://twitter.com/share"
         :class "twitter-share-button"
         :data-url "http://closeout-demo.herokuapp.com/" 
         :data-text "Closeout - clojurescript ui-binding" 
         :data-hashtags="clojurescript, clojure, closeout"} "Tweet"]
    [:script "!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='//platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','twitter-wjs');"]
    ))

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
   facebook-like-script
   [:div.intro
    [:div.title "ClojureScript applications with Closeout"]
    [:div.desc
     [:p "This is a relatively simple demo of ClojureScript using " closeout 
      ". Closeout is an experimental library for " clojurescript " inspired by " knockout
      " and similar libraries for web ui binding."]
     [:p "Choose one of the demo apps below:"]
     (app-choice app-id)
     ]]
   (if app-id
     [:div#app-box
      [:div#app.placeholder {:data-template-name "main"}]])
   
   [:div.postscript
    [:ul
     [:li "Closeout is currently alpha. Documentation is very light at this point"]
     [:li "The css for this site expects a modern browser"]
     [:table
      [:tr
       [:td "Closeout source" ] 
       [:td [:a {:href "https://github.com/davesann/closeout"} 
             "https://github.com/davesann/closeout"]]]
      [:tr
       [:td "Clojars"]
       [:td "[closeout \"0.1.0\"]"]]
      
      [:tr
       [:td "This web-app source"]
       [:td [:a {:href "https://github.com/davesann/closeout-demo"} 
             "https://github.com/davesann/closeout-demo"]]]
      
      [:tr 
       [:td "Clojurescript source"]
       [:td [:a {:href "https://github.com/davesann/closeout-demo-cljs"} 
             "https://github.com/davesann/closeout-demo-cljs"]]]
      [:tr [:td] [:td "&nbsp;"]]
      [:tr [:td] [:td 
                  [:div google+1-html]
                  [:div facebook-like-html]
                  [:div twitter-html]]]
      ]
     ]
    ]
   ]
  )
  
(defn page 
  ([] (page nil))
  ([app-id]
    (hph/html5
      [:head
       [:title "Closeout Demos"]
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
       google+1-script
       google-analytics
       ]
      (body-template app-id)
      (hph/include-js "/js/bootstrap.js")
      )))


(nc/defpage "/" [] (page))
(nc/defpage "/:app-id" {app-id :app-id} (page app-id))



