# Tuning Shop Landing Page
A simple landing page for a performance shop. The site is built around a mobile first approach and features changing background images and videos. 

![alt tag](https://user-images.githubusercontent.com/85764795/184610626-9df406aa-6c65-4aca-93ac-7262894ea180.png)

**Link to project:** [Here](https://car-tuning.netlify.app/)

## How It's Made:
**Tech used:** HTML, CSS, JavaScript

This static website features a media centric approach while being mobile friendly. It works on a multitude of devices and adapts to the user. The dynamic effect is achieved by looping through different videos on the desktop version. In order to preserve the limited data a mobile user may have, it also includes a fallback option that shows images instead. The main feature is the iframe carousel, which is created by using a timed loop in javascript which periodically hides/unveils different sections.

## Optimizations
This project started out centered entirely around embedded videos. However I uncovered issues with recent changes to how Youtube handles embedded videos. Given more time I would therefore switch to a different video hoster in order to have full control over the video player. This improvement should enable an easier integration as well as an increase in the quality of the content. The mobile version is currently not optimised and requires some more attention to polish it. Another optimization would be ensuring that the site works as intended for users using dark readers.

## Lessons Learned:
That you should not rely on Youtube to embed videos on your website.
How to interact with the DOM and manipulate it, both by adding and removing nodes, as well as altering their associated attributes.
This project has taught me about correctly detecting the users device, and working with a multitude of different screen formats. 


