/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Widget */
		class AngleEditbox extends Adobe.Incopy.Widget {
			/**
			 * The default value in an editbox control. Note: Do not 
			 * specify both edit contents and edit value. If both are 
			 * specified, the one that occurs later in the script is used.
			 * @type {string}
			 */
			public editContents: string;
			/**
			 * The real number default value of the editbox or combobox. 
			 * Note: For measurement controls, the value is interpreted in 
			 * points. The points value is converted to edit units when the 
			 * dialog opens. Note: Do not specify both edit value and edit 
			 * contents. If both are specified, the one that occurs later 
			 * in the script is used.
			 * @type {number}
			 */
			public editValue: number;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Incopy.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Incopy.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * The unique ID of the AngleEditbox.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the AngleEditbox within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The amount to increment/decrement the value when a user 
			 * selects the control and holds down the Shift key while 
			 * pressing an arrow key on the keyboard.
			 * @type {number}
			 */
			public largeNudge: number;
			/**
			 * The maximum value that a user is allowed to type in a 
			 * numeric editbox or combobox. Note: The value for a 
			 * measurement editbox or combobox is interpreted in points, 
			 * regardless of the edit units specified for the control. The 
			 * points value is converted automatically to the edit unit 
			 * when the dialog is opened.
			 * @type {number}
			 */
			public maximumValue: number;
			/**
			 * The minumim value that a user is allowed to type in a 
			 * numeric editbox or combobox. Note: The value for a 
			 * measurement editbox or combobox is interpreted in points, 
			 * regardless of the edit units specified for the control. The 
			 * points value is converted automatically to the edit unit 
			 * when the dialog is opened.
			 * @type {number}
			 */
			public minimumValue: number;
			/**
			 * The width of the control. For an editbox or combobox, 
			 * specifies the minimum width of the box.
			 * @type {number}
			 */
			public minWidth: number;
			/**
			 * The parent of the AngleEditbox (a DialogColumn, DialogRow, 
			 * EnablingGroup or BorderPanel).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The amount to increment/decrement the value when the user 
			 * selects the control and presses an arrow key on the 
			 * keyboard.
			 * @type {number}
			 */
			public smallNudge: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerAngleEditbox(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerAngleEditbox(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}