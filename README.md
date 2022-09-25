# 30_MFF_SITE
Description & Vision

This is the website of the CareGreen activism initiative that focuses on encouraging healthy gardening. It houses our first ever promotional video showcases just how
important positive reinforcement is for a plant's growth. While it was a parody, I hope viewers took to heart that plants need to be treated well as well.
With this project I aimed to create an aesthetically pleasing website, constituting of a light color palette, simplistic/streamlined design and appropritate fonts. I 
believe websites, especially ones dealing with activism, need to be approachable in layout in order to keep viewers coming back. This is why I decided to go with a 
familiar design for viewers to navigate through easily. I want the viewers to be naturally led through the content without fretting about where a particular piece 
of information could be found. Keeping the website responsive was another priority of mine, which I dealt with by compressing the media content (video and images) without
comprimising on quality too much. Nobody likes a slow website! If I had to pick one word that I hoped would describe my website, it would be "sleek".

Process

First I decided on the structure of the website I wanted. My wireframe depicted a top row of tabs that would take the viewers to different pieces of content on the site. 
I accomplished this by making seperate html pages for each tab and connecting all of them through hyperlinks. This seemed to work reasonable well and was easy to 
implement so I stuck to this. For their placement on the website, I coded the website name, logo and tab headings in the same <nav> tag and customized them accordingly on
the stylesheet. Most other content coupled together are usually part of the same <div> in order to keep customizations constant through out.

Second I decided on the theme/aestheitic I wanted for the website. After looking through numerous existing websites and templates I decided 
to settle on a light color palette that was easy on the eye. I found appropriate google fonts and imported them into the stylesheet. And the rest I pieced together as I 
built the website. 

The movie tab houses the group promotional video for the CareGreen initiative. The video is also uploaded to github.

I believe user feedback is very important, especially since this is my first website, so I created a seperate tab with an imbedded google form for viewers to send me 
their thoughts on the initiaive, movement, website, and content. I would greatly appreciate any constructive feedback.

Finally, the last tab displays the crew of the short film.

The javascript content is what controls the highlight effect when mouse is over tab headings. The 'mouseenter' event listener waits for the mouse to hover over tab 
headings to then change the color to orange. They turn back to black when the 'mouseleave' event listener is activated (when the mouse leaves the region). 

Evaluation

I am happy with the results I have achieved. Personally, I think the website is user-friendly and looks clean. When it comes to the appearance and layout of the website 
I have no complaints. Though if I had more time to build this site, I would have incorporated more interactivity (javascript). My initial paln was to make the crew's 
individualised descriptions appear only when the mouse hovers over their images, which is why I made a seperate <div> tag for them. I however wasn't able to change 
the opacity of the text from 0 to 1 in response to the mouse hovering. What's puzzlingly is that the event listeners worked when trying to making the text disappear 
(changing opacity from 1 to 0) but didn't work the other way around. I hope to solve this issue moving forward. So for now I kept crew descriptions permanently visible.
