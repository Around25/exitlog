ExitLog
=======

A small package that makes handling exit exceptions easier.

Usage
-----

Install the package using the following command:

```sh
npm install exitlog --save
```

Add this line to into the main script of your application:

```js
require('exitlog')();
// build your application and never worry about not seeing all exceptions again
```

You can also add a custom handle:

```js
require('exitlog')({
  handler: function (err, exit){
    // process the exception message... maybe save it somewhere
    // call the function to exit the process
    exit();
  }
});
// build your application and never worry about not seeing all exceptions again
```
