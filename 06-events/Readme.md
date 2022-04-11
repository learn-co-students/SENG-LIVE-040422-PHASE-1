# Events
## SWBAT
- Understand static vs. Dynamic Websites 
- review JavaScript event types
- Change the dom with events.
    - Remove content with a 'click' handler
    - Add content with a 'submit' handler
    - Create new data using a form
    - prevent the browser from refreshing with .preventDefault
    - render data to the dom with optimistic rendering

## Events
When the user interacts with the dom, it fires events that trigger an effect in our JavaScript code that can do something. Such as updating the dom or adding content to the database. 

To pick up events, our code must 'listen' for the event. addEventListener will do just that. It takes 2 arguments, the first is the event it's listening for, and the second is the code that will run once the event is triggered.

```
div.addEventListener('click', () => console.log('hi'))

//When events are triggered, the event object is passed to the second argument as an argument to the callback.
div.addEventListener('click', (e) => console.log(e))

```

There are many event types: [Events](https://developer.mozilla.org/en-US/docs/Web/Events)


## Forms
Forms can have a variety of user inputs a user can interact with.
The submit event can be used to retrieve the value of those inputs. 

When a form submits, it will, by default try to send a request and refresh the page.  To prevent that, we need to call e.preventDefault(). Afterwords, the event can be used to grab the form values through the target attribute.

```
<form>
    <input type="text" name='favColor'/>
    <input type="submit" />
</form>

form.addEventListener('submit',(e)=> {
    e.preventDefault
    //Here we are using the name property from the form to target the specific input.
    console.log(e.target.faveColor.value)
})

```