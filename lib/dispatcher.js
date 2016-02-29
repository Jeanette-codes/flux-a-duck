'use strict';

/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * AppDispatcher
 *
 * A singleton that operates as the central hub for application updates.
 */

var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {

    /**
     * A bridge function between the views and the dispatcher, marking the action
     * as a view action.  Another variant here could be handleServerAction.
     * @param  {object} action The data coming from the view.
     */
    handleViewAction: function handleViewAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    },

    handleServerAction: function handleServerAction(action) {
        this.dispatch({
            source: 'SERVER_ACTION',
            action: action
        });
    }

});

module.exports = AppDispatcher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXNwYXRjaGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWFBLElBQUksYUFBYSxRQUFRLE1BQVIsRUFBZ0IsVUFBaEI7QUFDakIsSUFBSSxTQUFTLFFBQVEsZUFBUixDQUFUOztBQUVKLElBQUksZ0JBQWdCLE9BQU8sSUFBSSxVQUFKLEVBQVAsRUFBeUI7Ozs7Ozs7QUFPekMsc0JBQW1CLDBCQUFVLE1BQVYsRUFBa0I7QUFDakMsYUFBSyxRQUFMLENBQWM7QUFDVixvQkFBUyxhQUFUO0FBQ0Esb0JBQVMsTUFBVDtTQUZKLEVBRGlDO0tBQWxCOztBQU9uQix3QkFBcUIsNEJBQVUsTUFBVixFQUFrQjtBQUNuQyxhQUFLLFFBQUwsQ0FBYztBQUNWLG9CQUFTLGVBQVQ7QUFDQSxvQkFBUyxNQUFUO1NBRkosRUFEbUM7S0FBbEI7O0NBZEwsQ0FBaEI7O0FBdUJKLE9BQU8sT0FBUCxHQUFpQixhQUFqQiIsImZpbGUiOiJkaXNwYXRjaGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEFwcERpc3BhdGNoZXJcbiAqXG4gKiBBIHNpbmdsZXRvbiB0aGF0IG9wZXJhdGVzIGFzIHRoZSBjZW50cmFsIGh1YiBmb3IgYXBwbGljYXRpb24gdXBkYXRlcy5cbiAqL1xuXG52YXIgRGlzcGF0Y2hlciA9IHJlcXVpcmUoJ2ZsdXgnKS5EaXNwYXRjaGVyO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIEFwcERpc3BhdGNoZXIgPSBhc3NpZ24obmV3IERpc3BhdGNoZXIoKSwge1xuXG4gICAgLyoqXG4gICAgICogQSBicmlkZ2UgZnVuY3Rpb24gYmV0d2VlbiB0aGUgdmlld3MgYW5kIHRoZSBkaXNwYXRjaGVyLCBtYXJraW5nIHRoZSBhY3Rpb25cbiAgICAgKiBhcyBhIHZpZXcgYWN0aW9uLiAgQW5vdGhlciB2YXJpYW50IGhlcmUgY291bGQgYmUgaGFuZGxlU2VydmVyQWN0aW9uLlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gYWN0aW9uIFRoZSBkYXRhIGNvbWluZyBmcm9tIHRoZSB2aWV3LlxuICAgICAqL1xuICAgIGhhbmRsZVZpZXdBY3Rpb24gOiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2goe1xuICAgICAgICAgICAgc291cmNlIDogJ1ZJRVdfQUNUSU9OJyxcbiAgICAgICAgICAgIGFjdGlvbiA6IGFjdGlvblxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgaGFuZGxlU2VydmVyQWN0aW9uIDogZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKHtcbiAgICAgICAgICAgIHNvdXJjZSA6ICdTRVJWRVJfQUNUSU9OJyxcbiAgICAgICAgICAgIGFjdGlvbiA6IGFjdGlvblxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcERpc3BhdGNoZXI7XG4iXX0=