# Tuning Shop Landing Page
A simple landing page for a performance shop. The site is build around a mobile first approach and features changing background images and videos. 

![alt tag](https://user-images.githubusercontent.com/85764795/184556710-e7c84dd3-cdc3-451e-92c7-b0ebce50e705.png)

**Link to project:** [Here](https://car-tuning.netlify.app/)

## How It's Made:
**Tech used:** HTML, CSS, JavaScript

This static website features a media centric approach while being mobile friendly. It works on a multitude of devices and adapts to the user. The dynamic effect is achieved by looping through different videos on the desktop version. In order to preserve the limited data a mobile user may have, it also includes a fallback option that shows images instead. The main feature is the rotation of the content, which is achieved by using a timed loop in javascript which periodically hides/unveils different sections. 


## Optimizations
This project started out centered entirely around embedded videos. However I uncovered issues with recent changes to how Youtube handles embedded videos. Given more time I would therefore switch to a different video hoster in order to have full control over the video player. This improvement should enable an easier integration as well as an increase in the quality of the content. 

## Lessons Learned:
That you should not rely on Youtube to embed videos on your website.
I have learned how to interact with the DOM and manipulate it, both by adding and removing nodes, as well as altering their attached attributes.
This project has taught me about correctly detecting the users device, and working with a multitude of different screen formats. 


