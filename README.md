#Flux-A-Duck

**Because your Actions file is enormous**

---

Flux-A-Duck takes the [traditional flux protocol](https://facebook.github.io/flux/docs/overview.html), hides the complicated bits, and gives you only what you need in one convenient API wrapper. This way you can keep the methods used to access your data close to the Components that depend on it... Or you can put them on the moon. The point is that you can break your store functions and actions into bite sized components that go anywhere while retaining the single event loop style of Flux. 

---

#installation

    npm install flux-a-duck 


Assuming you're using React, this is how you would set up your basic controller-view:

  

    import React from 'react';
    import FAD from 'flux-a-duck';
    
    class app extends React.Component {
    
        constructor(props){
            super(props);
        }
    
        _updateCallback() {
            this.forceUpdate();
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

---
#Basic Usage

A simple example:

	import FAD from 'flux-a-duck';
	import Immutable from 'immutable';
    
    FAD.action((data, store) => {
        let _store = store.getAll();
        _store = _store.setIn(['objectTest'], Immutable.fromJS(data));
        store.replace(_store);
    });


**FAD.action(callback);**

The callback is all you need to parse the data and add it to the store. It even provides two arguments to do so.

callback(data, store)
---------------------

***data***
type: object or string
typically a js object that is returned from a rest service. Normally you would parse this data in the callback and add it to the store. 

***store***
type: object
The store object and it's public methods which are as follows:

***store.getAll();***
type: method
Returns the entire data store in an immutable object.

***store.getAllJS();***
type: method
Returns the entire data store in a plain js object.

***store.replace(newStore);***
type: method
Use this to replace your old store with a new mutated store.


#TODO: move this to the FAD setup in controller-view.

***store.emitChange();***
type: method
Triggers a change event within your store. Typically only used in your top most controller-view.

***store.addChangeListener(callback);***
type: method
Register a callback to trigger when a store change event is emitted. Typically only used in your top most controller-view. 

***store.removeChangeListener(callback);***
type: method
Removes callback from event listening. Typically used when react component is unmounted.
