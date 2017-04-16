/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class BehaviorEvents extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Triggers the behavior when the mouse button is clicked 
			 * (without being released).
			 * @type {Adobe.Incopy.BehaviorEvents}
			 * @readonly
			 */
			public static readonly MOUSE_DOWN: Adobe.Incopy.BehaviorEvents;
			/**
			 * Triggers the behavior when the mouse pointer enters the area 
			 * defined by the bounding box of the object.
			 * @type {Adobe.Incopy.BehaviorEvents}
			 * @readonly
			 */
			public static readonly MOUSE_ENTER: Adobe.Incopy.BehaviorEvents;
			/**
			 * Triggers the behavior when the mouse pointer exits the area 
			 * defined by the bounding box of the object.
			 * @type {Adobe.Incopy.BehaviorEvents}
			 * @readonly
			 */
			public static readonly MOUSE_EXIT: Adobe.Incopy.BehaviorEvents;
			/**
			 * Triggers the behavior when the mouse is released after a 
			 * click.
			 * @type {Adobe.Incopy.BehaviorEvents}
			 * @readonly
			 */
			public static readonly MOUSE_UP: Adobe.Incopy.BehaviorEvents;
			/**
			 * Alias for MOUSE_DOWN. Triggers the behavior when the mouse 
			 * button is clicked (without being released).
			 * @type {Adobe.Incopy.BehaviorEvents}
			 * @readonly
			 */
			public static readonly mouseDown: Adobe.Incopy.BehaviorEvents;
			/**
			 * Alias for MOUSE_ENTER. Triggers the behavior when the mouse 
			 * pointer enters the area defined by the bounding box of the 
			 * object.
			 * @type {Adobe.Incopy.BehaviorEvents}
			 * @readonly
			 */
			public static readonly mouseEnter: Adobe.Incopy.BehaviorEvents;
			/**
			 * Alias for MOUSE_EXIT. Triggers the behavior when the mouse 
			 * pointer exits the area defined by the bounding box of the 
			 * object.
			 * @type {Adobe.Incopy.BehaviorEvents}
			 * @readonly
			 */
			public static readonly mouseExit: Adobe.Incopy.BehaviorEvents;
			/**
			 * Alias for MOUSE_UP. Triggers the behavior when the mouse is 
			 * released after a click.
			 * @type {Adobe.Incopy.BehaviorEvents}
			 * @readonly
			 */
			public static readonly mouseUp: Adobe.Incopy.BehaviorEvents;
			/**
			 * Triggers the behavior when the focus moves to a different 
			 * interactive object.
			 * @type {Adobe.Incopy.BehaviorEvents}
			 * @readonly
			 */
			public static readonly ON_BLUR: Adobe.Incopy.BehaviorEvents;
			/**
			 * Triggers the behavior when the object receives focus, either 
			 * through a mouse action or by pressing the Tab key.
			 * @type {Adobe.Incopy.BehaviorEvents}
			 * @readonly
			 */
			public static readonly ON_FOCUS: Adobe.Incopy.BehaviorEvents;
			/**
			 * Alias for ON_BLUR. Triggers the behavior when the focus 
			 * moves to a different interactive object.
			 * @type {Adobe.Incopy.BehaviorEvents}
			 * @readonly
			 */
			public static readonly onBlur: Adobe.Incopy.BehaviorEvents;
			/**
			 * Alias for ON_FOCUS. Triggers the behavior when the object 
			 * receives focus, either through a mouse action or by pressing 
			 * the Tab key.
			 * @type {Adobe.Incopy.BehaviorEvents}
			 * @readonly
			 */
			public static readonly onFocus: Adobe.Incopy.BehaviorEvents;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}