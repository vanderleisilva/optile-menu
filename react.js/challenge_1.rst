optile react.js coding challenge
================================

We have identified a major problem in our process which is keeping the company
from competing with Google.

The problem is we don't know what's for lunch unless we go to the cantina in
our office building and look at the menu bulletin in the hallway. But every
developer here is pretty lazy, so no one here would consider getting up from
their seat just to find out that the daily menu is a salad or something. So,
today at lunch, we came up with an idea and we need a new react.js engineer to
help us.

We need a specialized react.js JavaScript application that less lazy employees
from product management (or a developer who accidentally walks by the cantina)
can easily use on their mobile phone to update the weekly menu. This backend
should have an optile logo and maybe even the optile colors.

Because we really like testing, the application should have unit tests
and integration tests. Bonus points for a open-source Circle CI integration
that executes those tests on every commit and reports the commit status.

The application itself should:

* show the latest image
* have an upload button that leads to an upload dialog that accepts an
  image upload of the new menu and store it on the local file system
* provide a Slack API integration that can be asked "What's for lunch?" and
  then respond with the latest stored image.

We recommend using `glitch.com <https://glitch.com/>`_ for implementing this,
but feel free to use `codepen.io <https://codepen.io/>`_ or Heroku or anything
else (e.g. your own server) instead.


Provided resources
------------------

Here is a list of useful resources:

* `Glitch FAQ`_
* `Slack integration API`_
* Example images of the cantina menu are in the bitbucket repository.
* Slack integration data ::

    Authentication token: <optile-slack-token>
    Channel: <optile-slack-test-channel>


Expected timeframe
------------------
3-6 hours. Feel free to embellish your version with whatever fun ideas come to
mind, but please don't spend more time than the expected timeframe. This is
just a fun coding challenge after all.


.. _Slack integration API: https://api.slack.com/methods/chat.postMessage
.. _Glitch FAQ: https://glitch.com/faq/
