# unfoolable CMS

The purpose of this application is to **manage content** on AdamJ-Dev's blog. This means *creating*, *editing*, and *deleting* blogs, as well *pinning*, *deleting*, and *creating user/admin versions of* blog comments. 

Such tasks are possible according to the following permissions:

```
  create a blog: admin;
  update a blog: admin;
  delete a blog: admin;
  pin a comment: admin;
  create a verified comment: user;
  delete a comment: admin;
```

An admin is also a user. To become a user, you have to sign up. To sign up, you require a passcode. The passcode is known only to existing admins, and may be changed at the application owner's discretion.

## Navigation:

Based on folder structure, here are some notes to help navigating the project:
- `/config` contains 'accidental' facts about the application. `selectors.ts` files provide miniature interfaces for the rest of the application to access those facts.
- `/pages` contains exports for the top-level components for each page, as well as for page-props-getters (e.g. `getStaticProps`).
- `/src` contains all core logic and features for the app: 
  - `/app` contains application-specific logic and features: 
    - `/components` contains shared/sharable<sup>1</sup> components.
    - `/constants` contains shared/sharable constants, or constants which shouldn't be specified within their consuming file.
    - `/hooks` contains shared/sharable custom hooks.
    - `/context` contains shared/sharable React context.
    - `/pages` contains the (sub-)components for each page, as well as the page-props-getters.
    - `/styles` contains shared/sharable css.
    - `/types` contains shared/sharable types.
    - `/utility` contains shared/sharable logic/helper functions.
    
  - `/lib` conatains 'library-level' logic and features, that the application samples from, but in theory, reasonably, other applications could sample from too.
- root-level files are generally for configuring resident tools/technologies.

<sup>1</sup>At this nesting level, shared/sharable means *between pages*.

