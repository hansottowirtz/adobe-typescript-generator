/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BehaviorEvents extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Triggers the behavior when the mouse button is clicked 
			 * (without being released).
			 * @type {Adobe.Indesign.BehaviorEvents}
			 * @readonly
			 */
			public static readonly MOUSE_DOWN: Adobe.Indesign.BehaviorEvents;
			/**
			 * Triggers the behavior when the mouse pointer enters the area 
			 * defined by the bounding box of the object.
			 * @type {Adobe.Indesign.BehaviorEvents}
			 * @readonly
			 */
			public static readonly MOUSE_ENTER: Adobe.Indesign.BehaviorEvents;
			/**
			 * Triggers the behavior when the mouse pointer exits the area 
			 * defined by the bounding box of the object.
			 * @type {Adobe.Indesign.BehaviorEvents}
			 * @readonly
			 */
			public static readonly MOUSE_EXIT: Adobe.Indesign.BehaviorEvents;
			/**
			 * Triggers the behavior when the mouse is released after a 
			 * click.
			 * @type {Adobe.Indesign.BehaviorEvents}
			 * @readonly
			 */
			public static readonly MOUSE_UP: Adobe.Indesign.BehaviorEvents;
			/**
			 * Alias for MOUSE_DOWN. Triggers the behavior when the mouse 
			 * button is clicked (without being released).
			 * @type {Adobe.Indesign.BehaviorEvents}
			 * @readonly
			 */
			public static readonly mouseDown: Adobe.Indesign.BehaviorEvents;
			/**
			 * Alias for MOUSE_ENTER. Triggers the behavior when the mouse 
			 * pointer enters the area defined by the bounding box of the 
			 * object.
			 * @type {Adobe.Indesign.BehaviorEvents}
			 * @readonly
			 */
			public static readonly mouseEnter: Adobe.Indesign.BehaviorEvents;
			/**
			 * Alias for MOUSE_EXIT. Triggers the behavior when the mouse 
			 * pointer exits the area defined by the bounding box of the 
			 * object.
			 * @type {Adobe.Indesign.BehaviorEvents}
			 * @readonly
			 */
			public static readonly mouseExit: Adobe.Indesign.BehaviorEvents;
			/**
			 * Alias for MOUSE_UP. Triggers the behavior when the mouse is 
			 * released after a click.
			 * @type {Adobe.Indesign.BehaviorEvents}
			 * @readonly
			 */
			public static readonly mouseUp: Adobe.Indesign.BehaviorEvents;
			/**
			 * Triggers the behavior when the focus moves to a different 
			 * interactive object.
			 * @type {Adobe.Indesign.BehaviorEvents}
			 * @readonly
			 */
			public static readonly ON_BLUR: Adobe.Indesign.BehaviorEvents;
			/**
			 * Triggers the behavior when the object receives focus, either 
			 * through a mouse action or by pressing the Tab key.
			 * @type {Adobe.Indesign.BehaviorEvents}
			 * @readonly
			 */
			public static readonly ON_FOCUS: Adobe.Indesign.BehaviorEvents;
			/**
			 * Alias for ON_BLUR. Triggers the behavior when the focus 
			 * moves to a different interactive object.
			 * @type {Adobe.Indesign.BehaviorEvents}
			 * @readonly
			 */
			public static readonly onBlur: Adobe.Indesign.BehaviorEvents;
			/**
			 * Alias for ON_FOCUS. Triggers the behavior when the object 
			 * receives focus, either through a mouse action or by pressing 
			 * the Tab key.
			 * @type {Adobe.Indesign.BehaviorEvents}
			 * @readonly
			 */
			public static readonly onFocus: Adobe.Indesign.BehaviorEvents;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}