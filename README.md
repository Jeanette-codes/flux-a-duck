#Flux-A-Duck

**A simple wrapper for the flux pattern with an Immutable store and a sprinkle of AJAX.**

Flux-A-Duck takes the [traditional flux protocol](https://facebook.github.io/flux/docs/overview.html), hides the complicated bits, and gives you only what you need in one convenient API wrapper. This way you can keep the methods used to access your data close to the Components that depend on it... Or you can put them on the moon. The point is that you can break your store functions and actions into bite sized components that go anywhere while retaining the single event loop style of Flux. 


#installation

    npm install flux-a-duck 


Assuming you're using React, this is how you would set up your basic [controller-view](https://facebook.github.io/flux/docs/overview.html#views-and-controller-views):

  

    import React from 'react';
    import FAD from 'flux-a-duck';
    
    class app extends React.Component {
    
        constructor(props){
            super(props);
        }
    
        componentDidMount() {
            FAD.addChangeListener(this._onChange.bind(this));
        }
    
        componentWillUnmount() {
            FAD.removeChangeListener(this._onChange.bind(this));
        }
    
        render() {
            return (
                <SomeKindOfReactComponent {...this.state}/>
            );
        }
    
        _onChange() {
            this.setState(FAD.getAllJS());
        }
    }

    app.displayName = 'App';
    export default app;

This passes all your store data into the props of your top level react components.

#Top Level Methods

**FAD.addChangeListener(callback)**
Register a callback to trigger when a store change event is emitted. Typically only used in your top most controller-view. 

**FAD.removeChangeListener(callback)**
Removes callback from event listening. Typically used when react component is unmounted.

**FAD.getAllJS()**
Returns the entire data store in a plain js object. This is an alias for store.getAllJS() that is provided in the callback arguments.

**FAD.action(callback, options)**
The heavy lifting is done in the FAD.action callback, it's what adds your data into the store. The options object is used for sending an AJAX call and if no call is required, the options object may be omitted.


#Action method without AJAX call

This simplest use case of flux-a-duck. the code below puts a data object into the store.  

	import FAD from 'flux-a-duck';
	import Immutable from 'immutable';
    
    FAD.action((store) => {
        let _store = store.getAll();
        let data = { foo : 'bar' };
        _store = _store.setIn(['objectTest'], Immutable.fromJS(data));
        store.replace(_store);
    });


**A Quick word about Immutable:**
The store in Flux-A-Duck is set up with [Immutable](https://facebook.github.io/immutable-js/) data collections, so the store argument comes with all the immutable methods for that data type attached. Any top level Immutabe methods (example: Immutable.fromJS()) require that you import Immutable. Using Immutable means you can only replace the store by using store.replace() as no direct mutation of the store is allowed. The duck has spoken.


Argument methods provided in callback(store, data)
---------------------

**store**
The store object and it's public methods which are as follows:

**store.getAll()**
Returns the entire data store in an immutable object.

**store.getAllJS()**
Returns the entire data store in a plain js object.

**store.replace(newStore)**
Use this to replace your old store with a new mutated store.

**data (optional)**
Typically a javascript object or string that is returned from an AJAX call. Normally you would parse this data in the callback and add it to the store. If no ajax call is required then data is not returned as an argument. 


#Action method with AJAX call

Flux-a-duck provides an optional built-in AJAX service to easily make server calls and get the data directly into your action method. Create an AJAX call by adding the options object as an argument to the action method like so:

    

    FAD.action({
		   url        : '/testGet',
	       httpMethod : 'POST',
	       postData   : 'some kind of post data',
	       headers    : {
	           'Accept'       : 'text/plain',
	           'Content-Type' : 'text/plain'
	       }
	    }, (store, data) => {
            let _store = store.getAll();
            let newData = Immutable.fromJS(JSON.parse(data));
		    store.replace(_store.setIn(['testData'], newData);
        });

It can be added in front or behind the callback argument. Flux-A-Duck don't care; Flux-A-Duck abides.

#AJAX options object API

**url**
A string containing the URL to which the request is sent.

**httpMethod**
Any valid [http method](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) to use with your request. If this is not included it defaults to the GET method.

**headers**
An object of additional [header key/value pairs](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields) to send along with requests.

**postData**
An object or a string to send to the server in a [POST request](https://en.wikipedia.org/wiki/POST_%28HTTP%29). The format will largely be dependent on what content-type you specify in the headers.
