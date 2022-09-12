## Navigation:

- `config` contains 'accidental' facts about the application. `selectors.ts` files provide an api for the rest of the application to access those facts
- `pages` is where I export the components for each page, and their props-grabbers -- but I don't build them there, because...
- `src` contains all the core logic and features for the app
  - `app` contains the application-specific logic and features 
    - `components` contains shared/sharable components<sup>1</sup>
    - `constants` contains shared/sharable constants, or constants which shouldn't be specified within their consuming file<sup>2</sup>
    - `hooks` contains shared/sharable hooks
    - `pages` contains the (sub-)components for each page, together with their props-grabbers
    - `styles` contains shared/sharable css
    - `types` contains shared/sharable types
    - `utility` contains shared/sharable logic/helper functions
    
  - `lib` conatains 'library-level features', that the application samples from, but in theory other applications could sample from too
- root-level files are generally for configuring the application's tools/technologies 

<sup>1</sup>At this nesting level I am talking about shared/sharable between pages

<sup>2</sup> Couple of use cases for this latter thing imo:
1. If the constants contain values that you might want to change later (e.g. for business reasons, aesthetic reasons), then it's easy to find them. they're all in one place, and it's easy to see (e.g. in a PR) what *kind* of change you've made once you've made it
2.  It's often just not the case that *what particularly the constant is* is the concern of a function, say, which consumes that constant. Imagining myself as the function, I'm just like: What is the purpose of me knowing that? Get that out of here. Hide it away in another file that actually cares about that kind of stuff!