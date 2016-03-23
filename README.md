#Flux-A-Duck

**Because your Actions file is enormous**


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

***FAD.addChangeListener(callback);***
Register a callback to trigger when a store change event is emitted. Typically only used in your top most controller-view. 

***FAD.removeChangeListener(callback);***
Removes callback from event listening. Typically used when react component is unmounted.

***FAD.getAllJS();***
Returns the entire data store in a plain js object. This is an alias for store.getAllJS() that is provided in the callback arguments.

***FAD.action(callback, options)***
The heavy lifting is done in the FAD.action callback, it's what adds your data into the store. The options object is used for the settings of your REST service and if no service is used, the options object maybe omitted.


---
#Basic action method without REST service

A simple example:

	import FAD from 'flux-a-duck';
	import Immutable from 'immutable';
    
    FAD.action((data, store) => {
        let _store = store.getAll();
        _store = _store.setIn(['objectTest'], Immutable.fromJS(data));
        store.replace(_store);
    });



Argument methods provided in callback(store, data)
---------------------

***data (optional)***
Typically a javascript object or string that is returned from a rest service. Normally you would parse this data in the callback and add it to the store. If no ajax or rest service is used then data is not used. 

***store***
The store object and it's public methods which are as follows:

***store.getAll();***
Returns the entire data store in an immutable object.

***store.getAllJS();***
type: method
Returns the entire data store in a plain js object.

***store.replace(newStore);***
type: method
Use this to replace your old store with a new mutated store.

