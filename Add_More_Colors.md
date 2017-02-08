By reading the article, I also learn that the emotion of "anticipation" is located between "anger" and "joy" on the color wheel.

<img src="https://public-media.interaction-design.org/images/uploads/70cb81fe1b87d2703d5c2f127841efad.jpg" />

I make an assumption that the value of "anticipation" equals the average value of "anger" plus "joy" (anticipation = (anger+joy)/2). The result of this assumption is that I have more categories of emotion that have values could be applied to my design.

The orginal data is 
```
{
  "anger": 0.11695790290000001,
  "joy": 0.5528126955,
  "fear": 0.2042851001,
  "surprise": 0.0231916048,
  "sadness": 0.102752775,
}
```
By applying my assumption, I have additional 4 categories (anticipation, trust, surprise and disguest)
```
{
  "anger": 0.11695790290000001,
  "anticipation": (anger+joy)/2,
  "joy": 0.5528126955,
  "trust": (joy+fear)/2,
  "fear": 0.2042851001,
  "surprise": 0.0231916048
  "surprise": (fear+sadness)/2,
  "sadness": 0.102752775,
  "disguest": (anger+sadness)/2
}
```
I find the colors which reprsent these new categories in anthor wheel.

<img src="https://public-media.interaction-design.org/images/uploads/955c62c82771f57ce02cab0bd0a4bfae.jpg">
