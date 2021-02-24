# WeatherWidgetJs

Simple WeatherWidget with the help of the W3C Geoloctaion API (https://developer.mozilla.org/de/docs/Web/WebAPI/verwenden_von_geolocation) which is supported by pretty much every mobil- and desktopbrowser and the Free Code Camp Weather API (https://fcc-weather-api.glitch.me/).

Created in JavaScript, HTML, CSS. 
Hosted over Firebase (https://firebase.google.com/docs/hosting).

# Issues

Sometimes the GET-request for the Free Code Camp Weather API seems to fail. In this case just wait a few seconds and refresh the page. Might have sth. to do with too many requests in a short amount of time. 


# Questions

## How could you request data inside the browser, from another domain?
- With the help of CORS.
- Same-Origin-Policy forbids getting resources from other Servers -> All data should come from one origin / one server. With CORS you can get resources from another server over a Cross-Origin-Request if the requested server allows this via HTTP-Header!
- Example: access-control-allow-origin: http://foo.example .
- In case of the FCC Weather API its access-control-allow-origin:* -> Everyone is allowed to Request Data  

## What does CORS stand for?
- CORS = Cross-origin-resource sharing.
- Is supported by all modern browsers. 

## Please name 5 different HTTP methods and explain what they are used for?
- GET: You can request a specific resource with the GET-Method, in our case we retrieve a JSON Object from the FCC Weather API via GET.
- POST: Submit an attribute or an entity to a specifed resource which results in a change of the server where the targeted resource resides. For example: you want to add additional user data to a user and submit the data via POST-Method to the UserClass on the server. 
- PATCH: Partially modify a targeted resource. You can update files or versions with the PATCH-Method.
- PUT: Somewhat opposite to GET. You can place a recource in a remote directory. PUT assumes that the ressource doesnt exist yet or can be overwritten. 
- DELETE: Delete a specified resource. 

## What is the difference between 'DOMContentLoaded' and 'Load' events?
- DOMContentLoaded: Event fires when the current page/document has been completly loaded and parsed (DOM-Tree fully constructed).
- Load: Event fires when all resources including images, stylesheets, frames and scripts have been loaded.

## What is the DOM?
- The Document Object Model is a interface for the structuring of html and xml documents. Every document in every browser tab you have open is represented by the DOM in a DOM-   Tree. Within the DOM-Tree every element is represented by a node. The DOM allows an easy manipulation through JavaScript which is essential for creating dynamic Websites (for example appending nodes with child nodes which i also did in my task). 
- DOM for WeatherWidget: 
  
