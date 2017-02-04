I have hundreds of events on my timeline. I want to get "features" from each of the event. If I have feaures of these events, I can desgin different representaions based on their features.

Since most of the data in DiMe are texts. We will find how to apply Natural Language Processing (NLP) techniques to analysis our data.

In DiMe, the event is stored as:

```
{
    "@type": "DesktopEvent",
    "actor": "DiMe browser extension",
    ...
    "targettedResource": {
        ...
        "plainTextContent": "Hello, world",
        ...
}
```
There is a key `plainTextContent` that has content that could be used for NLP. The text writeen by a wikipedia contributor, I want to test our NLP helper to see how these helps could help us.

At first, I install two opensource lib "[natural](https://github.com/NaturalNode/natural)" and "[stopwords](https://github.com/huned/node-stopwords)

```
yarn add natural stopwords --save
```
(If you don't have `yarn`, [install yarn](https://yarnpkg.com/docs/install) or use `npm install natural stopwords --save` instead)

At the root of your project,
```
cd lib
touch nlpHelper.js
```
and copy/paste all the content in this [commit](https://github.com/sysrep/time-viz/blob/522a0df78408b6953fef11e8d6bf13aeedd00890/src/lib/nlpHelpers.js)

Let's take a paragraph of text from <https://en.wikipedia.org/wiki/Finland> and see how these helpers work.

The text from Wikipedia
>'The name Suomi (Finnish for "Finland") has uncertain origins, but a candidate for a source is the Proto-Baltic word *źemē, meaning "land". In addition to the close relatives of Finnish (the Finnic languages), this name is also used in the Baltic languages Latvian and Lithuanian. Alternatively, the Indo-European word *gʰm-on "man" (cf. Gothic guma, Latin homo) has been suggested, being borrowed as *ćoma. The word originally referred only to the province of Finland Proper, and later to the northern coast of Gulf of Finland, with northern regions such as Ostrobothnia still sometimes being excluded until later. Earlier theories suggested derivation from suomaa (fen land) or suoniemi (fen cape), and parallels between saame (Sami, a Finno-Ugric people in Lapland), and Häme (a province in the inland) were drawn, but these theories are now considered outdated.[24]'

Install `babel-cli` and `babel-preset-latest` then we can test in terminal.
```
npm install -g babel-preset-latest babel-cli
```
Add a contant "t" in the `nlpHelpers.js` and assign its value the text above. I use console.log to print our content in the terminal.
```
const t = [text above]
console.log(t)
```
Run the script by:
```
babel-node --presets latest nlpHelpers.js
```
