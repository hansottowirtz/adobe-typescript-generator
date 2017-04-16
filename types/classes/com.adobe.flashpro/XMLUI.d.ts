/// <reference path="../../packages/com.adobe.flashpro/index.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * Ability to get/set properties of XMLUI dialog, and 
		 * accept/cancel out of one.  Can be used in callbacks such as 
		 * oncommand handlers in buttons.
		 */
		class XMLUI extends Adobe.Csawlib.CSHostObject {
			/**
			 * Makes the current XMLUI dialog exit with an "accept" state.  
			 * Identical to the user clicking the OK button.  This is the 
			 * JSAPI equivalent of the XMLUI.accept() API in ActionScript
			 */
			public accept(): void;
			/**
			 * Makes the current XMLUI dialog exit with a "cancel" state.  
			 * Identical to the user clicking the Cancel button.  This is 
			 * the JSAPI equivalent of the XMLUI.cancel() API in 
			 * ActionScript
			 */
			public cancel(): void;
			/**
			 * Retrieves the value of the specified property of the current 
			 * XMLUI dialog.  This is the JSAPI equivalent of the 
			 * XMLUI.get() API in ActionScript
			 * @param {string} name Name of XMLUI property to retrieve
			 */
			public get(name: string): string;
			/**
			 * get the current item (like the line selected in a listbox 
			 * control) for the control matching the property passed as a 
			 * parameter
			 * @param {string} name the xml control property name
			 */
			public getControlItemElement(name: string): any;
			/**
			 * gets the enable state of the object - true is enabled - 
			 * false is disabled
			 * @param {string} name name of the object to get the enabled 
			 * state of
			 */
			public getEnabled(name: string): boolean;
			/**
			 * method: returns a bool that specifies whether the control is 
			 * visible or invisible (hidden)
			 * @param {string} controlID controlID for the object to get 
			 * the visible setting for
			 */
			public getVisible(controlID: string): boolean;
			/**
			 * Modifies the value of the specified property of the current 
			 * XMLUI dialog.  This is the JSAPI equivalent of the 
			 * XMLUI.set() API in ActionScript
			 * @param {string} name Name of XMLUI property to modify
			 * @param {string} value Value to set XMLUI property to
			 */
			public set(name: string, value: string): void;
			/**
			 * set the current item (like the line selected in a listbox 
			 * control) for the control matching the property passed as a 
			 * parameter
			 * @param {string} name the xml control property name
			 * @param {any} elementItem a JSObj which has a "label" string 
			 * and a "value" string. If "value" string does not exist then 
			 * "value " is set to "label" string
			 */
			public setControlItemElement(name: string, elementItem: any): string;
			/**
			 * Clears the current label,value pairs for combobox and 
			 * listbox control in the current XMLUI dialog.
			 * @param {string} name the xml control property name
			 * @param {any} elementItemArray an array of JSObjs where the 
			 * JSObjs and a "label" string and a "value" string. If "value" 
			 * string is blank then it is set to "label" string.
			 */
			public setControlItemElements(name: string, elementItemArray: any): void;
			/**
			 * sets the enabled property for a control (whether it is 
			 * grayed out or not
			 * @param {string} name name of the object to be 
			 * enabled/disabled
			 * @param {boolean} enable true param enables control
			 */
			public setEnabled(name: string, enable: boolean): void;
			/**
			 * method setVisible is a method to show/hide a control
			 * @param {string} controlID controlID for the object to set 
			 * the visible property for
			 * @param {boolean} visible a boolean that if set to true will 
			 * make the object visible and if false with make the object 
			 * invisible (hidden)
			 */
			public setVisible(controlID: string, visible: boolean): void;
		}
	}
}