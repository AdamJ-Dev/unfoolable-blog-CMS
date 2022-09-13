# unfoolable CMS

The purpose of this application is to **manage content** on AdamJ-Dev's **[blog](https://unfoolable.blog)**. This means *creating*, *editing*, and *deleting* blogs, as well *pinning*, *validating*, *deleting*, and *creating/editing admin versions of* blog comments. 

Such tasks are possible as an **admin user**. To become an admin user, you have to sign up. To sign up, you require a passcode. The passcode is known only to existing admins, and may be changed at the application owner's discretion. 

## Getting started:

After cloning the repository:

1. Install the dependencies with `npm install`. 

2. Connect to the [blog api](https://github.com/AdamJ-Dev/unfoolable-blog-api). Do this by creating a `.env` file and adding the line:

```
API_URL='https://unfoolable-blog-api.herokuapp.com/'
```
3. Serve the application locally with `npm run dev`. You should now see it at port 3000 in the browser.

## Navigation:

Based on folder structure, here are some notes to help navigating the project:
- `/config` contains 'accidental' facts about the application. `selectors.ts` files provide miniature interfaces for the rest of the application to access those facts.
- `/pages` contains exports for the top-level components for each page, as well as for page-props-getters (e.g. `getStaticProps`).
- `/src` contains all core logic and features for the app: 
  - `/app` contains application-specific logic and features: 
    - `/components` contains shared/sharable<sup>1</sup> components.
    - `/constants` contains shared/sharable constants, or constants which shouldn't be specified within their consuming file.
    - `/hooks` contains shared/sharable custom hooks.
    - `/pages` contains the (sub-)components for each page, as well as the page-props-getters.
    - `/styles` contains shared/sharable css.
    - `/types` contains shared/sharable types.
    - `/utility` contains shared/sharable logic/helper functions.
    
  - `/lib` conatains 'library-level' logic and features, that the application samples from, but in theory, reasonably, other applications could sample from too.
- root-level files are generally for configuring resident tools/technologies.

<sup>1</sup>At this nesting level, shared/sharable means *between pages*.

